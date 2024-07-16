import React, { useState } from 'react';
import axios from 'axios';
import './popup.css';

function ContactForm() {


    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting form data:', formData);
            const response = await axios.post('http://localhost/send_email.php', formData);
            console.log('Response:', response.data);
            alert(response.data);
        } catch (error) {
            console.error('There was an error sending the email!', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="md:p-12 p-5 flex flex-col">
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="border border-gray-400 p-3 my-2" placeholder="Full Name" required></input>
            <input type="tel" name="number" value={formData.number} onChange={handleChange} className="border border-gray-400 p-3 my-2" placeholder="Phone Number" required></input>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-400 p-3 my-2" placeholder="Email" required></input>
            <textarea rows='6' name="message" value={formData.message} onChange={handleChange} className="border border-gray-400 p-3 my-2" placeholder="Message" required></textarea>
            <button type='submit' className="bg-purple-600 text-white p-2 float-left md:w-2/6 my-2 hover-container">SEND<span class="hover-popup">This component is not finished yet.</span></button>
        </form>
    )

}

export default ContactForm;
