import React from 'react'
const About = () => {
    return (
        <>
            <div className='skill-container'>
                <h1 className='skill-container-bar'>Skill Progress Bar</h1>
                <div className='skill-container-main-box'>
                    <div className='skill-container-main'>
                        <span className='skill-title'>Html</span>
                        <div className='skill-bar-per'>
                            <span className='skill-per html'>
                                <span className='skill-tooltip'>90%</span>
                            </span>
                        </div>
                    </div>
                    <div className='skill-container-main'>
                        <span className='skill-title'>Css</span>
                        <div className='skill-bar-per'>
                            <span className='skill-per Css'>
                                <span className='skill-tooltip'>70%</span>
                            </span>
                        </div>
                    </div>
                    <div className='skill-container-main'>
                        <span className='skill-title'>JavaScript</span>
                        <div className='skill-bar-per'>
                            <span className='skill-per Javascript'>
                                <span className='skill-tooltip'>60%</span>
                            </span>
                        </div>
                    </div>
                    <div className='skill-container-main'>
                        <span className='skill-title'>React Js</span>
                        <div className='skill-bar-per'>
                            <span className='skill-per React-js'>
                                <span className='skill-tooltip'>85%</span>
                            </span>
                        </div>
                    </div>
                    <div className='skill-container-main'>
                        <span className='skill-title'>Node Js</span>
                        <div className='skill-bar-per'>
                            <span className='skill-per Node-js'>
                                <span className='skill-tooltip'>65%</span>
                            </span>
                        </div>
                    </div>
                    <div className='skill-container-main'>
                        <span className='skill-title'>Express js</span>
                        <div className='skill-bar-per'>
                            <span className='skill-per Express-js'>
                                <span className='skill-tooltip'>75%</span>
                            </span>
                        </div>
                    </div>
                </div>
               <button className='skill-download'><a  href={require("../images/resume.pdf") } download="resume">Resume</a></button> 
            </div>
        </>
    )
}

export default About