import React from 'react';
import './Photo.css'

const Photo = () => {
    return (
        <div className="hidden justify-center items-center rounded-full laptop:flex profile-photo">
            <img
                src='./large_photo.png'
                alt='desktop-profile'
                className='rounded-full'
            />
        </div>
    )
}

const MobilePhoto = () => {
    return (
        <div className="flex justify-center items-center rounded-full laptop:hidden profile-photo">
            <img
                src='./small_photo.png'
                alt='mobile-profile'
                className='rounded-full'
            />
        </div>
    )
}

const AboutImg = () =>{

    return(
        <div className="inline-block justify-center items-center about-img-container relative">
            <img
                src='./aboutMeImg.jpg'
                alt='about-Img'
                className='about-img justify-center items-center'
            />
            <span className='circle-spin'></span>
        </div>
    )
}

export { Photo, MobilePhoto, AboutImg };