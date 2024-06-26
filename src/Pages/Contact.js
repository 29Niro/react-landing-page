import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  console.log(serviceId, templateId, publicKey);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          alert('Form submitted successfully');
        },
        (error) => {
          // console.log('FAILED...', error.text);
          alert('Form submission failed');
        }
      );
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }
    if (
      !formData.phone.trim() ||
      formData.phone.length < 10 ||
      formData.phone.length > 10 ||
      isNaN(formData.phone)
    ) {
      errors.phone = 'Phone is required';
    }
    if (!formData.subject) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      sendEmail(event);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto md:px-44 px-4 py-8">
        <h1 className="text-3xl font-bold text-start mb-8">Contact Us</h1>
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="firstName" className="text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                required
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">{errors.firstName}</span>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="lastName" className="text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                required
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="phone" className="text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="subject" className="text-gray-700 block mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <option value="">Select a Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Feedback">Feedback</option>
            </select>
            {errors.subject && (
              <span className="text-red-500 text-sm">{errors.subject}</span>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="text-gray-700 block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full h-32"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>
          <button
            type="submit"
            value="Send"
            className="bg-blue-800 w-full text-white px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
