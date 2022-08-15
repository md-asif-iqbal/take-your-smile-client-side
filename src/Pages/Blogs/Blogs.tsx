import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import DOMPurify from 'dompurify'
import { useQuery } from "@tanstack/react-query";
import Loading from "../shared/Loading/Loading";

const Blogs = () => {

  let {id} = useParams();  
  const { isLoading, isError, data:articles, error, refetch } = useQuery(['articles'],  () => 
  fetch(`http://localhost:8000/articles/${id}`,{
      method: "GET",
      headers: {
          'content-type': "applicataion/json"
      }
  }).then(res => res.json())
  )
  if (isLoading) {
      return <div className='h-40 mt-10'>{<Loading />}</div>

    }
  
    if (isError) {
      // return <span>Error: {error}</span>
    }

const sanitizedData = (data:any) => ({
  __html: DOMPurify.sanitize(data)
})
  refetch();
  return (
        <div>
            <NavBar/>
        <div className="font-sans mt-36 container px-10 py-10 mx-auto blog-content">
            <h1 className='text-3xl text-center my-10 font-bold'>{articles?.title}</h1>

            <section className="text-gray-600 body-font">
              <div className="w-full h-auto mx-auto">
                <img src={articles?.image} alt="" className="mx-auto mb-5"/>
              </div>
            <div className="" dangerouslySetInnerHTML={sanitizedData(articles?.body)}>
            </div>
    </section>
</div>
</div>
  
  );
};

export default Blogs;
