import React from 'react';
const Photo = () => {
    return (
        <div className="hidden justify-center items-center rounded-full laptop:flex profile-photo">
            <img
                src='./src/assets/large_photo.png'
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
                src='./src/assets/small_photo.png'
                alt='mobile-profile'
                className='rounded-full'
            />
        </div>
    )
}
export { Photo, MobilePhoto };