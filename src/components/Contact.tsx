import React from 'react'
import "@/style/Contact.css"
import { FcContacts } from "react-icons/fc";

const Contact = () => {
  return (
    <div className='contact-parent'>
        <main className='contact-main'>
            <form className='contact-form'>
                <div><FcContacts className='contact-icon'/></div>
                <h1 className='contact-h1'>Get In Touch</h1>
                <input className='contact-input' type="text" placeholder='Name' required/><br />
                <input className='contact-input' type="text" placeholder='Email' required /><br />
                <input className='contact-input' type="text" placeholder='Message' /><br />

                <button className='contact-btn'>Send</button>




            </form>
        </main>
    </div>
  )
}

export default Contact