import './ContactForm.scss'
import React from 'react'
import { useState } from 'react';

function ContactForm () {
  
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      
        const [errors, setErrors] = useState({});
      
        const handleInputChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };
      
        const validateForm = () => {
          const newErrors = {};
      
          // Check if name is empty
          if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
          }
      
          // Check if email is empty and is a valid email address
          if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
          }
      
          // Check if subject is empty
          if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
          }
      
          // Check if message is empty
          if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
          }
      
          setErrors(newErrors);
      
          // Return true if there are no errors
          return Object.keys(newErrors).length === 0;
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          // Validate the form
          if (validateForm()) {
            // Form is valid, you can proceed with your submit logic
            console.log('Form submitted:', formData);
          } else {
            // Form is not valid, do something (e.g., show error messages)
            console.log('Form validation failed');
          }
        };
      
    
  return (
    <section id='Contact' className="contact-section">
        <div className="container1">
            
            <div className="col-md-10">
                <div className="wrapper">
                    <div className='row no gutters'>
                    
                            <div className="info-wrap w-100 p-lg-5 p-4 img">
                                <h3>LETS GET IN TOUCH</h3>
                                <p className='mb-4'>I am open to any  suggestions or  chat about interesting projects that we can work on.</p>
                                <div className="dbox w-100 d-flex align-items-start ">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className='fa fa-map-marker'></span>
                                    </div>
                                    <div className="text pl-3">
                                        <p>
                                            <span>Address:</span>A 31 Lower Long St, Foreshore, Cape Town, 8000
                                        </p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex align-items-start">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className='fa fa-paper-plane'></span>
                                    </div>
                                    <div className="text pl-3">
                                        <p>
                                            <span>Email:</span> 
                                            <a href="sibongile.gumbi@younglings.africa">sibongile.gumbi@younglings.africa</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex align-items-start">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className='fa fa-phone'></span>
                                    </div>
                                    <div className="text pl-3">
                                        <p>
                                            <span>Phone:</span>+27 73 284 4228
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
      <div className='contact-wrap w-100 p-lg-5 p-4'>
        <h3 className='mb-4'>CONTACT US</h3>
        <form id='contactForm' className='contactForm' onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name='name'
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder='Enter your name'
                  onChange={handleInputChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="email"
                  name='email'
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder='Email'
                  onChange={handleInputChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name='subject'
                  className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                  placeholder='Subject'
                  onChange={handleInputChange}
                />
                {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  type="text"
                  name='message'
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  placeholder='Message'
                  onChange={handleInputChange}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
            </div>
            <div className="col-mid-12">
              <div className="form-group">
                <input type="submit" value='Send Message' className='btn btn-primary' />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default ContactForm


