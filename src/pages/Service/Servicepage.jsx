import { React, useState, useEffect } from 'react';
import { ServiceCard } from '../../components';
import './ServicePage.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Service = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch('./services.json')
      .then(response => {
        if (!response.ok) {
          throw new console.error('Failed to fetch skills');
        }
        return response.json();
      })
      .then(data => { setService(data.services) })
      .catch(error => {
        console.log('There was a problem: ', error);
      });
  }, []);

  return (
    <section id="service" className="h-screen section-container">
      <h1 className="text-4xl font-bold flex justify-center laptop:text-6xl items-center">
        My&nbsp;<span className="text-cyan">Services</span>
      </h1>
      <div className=" mt-8 mb-8
        w-full h-[70%] items-center justify-center
        gap-10 tablet:gap-20 
        service-cards-container">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.category} description={service.description} />
        ))}
      </div>
      <div className="w-full h-12 flex justify-center">
        <a className="btn-type1 text-sm">Projects!</a>
      </div>
    </section>

  )
}

export default Service;
