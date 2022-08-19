import React from 'react';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Card from './Card';
import { payments } from './constants/data2';


const PaymentDoneBook = () => {
  return (
    <div>
      <div>

        <section>
          <PageTitle title="All Gallery" />
          <div className="Appes">
            <h1 className='text-center mt-3 text-2xl'> All Payments Here</h1>
            <div className="propertiest text-black">
              {payments.map((item) => (
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