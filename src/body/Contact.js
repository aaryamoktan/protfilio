import React from 'react'

const Contact = () => {
  return (
    <><div className='contact-container'>
    <div className='contact-form'>
      <form>
        <div className='contact-input'>
          <lable>Name:</lable>
          <input type="text"/>
          <lable>Email:</lable>
          <input type="email"/>
          <lable>Number:</lable>
          <input type="number"/>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
        
    </div></>
  )
}

export default Contact