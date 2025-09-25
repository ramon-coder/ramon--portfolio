/*import React, { Component } from 'react'*/
/*import React, { Component } from 'react';*/
/*import emailjs, { init } from "@emailjs/browser";*/
import React, { useRef } from 'react';
import "../../contact.css"
import emailjs from '@emailjs/browser';


function App() {
  const form = useRef();

  // const success = <p>thank you for sending us a message</p>;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_quif1bw", 
        "React_Contact_Form", 
        form.current, 
        "9ixhZK6xDjvFJ2RP8"
      )
      .then(
        (result) => {
          alert(`message sent... ${result.text}`);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form className='cf' ref={form} onSubmit={sendEmail}>
        <div className='half left cf'>
          <input type='text' placeholder='Name' name='user_name' />
          <input type='email' placeholder='Email address' name='user_email' />
        </div>
        <div className='half right cf'>
          <textarea name='message' type='text' placeholder='Message'></textarea>
        </div>
        <input type='submit' value='Send' id='input-submit' />
      </form>
    </div>
  );
}

export default App;