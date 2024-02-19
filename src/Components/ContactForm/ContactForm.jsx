import './ContactForm.scss'
import React from 'react'

function ContactForm () {
    const handleSubmit = () => {

    }

    const handleInputChange = () => {
        
    }
  return (
    <section className="contact-section">
        <div className="container">
            <div className="col-md-10">
                <div className="wrapper">
                    <div className='row no gutters'>
                    <div className="col-md-6-flex align-items-stretch">
                            <div className="info-wrap w-100 p-lg-5 p-4 img">
                                <h3>LETS GET IN TOUCH</h3>
                                <p className='mb-4'>I am open to any  suggestions or  chat about interesting projects that we can work on.</p>
                                <div className="dbox w-100 d-flex align-items-start">
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
                                                className="form-control" 
                                                placeholder='Enter your name' 
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input 
                                                type="email" 
                                                name='email' 
                                                className="form-control" 
                                                placeholder='Email' 
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input 
                                                type="text" 
                                                name='subject' 
                                                className="form-control" 
                                                placeholder='Subject' 
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea 
                                                type="text" 
                                                name='message' 
                                                className="form-control" 
                                                placeholder='Message' 
                                                onChange={handleInputChange}
                                                ></textarea>
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


