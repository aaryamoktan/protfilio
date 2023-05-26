import React, { useState } from 'react'
import Api from '../Api/ProjectApi'

const Project = () => {
    return (
        <><div className='project-main'>
        <h3>Projects</h3>
            <div className='Project-list'>

                {
                    Api.map((ele) => {
                        const { title, githublink, desc } = ele

                        return <div className="card" >

                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{desc}</p>
                                <a href={githublink} target="blank" className="btn btn-primary">Click-Here</a>
                            </div>
                        </div>


                    })
                }
            </div></div></>
    )
}

export default Project