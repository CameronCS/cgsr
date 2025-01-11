import React, { useState } from 'react';
import './ContactUs.css';
import axios from 'axios';

export default function ContactUs() {
  const [activeForm, setActiveForm] = useState('query');

  // Send Queries Click State
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [qEmail, qSetEmail] = useState('')
  const [query, setQuery] = useState('')

  const setInputErr = (details) => {
    alert(`Please Enter your ${details}`)
  }

  const sendQueryClick = async (e) => {
    e.preventDefault();
  
    // Input validation
    if (name === '') {
      setInputErr('Name');
      return;  
    }
  
    if (surname === '') {
      setInputErr('Surname');
      return;
    }
  
    if (qEmail === '') {
      setInputErr('Email');
      return;
    }
  
    if (query === '') {
      setInputErr('Query');
      return;
    }
  
    try {
      const post_data= {
        'name': name,
        'surname': surname,
        'email': qEmail,
        'query': query
      }
      const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
      // Sending the POST request
      const response = await axios.post('/api/get-mail.php', post_data, {
        headers: headers
      });
  
      if (response.status === 200) {
        // Success message if email is sent successfully
        alert('Message Sent Successfully');
        console.log('Message sent successfully');
      } else {
        // If the response status is not 200
        alert('Error Sending Message! Check your internet connection and try again later');
      }
    } catch (err) {
      // Error handling in case of network/server issues
      console.error(err);
      alert('Error Sending Message! Check your internet connection and try again later');
    }
  };
  
  // Request a Quote State
  const [businessName, setBusinessName] = useState('')
  const [type, setType] = useState('Service Generator')
  const [raqEmail, setRaqEmail] = useState('')
  const [details, setDetails] = useState('')
  const requestQuoteClick = (e) => {
    e.preventDefault()

    if (businessName === '') {
      setInputErr('Business Name')
      return  
    }

    if (raqEmail === '') {
      setInputErr('Email')
      return
    }

    if (details === '') {
      setInputErr('Description')
      return
    }

    const data = {
      'business_name': businessName,
      'type': type,
      'email': raqEmail,
      'details': details
    }
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    axios.post('/api/request-quote.php', data, {
      headers: headers
    })
    .then(onSuccess => {
      console.log(onSuccess.status);
      if (onSuccess.status === 200) {
        alert('Message Sent Sucessfully')
        console.log('Axios a varb');
      } else {
        alert('Error Sending Message! Check your internet connection and try again later')
      }
    })
    .catch(err => {
      console.log(err);
      alert('Error Sending Message! Check your internet connection and try again later')
    })
  }

  return (
    <div className='contact-us-main'>
      <h1>Contact Us</h1>
      <div className='details-and-request'>
        <div className='left-hand-side'>
          <h2>How we can come to you</h2>
          <ul className='contact-select-list'>
            <li className={`select-item ${activeForm === 'query' ? 'active' : ''}`} onClick={() => setActiveForm('query')}>
              Ask a Query
            </li>
            <li className={`select-item ${activeForm === 'quote' ? 'active' : ''}`} onClick={() => setActiveForm('quote')}>
              Request a Quote
            </li>
          </ul>
          <div className='form-container'>
            {activeForm === 'query' && (
              <form className='queries-form active'>
                <div className='form-group'>
                  <label className='queries-label' htmlFor='name'>Name</label>
                  <input className='queries-input' name='name' onChange={(e) => {setName(e.target.value)}} />
                </div>
                <div className='form-group'>
                  <label className='queries-label' htmlFor='surname'>Surname</label>
                  <input className='queries-input' name='surname' onChange={(e) => {setSurname(e.target.value)}} />
                </div>
                <div className='form-group'>
                  <label className='queries-label' htmlFor='emailaddr'>Email Address</label>
                  <input className='queries-input' name='emailaddr' onChange={(e) => {qSetEmail(e.target.value)}} />
                </div>
                <div className='form-group'>
                  <label className='queries-label' htmlFor='query'>Query</label>
                  <textarea className='queries-textfield' name='query' onInput={(e) => {setQuery(e.target.value)}}></textarea>
                </div>
                <button className='send-query-button' onClick={sendQueryClick}>Send Query</button>
              </form>
            )}
            {activeForm === 'quote' && (
              <form className='quote-form active'>
                <div className='form-group'>
                  <label className='quote-label' htmlFor='business-name'>Business or Person Name</label>
                  <input className='quote-input' name='business-name' onChange={(e) => {setBusinessName(e.target.value)}} />
                </div>
                <div className='form-group'>
                  <label className='quote-label' htmlFor='service-type'>Service Type</label>
                  <select className='quote-select' onChange={(e) => setType(e.target.value)}>
                    <option value={'Service Generator'}>Service Generator</option>
                    <option value={'Repair Generator'}>Repair Generator</option>
                    <option value={'Service Kits'}>Service Kit</option>
                    <option value={'Buy Generator'}>Buy Generator</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label className='quote-label' htmlFor='emailaddr'>Email Address</label>
                  <input className='quote-input' name='emailaddr' onChange={(e) => {setRaqEmail(e.target.value)}}/>
                </div>
                <div className='form-group'>
                  <label className='quote-label' htmlFor='description'>Description</label>
                  <textarea className='quote-textfield' name='description' onChange={(e) => {setDetails(e.target.value)}}></textarea>
                </div>
                <button className='send-query-button' onClick={requestQuoteClick}>Send Query</button>
              </form>
            )}
          </div>
        </div>

        <div className='right-hand-side'>
          <h2>How you can come to us</h2>
          <div className='address'>
            <h3>Our Address</h3>
            <p>No. 3 Bakersfield Farm</p>
            <p>KargsPost</p>
            <p>Kokstad</p>
            <p>Kwa-Zulu Natal</p>
            <p>4700</p>
          </div>
          <div className='contact-details'>
            <h3>Our Contact Details</h3>
            <p>Wentzel: 076 954 6793</p>
            <p>Mary-Ann: 072 424 0417</p>
            <p>Mail Us At <a className='contact-us-email' href='mailto:classicgeneratorservicesrepair@gmail.com'>classicgeneratorservicesrepair@gmail.com</a></p>
          </div>
          <div>
            <h3>Trading hours</h3>
            <li>Monday: 8:00-17:00</li>
            <li>Tuesday: 8:00-17:00</li>
            <li>Wednesay: 8:00-17:00</li>
            <li>Thursday: 8:00-17:00</li>
            <li>Friday: 8:00-17:00</li>
            <li>Saturday: 8:00-17:00</li>
            <li>Sunday: 8:00-17:00</li>
            <p>Please note we do offer 24/7 support</p>
          </div>
        </div>
      </div>

      <div className='google-map'>
        <h2>Find Us On the Map</h2>
        <iframe title='google-map-api-addr' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2889.0607176890153!2d29.40012080311719!3d-30.558017303277826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDMzJzI4LjQiUyAyOcKwMjQnMTAuNiJF!5e0!3m2!1sen!2sza!4v1736449730358!5m2!1sen!2sza" width="1400" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
