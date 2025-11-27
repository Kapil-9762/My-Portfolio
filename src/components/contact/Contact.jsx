import React from 'react'
import './Contact.css';
import msg from '../../assets/msg-icon.png'
import mail_icon from '../../assets/phone-icon.png'
import ph_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'
import toast from 'react-hot-toast';
const Contact = () => {
  const [result, setResult] = React.useState("");
  const contact_apiKey = import.meta.env.VITE_CONTACT_APIKEY;
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", contact_apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("form submitted successfully.")
      event.target.reset();
    } else {
      toast.error(error.message);
    }
    setResult("");
  };
  return (
    <div className='container contact'>
      <div className="contact-col">
        <h3>Send a Message <img src={msg} alt="" /></h3>
        <p>Feel free to reach out for projects, collaborations, or any questions. I’d love to connect with you.</p>
        <ul>
          <li><img src={mail_icon} alt="" />kapilchandra9648@gmail.com</li>        
          <li><img src={ph_icon} alt="" />+919648631601</li>        
          <li><img src={loc_icon} alt="" />Uttar Pradesh, Gonda 271603 <br/>India</li>        
        </ul>
      </div>
      
      <div className="contact-col">
          <form onSubmit={onSubmit} autoComplete="off">  
          <fieldset>
            <legend className='form-legend'>Your name</legend>
            <input type="text" name="name" id="name" placeholder='Enter your name' required/>
          </fieldset>
          <fieldset>
            <legend className='form-legend'>Phone number</legend>
             <input type="tel" pattern='[0-9]{10}' maxLength="10" name="phone" placeholder='Enter your phone number' id='phone' required/>
          </fieldset>
          <fieldset>
            <legend className='form-legend'>Your message</legend>
             <textarea name="message" minLength="10" id="message" rows='4' placeholder='Enter your message...' required></textarea>
          </fieldset>
            <button type="submit" className='btn'>Submit now</button>
          </form>
          <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
