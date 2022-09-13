import React from "react";
import "./Modal.css";
import Feature from "./Feature";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Modal = ({ data, close }) => {
  const handleDelete =( id: any ) =>{
    const url =`https://secure-escarpment-79738.herokuapp.com/admin/booking/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            toast(`${service} Order is Deleted`);
            console.log('yes');
            
            
        })
          
    console.log(id);
  }
  const handleComplete =(id : any)=>{
    fetch(`https://secure-escarpment-79738.herokuapp.com/orders/complete/${id}`, {
      method: "PUT",
  })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          // 
          toast.success(`Congrats ${service} is completed.`);
      });


  }

  const {
    decrImg1,details,email,location,package:packages,price,phone,name,service,time,date,status, _id } = data;



  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };




  return (
    <motion.div
      className="modals"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        className="modal__image"
        alt="real estate mansion"
        src={decrImg1}
        variants={imageVariants}
      ></motion.img>
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__price">{service}</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__address">{date}</span>
        </motion.div>

        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">Package: {packages}</p>
        </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">Amount: <span className="text-emerald-400"> {price} </span></p>
        </motion.div>

        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">Time: {time}</p>
        </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">Location: {location}</p>
        </motion.div>
        
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">Customer: {name}</p>
        </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">Email Address: {email}</p>
        </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">Contact Number: {phone}</p>
        </motion.div>
       
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">Description: {details}</p>
        </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">Status: <span className="text-primary"> {status} </span> </p>
        </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}>
          <p className="modal__description"> {status==='paid'? <button onClick={()=> handleComplete(_id)} className="hover:bg-primary uppercase px-6 py-1 rounded  hover:text-white border-2 cursor-pointer">Complete</button>:
          <button onClick={()=> handleDelete(_id)} className="hover:bg-primary uppercase px-6 py-1 rounded  hover:text-white border-2 cursor-pointer">DELETE</button>
          }  </p>
        </motion.div>
        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close} 
          >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
