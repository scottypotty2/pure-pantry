import { useState } from 'react';

const Subscriptions = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const subscriptionPlans = [
    {
      id: 1,
      name: 'Weekly Bread Box',
      emoji: '🍞',
      price: 25,
      frequency: 'Weekly',
      description: 'Perfect for families who love fresh bread',
      items: [
        '1 Original Loaf (half)',
        '1 Cinnamon Raisin Loaf',
        '1 pack of Dinner Rolls',
        '1 Seasonal Jam (rotating)'
      ],
      savings: 'Save $8/week',
      popular: false
    },
    {
      id: 2,
      name: 'Sweet Treats Subscription',
      emoji: '🍪',
      price: 35,
      frequency: 'Weekly',
      description: 'For those with a sweet tooth',
      items: [
        '1 Chocolate Loaf',
        '1 pack of Cinnamon Rolls',
        '1 pack of Chocolate Chip Cookies',
        '1 Whipped Honey'
      ],
      savings: 'Save $12/week',
      popular: true
    },
    {
      id: 3,
      name: 'Everything Bagel Box',
      emoji: '🥯',
      price: 30,
      frequency: 'Weekly',
      description: 'Everything you need for the perfect breakfast',
      items: [
        '1 Everything Loaf',
        '1 pack of English Muffins',
        '1 Everything Bagel Spice',
        '1 pack of Garlic & Herb Crackers'
      ],
      savings: 'Save $10/week',
      popular: false
    },
    {
      id: 4,
      name: 'Grandma\'s Pantry',
      emoji: '🏠',
      price: 50,
      frequency: 'Weekly',
      description: 'Our most comprehensive subscription',
      items: [
        '1 Original Loaf (half)',
        '1 Cinnamon Raisin Loaf',
        '1 pack of Cinnamon Rolls',
        '1 pack of Chocolate Chip Cookies',
        '1 Seasonal Jam',
        '1 Everything Bagel Spice'
      ],
      savings: 'Save $18/week',
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-cottage-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-handwriting font-bold text-warm-brown mb-4">
            Subscription Plans
          </h2>
          <p className="text-xl font-serif text-gray-600 max-w-3xl mx-auto">
            Never run out of fresh baked goods! Choose a subscription plan and 
            enjoy regular deliveries of your favorite items.
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative ${
                plan.popular ? 'ring-2 ring-warm-brown' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-warm-brown text-white text-center py-2 font-serif text-sm">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <div className="text-4xl mb-4">{plan.emoji}</div>
                <h3 className="text-xl font-serif font-bold text-warm-brown mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 font-serif mb-4">
                  {plan.description}
                </p>
                <div className="text-3xl font-handwriting font-bold text-warm-brown mb-2">
                  ${plan.price}
                </div>
                <div className="text-sm text-gray-500 mb-4">{plan.frequency}</div>
                <div className="text-sm text-sage-green font-bold mb-4">
                  {plan.savings}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-sage-green mt-1">✓</span>
                      <span className="text-gray-700 font-serif text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className="w-full bg-sage-green text-white py-3 px-6 rounded-lg font-serif text-lg hover:bg-warm-brown transition-colors duration-300"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Modal */}
        {selectedPlan && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" onClick={() => setSelectedPlan(null)}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-6 py-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{selectedPlan.emoji}</span>
                      <div>
                        <h3 className="text-2xl font-handwriting font-bold text-warm-brown">
                          {selectedPlan.name}
                        </h3>
                        <p className="text-gray-600 font-serif">{selectedPlan.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPlan(null)}
                      className="text-gray-400 hover:text-warm-brown transition-colors duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-handwriting font-bold text-warm-brown mb-2">
                      ${selectedPlan.price}/{selectedPlan.frequency.toLowerCase()}
                    </div>
                    <div className="text-sm text-sage-green font-bold mb-4">
                      {selectedPlan.savings}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {selectedPlan.items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-sage-green mt-1">✓</span>
                          <span className="text-gray-700 font-serif">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-cottage-cream rounded-lg p-4 mb-6">
                    <h4 className="font-serif font-bold text-warm-brown mb-2">Subscription Details</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Weekly deliveries on your chosen day</li>
                      <li>• 24 hour notice for any changes</li>
                      <li>• Cancel or pause anytime</li>
                      <li>• Fresh baked the morning of delivery</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      alert('Thank you for subscribing! We will contact you to arrange your first delivery.');
                      setSelectedPlan(null);
                    }}
                    className="w-full bg-warm-brown text-white py-4 px-6 rounded-lg font-serif text-lg hover:bg-rust-red transition-colors duration-300"
                  >
                    Start Subscription
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Benefits */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-6 text-center">
            Why Subscribe?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-lg font-serif font-bold text-warm-brown mb-2">Save Money</h4>
              <p className="text-gray-600">Subscriptions offer significant savings compared to individual purchases</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-lavender rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-serif font-bold text-warm-brown mb-2">Never Run Out</h4>
              <p className="text-gray-600">Regular deliveries ensure you always have fresh baked goods</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-honey-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-serif font-bold text-warm-brown mb-2">Made with Love</h4>
              <p className="text-gray-600">Each item is crafted with the same care as if it were for family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions; 