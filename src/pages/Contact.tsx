import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../components/Map";

import React, { useState } from "react";

const AboutUs: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<
    "email" | "location" | "phone"
  >("email"); //email is the initial state
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSectionClick = (section: "email" | "location" | "phone") => {
    setSelectedSection(section);
  };

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    //  v resets form fields to emty after submission v
    setFormFields({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    alert(
      "Thanks for your message! We will do everything to contact you as fast as possible!"
    );
  };

  return (
    <div className="contact-container">
      <Navbar />
      <div className="about-us-container">
        <h1>Get in touch!</h1>
        <p>Contact us for a quote, help, or to join the team.</p>
        <div className="contact-options">
          <div
            className={`contact-option ${
              selectedSection === "email" ? "selected" : ""
            }`}
            onClick={() => handleSectionClick("email")}
          >
            <img src="https://i.imgur.com/OxcrI9M.png" alt="Mail" />
            <p>carshop@gmail.com</p>
          </div>
          <div
            className={`contact-option ${
              selectedSection === "location" ? "selected" : ""
            }`}
            onClick={() => handleSectionClick("location")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
              alt="Location"
            />
            <p>Las Vegas</p>
          </div>
          <div
            className={`contact-option ${
              selectedSection === "phone" ? "selected" : ""
            }`}
            onClick={() => handleSectionClick("phone")}
          >
            <img
              src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-phone-icon-in-circle-black-png-image_5994540.png"
              alt="Phone"
            />
            <p>+02 123 456 789</p>
          </div>
        </div>
        {selectedSection === "email" && (
          <div className="contact-section-email">
            <div className="brochure">
              <h2>Contact Form</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="name-fields">
                  <div>
                    <label htmlFor="firstName">Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formFields.firstName}
                      onChange={handleFormChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formFields.lastName}
                      onChange={handleFormChange}
                      placeholder="Your Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="name-fields-single">
                  <div>
                    <label htmlFor="email">Mail:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formFields.email}
                      onChange={handleFormChange}
                      placeholder="Your Email Adress"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formFields.phone}
                      onChange={handleFormChange}
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                      placeholder="123-456-789"
                      required
                    />
                  </div>
                  <div className="message">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formFields.message}
                      onChange={handleFormChange}
                      placeholder="Message"
                      required
                    />
                  </div>
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        )}
        {selectedSection === "phone" && (
          <div className="contact-section">
            <img src="https://cdn-icons-png.flaticon.com/512/4298/4298326.png" />
            <p>[Monday to Friday, 9am to 4pm PST] </p>
            <h2> North America Toll-Free:</h2>
            <h2>1-123-456-7890</h2>
            <div>
              <h2>International:</h2>
              <h2>0-987-654-321</h2>
            </div>
          </div>
        )}
        {selectedSection === "location" && (
          <div className="contact-row">
            <div className="brochure-location">
              <h1>CarShop</h1>
              <p>1700 Goldhill Ave</p>
              <p>Las Vegas</p>
              <p>NV 89106, USA</p>
              <h5>Hours:</h5>
              <div className="contact-hours">
                <p>Sun: 12:00 PM - 9:00 PM</p>
                <p>Mon: Closed</p>
                <p>Tue: 12:00 PM - 9:00 PM</p>
                <p>Wed: 12:00 PM - 9:00 PM</p>
                <p>Thu: 12:00 PM - 9:00 PM</p>
                <p>Fri: 12:00 PM - 5:00 PM</p>
                <p>Sat: Closed</p>
              </div>
            </div>
            <div className="google-maps">
              <Map />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
