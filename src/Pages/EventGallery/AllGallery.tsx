import React from 'react';
import PageTitle from '../shared/PageTitle/PageTitle';
import { properties } from './constants/data';
import Card from './Card';

const AllGallery = () => {
    return (
        <section>
          <PageTitle title="All Gallery" />
          <div className="Appes">
      <div className="propertiest">
        {properties.map((item) => (
          <Card data={item} key={item.date} />
        ))}
      </div>
      </div>
        </section>
    );
};

export default AllGallery;