// src/components/QuoteModal.jsx
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './QuoteModal.css';

const QuoteModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919209615825';
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleWhatsApp = () => {
        const message = encodeURIComponent(
            "Hi EGL Traders,\n\nI'd like to get a quote for your products. Could you please share more details about your offerings?"
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    useEffect(() => {
        if (!isOpen) {
            setSuccess(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }
    }, [isOpen]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // ✅ Make sure phone is passed correctly
            const phoneValue = formData.phone?.trim() || 'Not provided';
            
            const response = await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name?.trim() || 'Anonymous',
                    email: formData.email?.trim() || 'Not provided',
                    phone: phoneValue, // ✅ This now has a default value
                    message: formData.message?.trim() || 'No message provided',
                    time: new Date().toLocaleString()
                },
                publicKey
            );

            if (response.status === 200) {
                setSuccess(true);
                setTimeout(() => {
                    setFormData({ name: '', email: '', phone: '', message: '' });
                    setSuccess(false);
                    onClose();
                }, 3000);
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send. Please try again or WhatsApp us.');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="qmodal-backdrop"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Request a Quote"
        >
            <div
                className="qmodal"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="qmodal-left">
                    <div className="qmodal-left-content">
                        <div className="qmodal-icon-wrapper">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5">
                                <path d="M22 6.5L12 13L2 6.5M22 6.5L12 2L2 6.5M22 6.5V18L12 22.5M2 6.5V18L12 22.5M12 22.5V13" />
                                <path d="M22 6.5L12 13L2 6.5" />
                            </svg>
                        </div>
                        <h2 className="qmodal-left-title">Get a Quote</h2>
                        <p className="qmodal-left-subtitle">
                            Let's start your global sourcing journey
                        </p>
                        <div className="qmodal-left-features">
                            <div className="qmodal-feature-item">
                                <span className="qmodal-feature-icon">✓</span>
                                <span>Competitive Pricing</span>
                            </div>
                            <div className="qmodal-feature-item">
                                <span className="qmodal-feature-icon">✓</span>
                                <span>Quality Assurance</span>
                            </div>
                            <div className="qmodal-feature-item">
                                <span className="qmodal-feature-icon">✓</span>
                                <span>Global Sourcing</span>
                            </div>
                        </div>
                        <div className="qmodal-left-footer">
                            <p>Or reach us directly on</p>
                            <a
                                onClick={handleWhatsApp}
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="qmodal-whatsapp-link"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>

                <div className="qmodal-right">
                    <div className="qmodal-header">
                        <span className="qmodal-eyebrow">Request a Quote</span>
                        <button className="qmodal-close" onClick={onClose} aria-label="Close modal">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {success ? (
                        <div className="qmodal-success">
                            <div className="qmodal-success-icon">✅</div>
                            <h3 className="qmodal-success-title">Thank You!</h3>
                            <p className="qmodal-success-message">
                                We've received your inquiry and will get back to you within 24 hours.
                            </p>
                            <p className="qmodal-success-note">
                                For immediate assistance, reach us on WhatsApp.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="qmodal-form">
                            <div className="qmodal-form-group">
                                <label className="qmodal-form-label">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="qmodal-form-input"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="qmodal-form-group">
                                <label className="qmodal-form-label">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="qmodal-form-input"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="qmodal-form-group">
                                <label className="qmodal-form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                    className="qmodal-form-input"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="qmodal-form-group">
                                <label className="qmodal-form-label">What are you looking for? *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="Tell us about your requirements..."
                                    className="qmodal-form-textarea"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <button
                                type="submit"
                                className="qmodal-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="qmodal-spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                        </svg>
                                        Get a Quote
                                    </>
                                )}
                            </button>

                            <p className="qmodal-form-note">
                                We'll never share your details. You'll receive a response within 24 hours.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;