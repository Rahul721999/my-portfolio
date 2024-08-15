import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ title, description }) {
  const service_category = title || "Unknown";
  const service_description = description || "Unknown";
  return (
    // <div class="container h-2/3 w-1/5">
    //   <div class="card">
    //     <div class="front">
    //       <p class="front-heading text-lg font-bold font-sans">{service_category}</p>
    //     </div>
    //     <div class="back">
    //       <p class="back-heading text-lg font-bold font-sans">{service_category}</p>
    //       <p className='text-center text-xs pl-8 pr-8'>{service_description}</p>
    //     </div>
    //   </div>
    // </div>

    /* ---------------------new card design---------------------*/
    <section class="container w-1/5">
      <div class="card items-center">
        <div class="content w-full">
          <p class="logo">-</p>
          <div class="h6 font-semibold w-7">{service_category}</div>
          <div class="hover_content">
            <p className='text-sm tablet:text-base'>{service_description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
