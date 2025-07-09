import React, { useState } from 'react';

const Products = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('breads');

  const products = {
    breads: [
      { id: 1, name: 'Original Loaf (half)', price: 4.50, description: 'Classic sourdough bread, perfect for sandwiches and toast', emoji: '🍞' },
      { id: 2, name: 'Cinnamon Raisin Loaf', price: 5.50, description: 'Sweet and aromatic with plump raisins', emoji: '🍞' },
      { id: 3, name: 'Chocolate Loaf', price: 6.00, description: 'Rich chocolate bread perfect for dessert', emoji: '🍫' },
      { id: 4, name: 'Double Chocolate Loaf', price: 6.50, description: 'Extra chocolatey for the ultimate treat', emoji: '🍫' },
      { id: 5, name: 'Chocolate Chip', price: 5.75, description: 'Classic chocolate chip bread', emoji: '🍪' },
      { id: 6, name: 'Everything Loaf', price: 5.25, description: 'Loaded with everything bagel seasoning', emoji: '🧂' },
      { id: 7, name: 'Blueberry Loaf', price: 5.75, description: 'Bursting with fresh blueberries', emoji: '🫐' },
      { id: 8, name: 'Strawberry Loaf', price: 5.75, description: 'Sweet strawberry bread', emoji: '🍓' },
      { id: 9, name: 'Blueberry Lemon Loaf', price: 6.00, description: 'Tangy lemon with sweet blueberries', emoji: '🍋' },
      { id: 10, name: 'Apple Cinnamon Loaf', price: 5.75, description: 'Warm cinnamon with fresh apples', emoji: '🍎' },
    ],
    rolls: [
      { id: 11, name: 'Cinnamon Rolls', price: 3.50, description: 'Gooey cinnamon rolls with cream cheese frosting', emoji: '🥨' },
      { id: 12, name: 'Hot Dog Buns', price: 3.00, description: 'Perfect for your favorite hot dogs', emoji: '🌭' },
      { id: 13, name: 'Hamburger Rolls', price: 3.00, description: 'Soft and fluffy burger buns', emoji: '🍔' },
      { id: 14, name: 'Dinner Rolls', price: 2.50, description: 'Classic dinner rolls', emoji: '🥖' },
      { id: 15, name: 'English Muffins', price: 3.25, description: 'Traditional English muffins', emoji: '🥯' },
    ],
    cookies: [
      { id: 16, name: 'Browned Sugar Chocolate Chip Cookies', price: 2.50, description: 'Chewy cookies with browned butter', emoji: '🍪' },
    ],
    crackers: [
      { id: 17, name: 'Plain Crackers', price: 3.50, description: 'Simple and delicious plain crackers', emoji: '🥨' },
      { id: 18, name: 'Garlic & Herb Crackers', price: 4.00, description: 'Savory crackers with herbs', emoji: '🧄' },
      { id: 19, name: 'Parmesan Crackers', price: 4.25, description: 'Cheesy parmesan crackers', emoji: '🧀' },
    ],
    nonFood: [
      { id: 20, name: 'Tea Towels', price: 8.00, description: 'Handmade cotton tea towels', emoji: '🧺' },
      { id: 21, name: 'Vanilla Extract', price: 12.00, description: 'Homemade vanilla extract', emoji: '🌿' },
      { id: 22, name: 'Everything Bagel Spice', price: 6.00, description: 'Perfect seasoning blend', emoji: '🧂' },
      { id: 23, name: 'Seasonal Jams', price: 7.50, description: 'Small batch seasonal fruit jams', emoji: '🍯' },
      { id: 24, name: 'Sourdough Starter Kit', price: 15.00, description: 'Complete kit to start your own sourdough', emoji: '🥖' },
      { id: 25, name: 'Dehydrated Sourdough Starter', price: 8.00, description: 'Dried sourdough starter for easy storage', emoji: '🌾' },
      { id: 26, name: 'Whipped Honey', price: 9.00, description: 'Light and fluffy whipped honey', emoji: '🍯' },
    ]
  };

  const categories = [
    { id: 'breads', name: 'Breads & Loaves', emoji: '🍞' },
    { id: 'rolls', name: 'Rolls & Buns', emoji: '🥨' },
    { id: 'cookies', name: 'Cookies', emoji: '🍪' },
    { id: 'crackers', name: 'Crackers', emoji: '🥨' },
    { id: 'nonFood', name: 'Non-Food Items', emoji: '🧺' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-cottage-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-handwriting font-bold text-warm-brown mb-4">
            Our Products
          </h2>
          <p className="text-xl font-serif text-gray-600 max-w-3xl mx-auto">
            Handcrafted with love using traditional recipes and the finest ingredients. 
            Each item is made fresh daily in our Connecticut kitchen.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-serif text-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-warm-brown text-white shadow-lg'
                  : 'bg-white text-warm-brown border-2 border-warm-brown hover:bg-warm-brown hover:text-white'
              }`}
            >
              <span>{category.emoji}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products[activeCategory].map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{product.emoji}</div>
                  <div className="text-right">
                    <div className="text-2xl font-handwriting font-bold text-warm-brown">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-warm-brown mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 font-serif mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-sage-green text-white py-3 px-6 rounded-lg font-serif text-lg hover:bg-warm-brown transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Information */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-4">
              Order Information
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-serif font-bold text-warm-brown mb-2">Pickup Only</h4>
                <p className="text-gray-600">Local pickup in Connecticut</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-lavender rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-serif font-bold text-warm-brown mb-2">24 Hour Notice</h4>
                <p className="text-gray-600">Orders require 24 hour advance notice</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-honey-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-serif font-bold text-warm-brown mb-2">Made Fresh</h4>
                <p className="text-gray-600">Baked fresh the morning of pickup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products; 