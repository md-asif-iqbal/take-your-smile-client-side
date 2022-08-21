import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../shared/Loading/Loading';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Card from './Card';



const PaymentDoneBook = () => {
  const url = `https://secure-escarpment-79738.herokuapp.com/allbookings`;
    const { data:bookings , isLoading , refetch } = useQuery(['allBooking'], () => fetch(url, {
    method: 'GET',
    headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
        }).then(res => res.json()));
        console.log(bookings);
        if(isLoading){
            return <Loading/>
        }
  return (
    <div>
      <div>

        <section>
          <PageTitle title="All Gallery" />
          <div className="Appes">
            <h1 className='text-center mt-3 text-2xl text-black'> All Payments Here</h1>
            <div className="propertiest text-black">
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