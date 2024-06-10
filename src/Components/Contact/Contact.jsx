import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");
//Using web3Forms for send Email
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8bea8e52-3004-4f26-8ba8-18e03d7fe97d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return(
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon} /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, question and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li><img src={mail_icon} />jamescall786@gmail.com</li>
          <li><img src={phone_icon} />+1 123-456-789</li>
          <li><img src={location_icon} />77 Massachusetts Ave, Cambridge<br/>MA 02139, United States</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your phone number' required />
          <label>Write your message here</label>
          <textarea rows='6' placeholder='Enter your message' name='message' required></textarea>
          <button type='submit' className='btn btn-dark'>Send<img src={white_arrow} /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}
export default Contact