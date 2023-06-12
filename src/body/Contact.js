import React from 'react'
import { useFormik } from "formik"
import { Signup } from './Schema'

const Contact = () => {
 const {values,errors,handleBlur,handleChange,handleSubmit,touched}= useFormik({
    initialValues:{
      name:"",
      email:"",
      number:"",
      conform_number:""
    },
    validationSchema:Signup,
    onSubmit:(values)=>
    {
      console.log(values)
    }
  })
 console.log(errors)

  return (

    <>
      <div className='contact-container'>
        <h3>Contact</h3>
        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
            <div className='contact-input'>
              <label>Name:</label><br />
              <input type="text" name="name"  id="name" value={values.name} onChange={handleChange} onBlur={handleBlur}   /><br />
           
              <label>Email:</label><br />
              <input type="text" name="email"  id="email"  value={values.email} onChange={handleChange} onBlur={handleBlur}  /><br />
             
              <label>Number:</label><br />
              <input type="number" name="number" id="number"  value={values.number} onChange={handleChange} onBlur={handleBlur}   /><br />
              
              <label>Conform_Number:</label><br />
              <input type="text" name="conform_number"  id="conform_number" value={values.conform_number} onChange={handleChange} onBlur={handleBlur} /><br />
             
              <button className='form-submit' type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact