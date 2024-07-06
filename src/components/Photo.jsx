import React from 'react';
const Photo = () => {
    return (
        <div className="hidden justify-center items-center rounded-full laptop:flex laptop:w-2/5">
            <img
                src='src\assets\stand_photo.jpg'
                alt='profile-picture'
                className='rounded-full'
            />
        </div>
    )
}

const MobilePhoto = () =>{
    return(
        <div className="flex justify-center items-center rounded-full laptop:hidden">
            <img
                src='src\assets\photo_small.jpg'
                alt='profile-picture'
                className='rounded-full'
            />
        </div>
    )
}
export {Photo, MobilePhoto};