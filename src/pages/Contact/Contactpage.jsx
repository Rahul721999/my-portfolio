import React from 'react';
import './Contactpage.css';
import Swal from 'sweetalert2';

export default function Contact() {
    const secret_key = import.meta.env.VITE_SECRET_KEY;
    const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        formData.append("access_key",secret_key);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Form Submitted Successfully",
                icon: "success"
              });
            event.target.reset();
        } else {
            console.log("Error", data);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something Went Wrong!",
              });
        }
    };

    return (
        <section id='contact' className='section-container'>
            <h1 className='text-4xl font-bold flex justify-center laptop:text-6xl items-center'>Contact&nbsp;<span className='text-cyan'>Me!</span></h1>

            <form className='contact-form' onSubmit={onSubmit}>
                <div className='input-box'>
                    <div className='input-field'>
                        <input name="name" type='text' placeholder='Full Name' required />
                        <span className='selected-field'></span>
                    </div>
                    <div className='input-field'>
                        <input name="email" type='email' placeholder='Email address' required />
                        <span className='selected-field'></span>
                    </div>
                </div>
                <div className='input-box'>
                    <div className='input-field'>
                        <input email="mobile" type='number' placeholder='Mobile number' required />
                        <span className='selected-field'></span>
                    </div>
                    <div className='input-field'>
                        <input name='email-subject' type='text' placeholder='Email Subject' required />
                        <span className='selected-field'></span>
                    </div>
                </div>
                <div className='textarea-field'>
                    <textarea name="message" id='' cols={30} rows={10} placeholder='Type Your Message Here' required></textarea>
                    <span className='selected-field'></span>
                </div>
                <div className="w-full h-12 flex justify-center">
                    <button href="#" type="submit" className="btn-type1">Submit</button>
                </div>
            </form>
        </section>
    )
}
