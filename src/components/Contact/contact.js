import React, { useRef }  from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';





const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_279os3j', 'template_zkrofh2', form.current, {
            publicKey: 'adpJkleiPdcYRZRIoj1UG',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id='contactPage'>
     <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'>
            I have had the opportunity to work with a diverse group of companies.
            Some of the notable companies I have worked with inclides
        </p>
        <div className='clientImgs'>
            <img src={Walmart} alt='Client' className='clientImg'/>
            <img src={Adobe} alt='Client' className='clientImg'/>
            <img src={Microsoft} alt='Client' className='clientImg'/>
            <img src={Facebook} alt='Client' className='clientImg'/>

        </div>

     </div>
     <div className='contact'>
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
     <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name'placeholder='Your Name' name='your name'/>
        <input type='email' className='email'placeholder='Your Email'name='your mail'/>
        <textarea className='msg'name='message'rows='5'placeholder='Your Message'></textarea>
        <div><button type='submit'value='send' className='submitBtn'>Submit</button> </div>
        
         <div className='links'>
            <img src={FacebookIcon} alt='FacebookIcon' className='link'/>
            <img src={TwitterIcon} alt='TwitterIcon' className='link'/>
            <img src={YouTubeIcon} alt='YouTubeIcon' className='link'/>
            <img src={InstagramIcon} alt='InstagramIcon' className='link'/>
         </div>

     </form>
     </div>
    </section>
    
  )
}

export default Contact