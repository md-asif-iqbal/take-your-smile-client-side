import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Card from './Card';
const PaymentDoneBook = () => {
  const [pandding, setPandding] = useState([]);
    const [bookings , setBookings] = useState([]);
    const url = `http://localhost:8000/allbookings`;

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
                  return item.status === 'payment';
                });
                setBookings(updatedItems);
                console.log(pandding);
                
              };

  return (
    <div>
      <div>

        <section>
          <PageTitle title="All Gallery" />
          <div className="Appes">
            <h1 className='text-center mt-3 text-2xl text-secondary'> All Payments Here</h1>
            <div className="propertiest text-secondary">
              {bookings.map((item) => (
                <Card data={item} key={item.id} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentDoneBook;