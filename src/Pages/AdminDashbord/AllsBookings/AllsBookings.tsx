
import { useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Card from './Card';
import { properties } from './constants/data';
const url = `http://localhost:8000/gallerys`;
// useEffect(() => {
//   fetch("http://localhost:8000/gallerys")
//     .then((res) => res.json())
//     .then((data) => {
//       setEvents(data);
//     });
// }, [events]);

const AllsBookings = () => {
    return (
        <div>

            <section>
                <PageTitle title="All Gallery" />
                <div className="Appes">
                    <h1 className='text-center mt-3 text-2xl text-secondary'> All Bookings Here</h1>
                    <div className="propertiest text-black">
                        {properties.map((item) => (
                            <Card data={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllsBookings;