import React, { useState } from 'react';

const CustomOrders = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: '',
    description: '',
    quantity: '',
    pickupDate: '',
    specialRequests: ''
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
    console.log('Custom order submitted:', formData);
  };

  const orderTypes = [
    'Wedding Cake',
    'Birthday Cake',
    'Specialty Bread',
    'Cookie Assortment',
    'Gift Basket',
    'Corporate Event',
    'Holiday Special',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-b from-cottage-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-handwriting font-bold text-warm-brown mb-4">
              Thank You!
            </h2>
            <p className="text-xl font-serif text-gray-600 mb-8">
              Your custom order request has been received. I'll review your request 
              and contact you within 24 hours to discuss the details and pricing.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  orderType: '',
                  description: '',
                  quantity: '',
                  pickupDate: '',
                  specialRequests: ''
                });
              }}
              className="bg-sage-green text-white px-8 py-4 rounded-lg font-serif text-lg hover:bg-warm-brown transition-colors duration-300"
            >
              Submit Another Order
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
            Custom Orders
          </h2>
          <p className="text-xl font-serif text-gray-600 max-w-3xl mx-auto">
            Have a special request? I love creating custom baked goods for special occasions, 
            events, and unique dietary needs. Let's work together to make your vision come to life!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-6">
              Request Your Custom Order
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
                    placeholder="Your full name"
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
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent font-serif"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block font-serif font-bold text-warm-brown mb-2">
                  Order Type *
                </label>
                <select
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent font-serif"
                >
                  <option value="">Select an order type</option>
                  {orderTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-serif font-bold text-warm-brown mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent font-serif"
                  placeholder="Please describe what you'd like me to create..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-serif font-bold text-warm-brown mb-2">
                    Quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent font-serif"
                    placeholder="e.g., 2 dozen, 1 cake"
                  />
                </div>
                <div>
                  <label className="block font-serif font-bold text-warm-brown mb-2">
                    Preferred Pickup Date *
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent font-serif"
                  />
                </div>
              </div>

              <div>
                <label className="block font-serif font-bold text-warm-brown mb-2">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent font-serif"
                  placeholder="Dietary restrictions, allergies, specific flavors, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-warm-brown text-white py-4 px-6 rounded-lg font-serif text-lg hover:bg-rust-red transition-colors duration-300"
              >
                Submit Custom Order Request
              </button>
            </form>
          </div>

          {/* Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-6">
                What I Can Create
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎂</span>
                  <div>
                    <h4 className="font-serif font-bold text-warm-brown">Wedding & Birthday Cakes</h4>
                    <p className="text-gray-600 text-sm">Beautiful, delicious cakes for your special day</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🍞</span>
                  <div>
                    <h4 className="font-serif font-bold text-warm-brown">Specialty Breads</h4>
                    <p className="text-gray-600 text-sm">Custom flavors and shapes for any occasion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🍪</span>
                  <div>
                    <h4 className="font-serif font-bold text-warm-brown">Cookie Assortments</h4>
                    <p className="text-gray-600 text-sm">Perfect for gifts, parties, and corporate events</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <h4 className="font-serif font-bold text-warm-brown">Gift Baskets</h4>
                    <p className="text-gray-600 text-sm">Curated selections of my best items</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-6">
                Important Information
              </h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <span className="text-sage-green mt-1">•</span>
                  <span>Custom orders require at least 1 week notice</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-sage-green mt-1">•</span>
                  <span>Pricing will be provided after reviewing your request</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-sage-green mt-1">•</span>
                  <span>I can accommodate most dietary restrictions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-sage-green mt-1">•</span>
                  <span>All items are made fresh the day of pickup</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-sage-green mt-1">•</span>
                  <span>Payment is due at pickup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrders; 