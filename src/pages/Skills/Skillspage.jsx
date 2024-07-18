import React, { useEffect, useState } from 'react';
import { Scroller } from '../../components';
import { SkillCards } from '../../components';
import './SkillsPage.css';

import { Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Skills() {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('./skills.json')
            .then(response => {
                if (!response.ok) {
                    throw new console.error('Failed to fetch skills');
                }
                return response.json();
            })
            .then(data => { setSkills(data.skills) })
            .catch(error => {
                console.log('There was a problem: ', error);
            });
    }, []);
    return (
        <section id='skills' className='section-container secondary-color'>
            <h1 className='text-4xl font-bold flex justify-center laptop:text-6xl items-center'>
                My&nbsp;<span className='text-[var(--main-color)]'>skills</span>
            </h1>
            <Scroller />
            <div className='bg-[var(--bg-color)] w-[90%] h-[80%] pb-6 pt-6 text-sm cards-container'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'3'}
                    tablet:slidesPerView={'4'}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >{skills.map((category, index) => (
                    <SwiperSlide key={index}>
                        <SkillCards title={category.category} skillArr={category.items} />
                    </SwiperSlide>
                ))}</Swiper>
            </div>
        </section>
    )
}
