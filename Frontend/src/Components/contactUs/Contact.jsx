// import  { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import "./constyle.css"
// export const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_bivmhth', 'template_0gwvi5d', form.current, {
//         publicKey: 'CRgW6uocj_KmdlNXB',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form className='contact-form' ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       <label>Email</label>
//       <input type="email" name="from_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
// export default Contact;

import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./constyle.css"
import MyNav from '../Navbar/MyNav';
import Footer from '../footer/Footer';

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bivmhth', 'template_0gwvi5d', form.current, {
        publicKey: 'CRgW6uocj_KmdlNXB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessage("Response sent successfully");
          alert("Response sent successfully");
          form.current.reset(); // Reset the form fields

        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Check your Network Connection / Try again later");

        },
      );
  };

  return (
    <div  className = 'contactpage'>
    <MyNav/>
    <div className='main-div'>
      
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {message && <p>{message}</p>}
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
