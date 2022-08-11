import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import './modal.css';
const  Modal = () => {
  const [modal, setModal] = useState(false);
  const [close, setClose] = useState(true);
  useEffect(() => {
    setModal(true)
  },[])
  const { isLoading, isError, data:sponsors, error } = useQuery(['sponsor'],  () => 
  fetch('http://localhost:8000/sponsor',{
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
      return <span>Error: {}</span>
    }
    return (
        
        <div>
           
             {
                modal && <>
        
                <div className='popup anim p-5 mx-auto' id={close === false && 'popup'}>
                    <button id="close" onClick={() => setClose(false)}>&times;</button>
                    {
                        sponsors.map((sponsor) => (<>
                     
                        <h2 className="text-lg md:text-2xl font-bold mb-2">{sponsor.title}</h2>
                        <div>
                            <img src={sponsor.image} alt="..." />
                        </div>
                        <p className=" text-justify">{sponsor.description}</p>
                        </>
                    ))}
                        <Link to="/home" className="btn btn-primary">Let's Go</Link>
                </div>
                </>
             }
     
           
                
              
        </div>
    );
}
export default Modal;