import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import DOMPurify from 'dompurify'
import { useQuery } from "@tanstack/react-query";
import Loading from "../shared/Loading/Loading";
import './blog.css';
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
        <div className="font-sans pt-14 md:pt-36 container px-5 md:px-10 py-10 mx-auto ">
            <h1 className='text-xl sm:text-2xl md:text-3xl text-3 text-center my-5 md:my-10 font-bold text-secondary'>{articles?.title}</h1>

            <section className=" body-font blog-content">
              <div className="w-full h-auto mx-auto">
                <img src={articles?.image} alt="" className="mx-auto mb-5"/>
              </div>
            <div className="text-secondary" dangerouslySetInnerHTML={sanitizedData(articles?.body)}>
            </div>
    </section>
</div>
</div>
  
  );
};

export default Blogs;
