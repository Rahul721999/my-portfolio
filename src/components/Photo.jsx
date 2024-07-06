import React from 'react';
const Photo = () => {
    return (
        <div className="hidden justify-center items-center rounded-full laptop:flex laptop:w-3/5">
            <img
                src='src\assets\stand_photo.jpg'
                alt='profile-picture'
                className='rounded-full'
            />
        </div>
    )
}
export default Photo;