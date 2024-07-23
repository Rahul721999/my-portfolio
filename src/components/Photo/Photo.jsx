import React from 'react';
import './Photo.css'

const Photo = () => {
    return (
        <div className="justify-center items-center rounded-full profile-photo w-40 tablet:w-fit">
            <img
                src='./profile_photo.png'
                alt='desktop-profile'
                className='rounded-full'
            />
        </div>
    )
}

const AboutImg = () => {

    return (
        <div className="justify-center items-center about-img-container relative">
            <img
                src='./aboutMeImg.jpg'
                alt='about-Img'
                className='about-img justify-center items-center'
            />
            <span className='circle-spin'></span>
        </div>
    )
}

export { Photo, AboutImg };