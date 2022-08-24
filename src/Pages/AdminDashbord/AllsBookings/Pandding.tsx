import { useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Card from './Card';

const Pandding = () => {
    const [pandding, setPandding] = useState([]);
    const [bookings , setBookings] = useState([]);
    const url = `https://secure-escarpment-79738.herokuapp.com/allbookings`;

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
          
            setBookings(data)
            filterItems(data);
          });
      }, [bookings]);
        
        // if(isLoading){
        //     return <Loading/>
        // }
        const filterItems = (bookings) => {
                const updatedItems = bookings.filter((item) => {
                  return item.status === 'pending';
                });
                setBookings(updatedItems);
                console.log(pandding);
                
              };

    return (
        <div>

            <section>
                <PageTitle title="All Gallery" />
                <div className="Appes">
                    <h1 className='text-center mt-3 text-black text-2xl'> All Pandding Bookings Here</h1>
                    <div className="propertiest text-black">
                        {bookings.map((items) => (
                            <Card data={items} key={items._id} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pandding;