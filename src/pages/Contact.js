import React from 'react'
import '../styles/Contact.css'
import {GrMail} from 'react-icons/gr'
import {RiMessengerFill} from 'react-icons/ri'
import {RiWhatsappFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h3>Get in Touch</h3>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

           <article className="contact__option">
            <GrMail />
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <a href="mailto:dummy@gmail.com" className='btn'>Send a message</a>
           </article>
           <article className="contact__option">
            <RiMessengerFill />
            <h4>Messenger</h4>
            <h5>www.facebook.com</h5>
            <a href="mailto:dummy@gmail.com" className='btn'>Send a message</a>
           </article>
           <article className="contact__option">
            <RiWhatsappFill />
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="mailto:dummy@gmail.com" className='btn'>Send a message</a>
           </article>

        </div>
        <form action=''>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your email address" required />
          <textarea name="message" placeholder='Your message here' rows="7" required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact