import React, { useState, useEffect } from 'react';
import { IoPaperPlane } from 'react-icons/io5';
import spinner from '../assets/images/loading.svg'
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const showSuccessToast = () => toast.success('Message Sent Successfully!',
    {
        style: {
            background: `linear-gradient(to bottom right,
                hsla(240, 1%, 18%, 0.251) 0%,
                hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%)`,
            color: 'hsl(45, 100%, 72%)',
            borderRadius: '14px',
            fontSize: '14px',
            textTransform: 'capitalize',
            boxShadow: 'rgba(0, 0, 0, 0.8) 0px 0px 30px 10px',
            transition: '0.25s ease',
        },
    }
);

const showErrorToast = () => toast.error('Message Could not be Sent. \n\tPlease try again later',
    {
        style: {
            background: `linear-gradient(to bottom right,
                hsla(240, 1%, 18%, 0.251) 0%,
                hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%)`,
            color: 'hsl(45, 100%, 72%)',
            borderRadius: '14px',
            fontSize: '14px',
            textTransform: 'capitalize',
            boxShadow: 'rgba(0, 0, 0, 0.8) 0px 0px 30px 10px',
            transition: '0.25s ease',
        },
    }
);

const Contact = (props) => {


    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
    const [loading, setLoading] = useState(false);
    const { currPage } = props;

    const submitContactForm = async (data) => {
        console.log("Form Data - ", data)
        try {
            setLoading(true)
            const response = await axios.post(BASE_URL + '/contact', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            showSuccessToast();
            console.log("Email data - ", response);
            setLoading(false);
        } catch (error) {
            showErrorToast();
            console.log("ERROR MESSAGE - ", error.message)
            setLoading(false);
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                fullName: "",
                email: "",
                message: "",
            })
        }
    }, [reset, isSubmitSuccessful])

    return (
        <article className={`contact ${(currPage === "contact") && 'active'}`}>
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>
            <section className="mapbox">
                <figure>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58617.391141250795!2d86.32118832489085!3d23.330740813227017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f67d8536b0f1fd%3A0xdc1033bd1a93d07b!2sPurulia%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1689014728690!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" title="location-map" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </figure>
            </section>
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form onSubmit={handleSubmit(submitContactForm)} className="form" >
                    <div className="input-wrapper">
                        <div className='error-wrapper'>
                            <input type="text" name="fullname" className="form-input" placeholder="Full name" {...register("fullName", { required: true })} aria-invalid={errors.fullName ? "true" : "false"} />
                            {errors.fullName?.type === 'required' && <p role="alert" className='form-error'>First name is required</p>}
                        </div>
                        <div className='error-wrapper'>
                            <input type="email" name="email" className="form-input" placeholder="Email address"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Please enter valid email"
                                    }
                                })} />
                            {errors.email && <p role="alert" className='form-error'>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className='error-wrapper'>
                        <textarea name="message" className="form-input" placeholder="Your Message" {...register("message", { required: true })}
                            aria-invalid={errors.message ? "true" : "false"} />
                        {errors.message?.type === 'required' && <p role="alert" className='form-error'>Message is required</p>}
                    </div>
                    {loading ?
                        <button className="form-btn" type="submit" disabled>
                            <img src={spinner} alt="Loading..." width="20" />
                            <span>Sending</span>
                        </button>
                        :
                        <button className="form-btn" type="submit">
                            <IoPaperPlane className='ion-icon' />
                            <span>Send Message</span>
                        </button>
                    }
                </form>
                <Toaster />
            </section>
        </article>
    )
}

export default Contact