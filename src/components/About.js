import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-cottage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-handwriting font-bold text-warm-brown mb-4">
            About Pure Pantry
          </h2>
          <p className="text-xl font-serif text-gray-600 max-w-3xl mx-auto">
            A labor of love from your neighbors nearby
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div>
            <h3 className="text-3xl font-handwriting font-bold text-warm-brown mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-lg font-serif text-gray-700 leading-relaxed">
              <p>
                Welcome to Pure Pantry! What started as a way to feed my family has 
                grown into a passion for creating delicious, wholesome baked goods for my 
                community.
              </p>
              <p>
                Every morning, I wake up before the sun to start baking fresh breads, 
                sweet treats, and homemade goodies. 
                I create each item with the same care and attention I would give to my own family.
              </p>
              <p>
                My kitchen is filled with the warm aromas of cinnamon, vanilla, and fresh-baked 
                bread. There's nothing quite like the smell of bread baking in the oven or 
                the joy of sharing homemade treats with friends and neighbors.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-6">
              Our Values
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sage-green rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-warm-brown mb-2">Made with Love</h4>
                  <p className="text-gray-600">Every item is crafted with the same care and attention I give to my own family.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-warm-brown mb-2">Quality Ingredients</h4>
                  <p className="text-gray-600">Only the finest, ingredients make it into our recipes.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-honey-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-warm-brown mb-2">Fresh Daily</h4>
                  <p className="text-gray-600">Everything is baked fresh the morning of pickup for maximum freshness.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-rose-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-warm-brown mb-2">Local Community</h4>
                  <p className="text-gray-600">Supporting our Connecticut community with homemade goodness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cottage Food Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-6 text-center">
            Cottage Food Business
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-serif font-bold text-warm-brown mb-4">What is Cottage Food?</h4>
              <p className="text-gray-600 font-serif leading-relaxed">
                Cottage food laws allow home bakers to sell their homemade goods directly to consumers. 
                This means you get truly homemade treats made in a real kitchen, not a commercial facility. 
                Each item is made with love and care, just like grandma used to make.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold text-warm-brown mb-4">Why Choose Cottage Food?</h4>
              <ul className="text-gray-600 font-serif space-y-2">
                <li>• Truly homemade with personal care</li>
                <li>• Fresh ingredients and traditional recipes</li>
                <li>• Support local small businesses</li>
                <li>• Unique, handcrafted items</li>
                <li>• Made in small batches for quality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 