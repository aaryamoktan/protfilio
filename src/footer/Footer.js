import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
    return (
        <>
            <div className='footer-main-container'>
                <div class="footer-cont">
                    <h3>Follow me on These</h3>
                    <a href="https://www.facebook.com/aarya.moktan.98/" >Facebook</a>
                    <a href="https://www.instagram.com/aaryan_moktan/">Instagram</a>
                    <a href="https://www.linkedin.com/in/aaryan-moktan-872152273/">Linkedin</a>
                </div>
                <div className='email-para'>
               <p > Email: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">aaryamoktan2055@gmail.com</a></p></div>
            </div>
        </>
    )
}

export default Footer