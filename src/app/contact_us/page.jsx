import React from 'react';
import '@/app/contact_us/contacts.css';

const page = () => {
    return (
        <section id="contact-us">
            <h1>Contact Us</h1>
            <p>If you have any questions, feedback, or need assistance, feel free to reach out to us. We are here to help you!</p>

            <div className="contact-info">
                <h2>Our Address</h2>
                <p>TFB Online Banking</p>
                <p>Ragamati Sadar, 4500</p>
                <p>Finance City, FS 56789</p>
                <p>Email: <a href="mailto:support@bankingmanagement.com">jagadishchakma401@gmail.com</a></p>
                <p>Phone: <a href="tel:+1234567890">+8801608355518</a></p>
            </div>

            <form className="contact-form">
                <h2>Send Us a Message</h2>
                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100">Send Message</button>
            </form>
        </section>
    );
};

export default page;