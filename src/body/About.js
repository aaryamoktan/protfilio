import React from 'react'
const About = () => {
  return (
    <> <div className='about-body-container'>
    <div className='about-body-main-container'>
        <div className='about-info'>
            <div className='about-info-part'>
                <h1>
                    Hellow 
                </h1>
                <p>Hi,<br/> My Name Is <h3>Aarya Moktan</h3>
                
                    Iam A <div className='about-ul-part'><ul>
                    <li><span></span></li>
                    
                    
                    
                    </ul></div> </p>
            </div>
        </div>
        <div className='about-img'>
            <div className='about-img-part'>
                <img src={require("../images/my.jpg")} alt="hello" />
            </div>
        </div>
    </div>

</div></>
  )
}

export default About