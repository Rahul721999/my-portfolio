import React from 'react';
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
        <div className="flex justify-center items-center rounded-full w-44 m-10 mb-1 profile-photo">
            <img
                src='./aboutMeImg.jpg'
                alt='about-Img'
                className='rounded-full'
            />
        </div>
    )
}

export { Photo, MobilePhoto, AboutImg };