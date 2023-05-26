import React from 'react'
import Contact from './Contact'
import Project from './Project'
import About from './Skills'
const Body = () => {
    return (
        <>
            <div className='body-container'>
                <div className='body-main-container'>
                    <div className='info'>
                        <div className='info-part'>
                            <h1>
                                Hellow 
                            </h1>
                            <p>Hi,<br/> My Name Is <h3>Aarya Moktan</h3>
                            
                                Iam A <div className='ul-part'><ul>
                                <li><span></span></li>
                                </ul></div> </p>
                        </div>
                    </div>
                    <div className='img'>
                        <div className='img-part'>
                            <img src={require("../images/aarya.jpg")} alt="hello" />
                        </div>
                    </div>
                </div>
            </div>
            <Project/>
            <About/>
            <Contact/>
        </>)
}
export default Body