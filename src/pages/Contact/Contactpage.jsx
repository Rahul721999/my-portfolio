import React from 'react';
import './Contactpage.css';


export default function Contact() {
    const [result, setResult] = React.useState("");
    const secret_key = import.meta.env.VITE_SECRET_KEY;
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        
        const formData = new FormData(event.target);
        formData.append("access_key",secret_key);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
        console.log(result);
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
                    <button href="#" type="submit" className="inline-flex justify-center items-center w-36 h-full text-lg rounded-lg border-solid font-bold tracking-widest relative overflow-hidden z-1 border-2 border-cyan bg-cyan text-dark-theme cursor-pointer hire-me-btn">Submit</button>
                </div>
            </form>
        </section>
    )
}
