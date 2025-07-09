import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-b from-cottage-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="text-6xl mb-6">💌</div>
            <h2 className="text-3xl font-handwriting font-bold text-warm-brown mb-4">
              Message Sent!
            </h2>
            <p className="text-xl font-serif text-gray-600 mb-8">
              Thank you for reaching out! I'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  subject: '',
                  message: ''
                });
              }}
              className="bg-sage-green text-white px-8 py-4 rounded-lg font-serif text-lg hover:bg-warm-brown transition-colors duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-cottage-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-handwriting font-bold text-warm-brown mb-4">
            Get in Touch
          </h2>
          <p className="text-xl font-serif text-gray-600 max-w-3xl mx-auto">
            Have questions about my products, want to place a custom order, 
            or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-warm-brown mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Available 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-warm-brown mb-1">Email</h4>
                    <p className="text-gray-600">hello@purepantry.com</p>
                    <p className="text-sm text-gray-500">I'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-honey-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-warm-brown mb-1">Location</h4>
                    <p className="text-gray-600">Connecticut</p>
                    <p className="text-sm text-gray-500">Local pickup only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-6">
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-serif text-gray-700">Monday - Friday</span>
                  <span className="font-serif text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-serif text-gray-700">Saturday</span>
                  <span className="font-serif text-gray-600">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-serif text-gray-700">Sunday</span>
                  <span className="font-serif text-gray-600">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-cottage-cream rounded-lg">
                <p className="text-sm text-gray-600 font-serif">
                  <strong>Note:</strong> Orders require 24 hour advance notice. 
                  All items are baked fresh the morning of pickup.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-serif font-bold text-warm-brown mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent font-serif"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-serif font-bold text-warm-brown mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent font-serif"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-serif font-bold text-warm-brown mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent font-serif"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block font-serif font-bold text-warm-brown mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent font-serif"
                  placeholder="Tell me what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-warm-brown text-white py-4 px-6 rounded-lg font-serif text-lg hover:bg-rust-red transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-serif font-bold text-warm-brown mb-2">How far in advance should I order?</h4>
                <p className="text-gray-600 text-sm">All orders require at least 24 hours notice. For custom orders, please allow 1 week.</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-warm-brown mb-2">Do you deliver?</h4>
                <p className="text-gray-600 text-sm">Currently, I only offer local pickup in Connecticut. This helps keep costs down and ensures freshness.</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-warm-brown mb-2">Can you accommodate dietary restrictions?</h4>
                <p className="text-gray-600 text-sm">Yes! I can work with most dietary restrictions. Please let me know your needs when ordering.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-serif font-bold text-warm-brown mb-2">What payment methods do you accept?</h4>
                <p className="text-gray-600 text-sm">Cash, check, and digital payments are accepted. Payment is due at pickup.</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-warm-brown mb-2">How long do items stay fresh?</h4>
                <p className="text-gray-600 text-sm">Breads stay fresh for 3-5 days when stored properly. Cookies last 1-2 weeks.</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-warm-brown mb-2">Do you offer gift certificates?</h4>
                <p className="text-gray-600 text-sm">Yes! Gift certificates are available and make perfect gifts for food lovers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 