import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Card from './Card';
const AllsBookings = () => {

    const url = `https://secure-escarpment-79738.herokuapp.com/allbookings`;
    const { data: bookings, isLoading, refetch } = useQuery(['allBooking'], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(bookings);
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>

            <section>
                <PageTitle title="All Gallery" />
                <div className="Appes">
                    <h1 className='text-center mt-3 text-black text-2xl'> All Bookings Here</h1>
                    <div className="propertiest text-black">
                        {bookings.map((items: any) => (
                            <Card data={items} key={items._id} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllsBookings;