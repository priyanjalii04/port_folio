import React ,{useRef} from 'react'
import './Contact.css'
import instagram from '../../imagesANdAll/instagram.png'
import linkedin from '../../imagesANdAll/linkedIn.png'
import github from '../../imagesANdAll/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

      const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_66665ai', 'template_9rpjnys', form.current, {
        publicKey: '5L1LhnSEZcyqOLYHd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
           e.target.reset();
          alert('Email Sent!');
          console.log('form submitted');
          
         
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
      

      <div id='contact'>
    <h1 className='contactPageTitle'>Contact Me</h1>
    <span className='contactDesc'> Feel free to contact me. i am here to give you the idea of web develper  </span>

    <form className='contactForm' ref={form} onSubmit={sendEmail}>
      <input type='text' className='name' placeholder='your name' name='name' required/>
      <input type='email' className='email' placeholder=' your email' name='email' required/>
     <textarea name='message'  className='msg' rows='5' placeholder='Your massage' required></textarea>
     <button className='submitBtn' type='submit' >Submit</button>
     <div className='links'>

      <img src={instagram} alt='instagram' className='link'/>
      <img src={linkedin} alt='linkedIn' className='link'/>
      <img src={github} alt='github' className='link'/>
    
     </div>

    </form>
      </div>

    </section>
  )
}

export default Contact
