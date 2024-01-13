import React from 'react'
import "./Contact.css";
import contact from "../../assets/images/contact.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div class="container contact" id='contact'>
                <div class="card card0 border-0">
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div class="card1">
                                <div class="row border-line">
                                    <img src={contact} alt="contact" className='image' />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <div class="card2 d-flex card border-0 px-4 py-5">
                                <div class="row">
                                    <div class="row">
                                        <h6>Contact with
                                        <FaLinkedin color='blue' size={36} className='ms-2'/>
                                        <FaGithub color='black' size={36} className='ms-2'/>
                                        <FaWhatsappSquare  color='green' size={36} className='ms-2'/>
                                        </h6></div>
                                    <div class="row px-3 mb-4">
                                        <div class="line" />
                                        <small class="or text-center">OR</small>
                                        <div class="line" />
                                    </div>
                                    <div class="row px-3">
                                        <input type="text" name="name" placeholder="Write Your Name" class="mb-3" />
                                    </div>
                                    <div class="row px-3">
                                        <input type="email" name="email" placeholder="Write Your Email Address" class="mb-3" />
                                    </div>
                                    <div class="row px-3">
                                        <textarea type="text" name="Message" placeholder="Write Your Message" class="mb-3" />
                                    </div>
                                    <div class="row px-3">
                                        <button className='button' type='submit'>SEND MESSAGE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact