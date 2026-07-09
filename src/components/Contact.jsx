import { useState } from "react";
import emailjs from "@emailjs/browser";
import '../styles/contact.css'; // Make sure to create this file

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    // State for the custom notification toast
    const [notification, setNotification] = useState({ show: false, type: "", text: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Helper to show the custom toast notification
    const showToast = (type, text) => {
        setNotification({ show: true, type, text });
        // Auto-hide after 3 seconds
        setTimeout(() => {
            setNotification({ show: false, type: "", text: "" });
        }, 3000);
    };

    function handleSubmit(e) {
        e.preventDefault();
        
        // Basic validation
        if (!name || !email || !message) {
            showToast("error", "Please fill in all fields.");
            return;
        }

        setIsSubmitting(true);

        emailjs.send(
            "service_lhkoz6j",
            "template_9wfr23s",
            {
                from_name: name,
                from_email: email,
                message: message
            },
            "LTGBExxloHcgf2SXr"
        )
        .then(() => {
            showToast("success", "Message sent successfully!");
            // Clear form
            setName("");
            setEmail("");
            setMessage("");
        })
        .catch((error) => {
            console.log(error);
            showToast("error", "Failed to send message. Please try again.");
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    }

    return (
        <section className="contact-section">
            
            {/* Custom Pop-up Notification */}
            <div className={`toast-notification ${notification.show ? 'show' : ''} ${notification.type}`}>
                {notification.type === 'success' ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                )}
                <span>{notification.text}</span>
            </div>

            <div className="contact-container">
                
                {/* LEFT COLUMN: Contact Info */}
                <div className="contact-info-column">
                    <h2 className="section-title">Let's Connect</h2>
                    <p className="section-subtitle">
                        I am actively seeking software engineering roles starting in 2026. Let's build something great together.
                    </p>

                    <div className="contact-cards">
                        <div className="contact-card">
                            <div className="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className="card-details">
                                <h4>Email</h4>
                                <a href="mailto:your-email@gmail.com">peling70@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </div>
                            <div className="card-details">
                                <h4>GitHub</h4>
                                <a href="https://github.com/Peiling0509" target="_blank" rel="noreferrer">github.com/Peiling0509</a>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </div>
                            <div className="card-details">
                                <h4>LinkedIn</h4>
                                <a href="https://linkedin.com/in/chai-pei-ling-1a8b35261" target="_blank" rel="noreferrer">linkedin.com/in/chai-pei-ling-1a8b35261</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Contact Form */}
                <div className="contact-form-column">
                    <form className="modern-form" onSubmit={handleSubmit}>
                        
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="How can I help you?"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                disabled={isSubmitting}
                            />
                        </div>

                        <button 
                            type="submit" 
                            className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contact;