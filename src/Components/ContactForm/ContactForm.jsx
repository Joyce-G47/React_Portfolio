import "./ContactForm.scss";
import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation logic for the form
    if (!formData.name || !nameRegex.test(formData.name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Please enter a valid name.",
      }));
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    }

    if (!formData.subject) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        subject: "Please enter a subject.",
      }));
    }

    if (!formData.message) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Please enter a message.",
      }));
    }

   
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      
      send("service_jqi6jiq", "template_h60a5qs", toSend, "3oqffSUnMVmhrjmZD")
        .then((response) => {
         
          toast.success("Message sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          
          setToSend({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setErrors({});
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    }
  };

  const handleInputChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });

    
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: undefined }));
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="container1">
        <div className="col-md-10">
          <div className="wrapper">
            <div className="row no gutters">
              <div className="info-wrap w-100 p-lg-5 p-4 img">
                <h3>LETS GET IN TOUCH</h3>
                <p className="mb-4">
                  I am open to any suggestions or chat about interesting
                  projects that we can work on.
                </p>
                <div className="dbox w-100 d-flex align-items-start ">
                  <div className="icon d-flex align-items-center justify-content-center ">
                    <span className="fa fa-map-marker"></span>
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Address:</span>A 31 Lower Long St, Foreshore, Cape
                      Town, 8000
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane"></span>
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Email:</span>
                      <a href="mailto:sibongile.gumbi@younglings.africa">
                        sibongile.gumbi@younglings.africa
                      </a>
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Phone:</span>+27 73 284 4228
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-wrap w-100 p-lg-5 p-4">
                  <h3 className="mb-4">CONTACT US</h3>
                  <form
                    id="contactForm"
                    className="contactForm"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            value={toSend.name}
                            className={`form-control ${
                              errors.name ? "is-invalid" : ""
                            }`}
                            placeholder="Enter your name"
                            onChange={handleInputChange}
                          />
                          {errors.name && (
                            <div className="invalid-feedback">
                              {errors.name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value={toSend.email}
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                            placeholder="Email"
                            onChange={handleInputChange}
                          />
                          {errors.email && (
                            <div className="invalid-feedback">
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            value={toSend.subject}
                            className={`form-control ${
                              errors.subject ? "is-invalid" : ""
                            }`}
                            placeholder="Subject"
                            onChange={handleInputChange}
                          />
                          {errors.subject && (
                            <div className="invalid-feedback">
                              {errors.subject}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            type="text"
                            name="message"
                            value={toSend.message}
                            className={`form-control ${
                              errors.message ? "is-invalid" : ""
                            }`}
                            placeholder="Message"
                            cols="30"
                            rows="6"
                            onChange={handleInputChange}
                          ></textarea>
                          {errors.message && (
                            <div className="invalid-feedback">
                              {errors.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-mid-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            className="btn btn-primary"
                          />
                          
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
      <ToastContainer />
    </section>
  );
}

export default ContactForm;
