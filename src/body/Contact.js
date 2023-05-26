import React from 'react'

const Contact = () => {
  return (
    <><div className='contact-container'>
    <h3>Contact</h3>
    <div className='contact-form'>
      <form>
        <div className='contact-input'>
          <label>Name:</label><br/>
          <input type="text"/><br/>
          <label>Email:</label><br/>
          <input type="email"/><br/>
          <label>Number:</label><br/>
          <input type="number"/><br/>
          <button className='form-submit' type="submit">Submit</button>
          
        </div>
      </form>
    </div>
        
    </div></>
  )
}

export default Contact