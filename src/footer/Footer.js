import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='footer-main-container'>
                <div class="footer-cont">
                    <h3>Follow me on These</h3>
                    <a href="https://www.facebook.com/aarya.moktan.98/" target="blank"><i class="fa-brands fa-square-facebook" style={{"color": "#0861fd;"}}></i></a>
                    <a href="https://www.instagram.com/aaryan_moktan/" target="blank"><i class="fa-brands fa-square-instagram" style={{"color": "#ff0088;"}}></i></a>
                    <a href="https://www.linkedin.com/in/aaryan-moktan-872152273/" target="blank"><i class="fa-brands fa-linkedin" style={{"color": "#588adf;"}}></i></a>
                </div>
                <div className='email-para'>
               <p > Email: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="blank">aaryamoktan2055@gmail.com</a></p></div>
            </div>
        </>
    )
}

export default Footer