import React, { useEffect, useState } from 'react';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Card from './Card';
const PaymentDoneBook = () => {

  const [allBookings , setAllBookings]= useState([]);
  useEffect(() => {
    fetch("https://secure-escarpment-79738.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
          setAllBookings(data);
      });
  }, [allBookings]);

    return (
        <div>
            <div>
           
            <section>
          <PageTitle title="All Gallery" />
          <div className="Appes">
          <h1 className='text-center mt-3 text-2xl'> All Payments Here</h1>
      <div className="propertiest text-black">
      {allBookings.map((item) => (
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