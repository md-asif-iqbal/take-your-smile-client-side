import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';
import PageTitle from '../shared/PageTitle/PageTitle';
import Card from './Card';
const CorporateGallery = () => {
    const [user] = useAuthState(auth);

    const [gallery, setGallery] = useState([]);
    const [events, setEvents] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/gallerys")
        .then((res) => res.json())
        .then((data) => {
          setGallery(data);
          setEvents(data);
          filterItem(data);
        });
    }, [events]);
         
      
      const filterItem = (categItem: any) => {
        const updatedItems = gallery.filter((item) => {
          return item.titleCode === 'corporate';
        });
        setEvents(updatedItems);
        console.log(events);
        
      };
  
  
      
   
  
  
    return (
        <div>
             <section>
          <PageTitle title="All Gallery" />
          <div className="Appes">
      <div className="propertiest">
        {events.map((item) => (
          <Card data={item} key={item._id} />
        ))}
      </div>
      </div>
        </section>
         
    </div>
    );
};

export default CorporateGallery;