import React from 'react';
import './Contactpage.css';


export default function Contact() {
    return (
        <section id='contact' className='section-container'>
            <h1 className='text-4xl font-bold flex justify-center laptop:text-6xl items-center'>Contact&nbsp;<span className='text-cyan'>Me!</span></h1>

            <form className='contact-form'>
                <div className='input-box'>
                    <div className='input-field'>
                        <input className='input-tag' type='text' placeholder='Full Name' required/>
                        <span className='selected-field'></span>
                    </div>
                    <div className='input-field'>
                        <input className='input-tag' type='text' placeholder='Email address' required/>
                        <span className='selected-field'></span>
                    </div>
                </div>
                <div className='input-box'>
                    <div className='input-field'>
                        <input className='input-tag' type='number' placeholder='Mobile number' required/>
                        <span className='selected-field'></span>
                    </div>
                    <div className='input-field'>
                        <input className='input-tag' type='text' placeholder='Email Subject' required/>
                        <span className='selected-field'></span>
                    </div>
                </div>
                <div className='textarea-field'>
                    <textarea name="" id='' cols={30} rows={10} placeholder='Type Your Message Here' required></textarea>
                    <span className='selected-field'></span>
                </div>
                <div className="w-full h-12 flex justify-center">
                    <a href="#" type="submit" className="inline-flex justify-center items-center w-36 h-full text-lg rounded-lg border-solid font-bold tracking-widest relative overflow-hidden z-1 border-2 border-cyan bg-cyan text-dark-theme cursor-pointer hire-me-btn">Submit</a>
                </div>
            </form>
        </section>
    )
}
