import React from 'react';
import { motion } from 'framer-motion';
import './Photo.css';

const Photo = () => {
    return (
        <div className="flex relative justify-center items-center w-40 h-40 tablet:w-fit tablet:h-fit ">
            <motion.div
                className="relative rounded-full w-full h-full flex justify-center items-center "
                initial={{ scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    delay: 2,
                    duration: 0.5,
                    ease: "easeIn"
                }}
            >
                <img
                    src='./profile_photo.png'
                    alt='desktop-profile'
                    className='rounded-full w-[90%] h-[90%] tablet:p-2 laptop:p-3'
                />
                <motion.svg
                    viewBox="0 0 160 160"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-full h-full"
                    fill="transparent"
                >
                    <defs>
                        {/* Define the gradient */}
                        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "var(--text-color)", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "var(--main-color)", stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <motion.circle
                        cx="80"
                        cy="80"
                        r="78"
                        stroke="url(#gradientStroke)"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "2 120 25 20 10 2" }}
                        animate={{
                            strokeDasharray: [
                                "2 120 25 20 10 2",
                                "15 5 95 60 15 30",
                                "15 10 35 50 2 60"
                            ],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

const AboutImg = () => {
    return (
        <div className="justify-center items-center about-img-container relative">
            <img
                src='./aboutMeImg.jpg'
                alt='about-Img'
                className='about-img justify-center items-center '
            />
            <span className='circle-spin'></span>
        </div>
    );
};

export { Photo, AboutImg };
