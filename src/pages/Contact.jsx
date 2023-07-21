import React from 'react'
import {MdAddIcCall,MdLocationOn,MdOutgoingMail} from 'react-icons/md'

const Contact = () => {
  return (
    <div className='contact-main'>
<div className="contact-info">
  <h3>CONTACT INFO</h3>
  <p>Welcome to our Website. We are glad to have you around.</p>
<MdAddIcCall/> <span>Phone</span>
<p>056620015</p>
<hr />
<MdOutgoingMail/> <span>Email</span>
<p>butereboys@yahoo.com </p>
<hr />
<MdLocationOn/> <span>Address</span>
<p>P.O Box 15-50101, Butere </p>
  <hr />

</div>
<div className="form-message">
  <h3>SEND A MESSAGE</h3>
  <p>Your email address will not be published. Required fields are marked.</p>

  <form action="" className='message-form'>
    <input type="text" placeholder='name' />
    <input type="text" placeholder='Subject' />
<textarea  placeholder='message' name="" id="" cols="30" rows="10"></textarea>
<button className="btn">Submit</button>
  </form>
</div>
    </div>
  )
}

export default Contact