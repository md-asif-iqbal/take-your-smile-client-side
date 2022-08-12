import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import './modal.css';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";

const  Modal = () => {
  const [modal, setModal] = useState(false);
  const [close, setClose] = useState(true);
  useEffect(() => {
    setModal(true)
  },[])
  const { isLoading, isError, data:sponsors, error } = useQuery(['sponsor'],  () => 
  fetch('https://secure-escarpment-79738.herokuapp.com/sponsor',{
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
        
                <div className='popup anim p-5 mx-auto z-10 ' id={close === false && 'popup'}>
                    <button id="close" onClick={() => setClose(false)}>&times;</button>
                    <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                   
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                      }}
                    modules={[Navigation, Pagination,  Autoplay]}
                    className="mySwiper"
                    >
                    {
                        sponsors.map((sponsor) => (<SwiperSlide>
                     
                        <h2 className="text-lg md:text-2xl font-bold mb-2 w-full">{sponsor.title}</h2>
                        <div>
                            <img src={sponsor.image} alt="..." />
                        </div>
                        <p className=" text-justify px-2 mb-10">{sponsor.description}</p>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                        <Link to="/corporate" className="btn btn-primary" onClick={() => setClose(false)}>Let's Go</Link>
                </div>
                </>
             }
     
           
                
              
        </div>
    );
}
export default Modal;