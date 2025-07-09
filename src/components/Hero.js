const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-cottage-cream via-honey-yellow to-rose-pink min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-sage-green rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-lavender rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-rust-red rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-honey-yellow rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-handwriting font-bold text-warm-brown mb-6">
              Welcome to Pure Pantry
            </h1>
            <p className="text-xl lg:text-2xl font-serif text-gray-700 mb-8 leading-relaxed">
              Handcrafted with love by your Connecticut baker. 
              Fresh-baked breads, sweet treats, and homemade goodies 
              made with traditional recipes and the finest ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-warm-brown text-white px-8 py-4 rounded-lg font-serif text-lg hover:bg-rust-red transition-colors duration-300 shadow-lg">
                Browse Our Products
              </button>
              <button className="border-2 border-warm-brown text-warm-brown px-8 py-4 rounded-lg font-serif text-lg hover:bg-warm-brown hover:text-white transition-colors duration-300">
                View Recipes
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-2">
                  Fresh Daily
                </h3>
                <p className="text-gray-600 font-serif">
                  Made with love and care
                </p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-rose-pink rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <span className="text-white font-handwriting text-sm">🍞</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-lavender rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
              <span className="text-white font-handwriting text-sm">🍪</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-sage-green rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-warm-brown mb-2">Fresh Daily</h3>
            <p className="text-gray-600">Baked fresh every morning with love and care</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-lavender rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-warm-brown mb-2">Made with Love</h3>
            <p className="text-gray-600">Traditional recipes passed down through generations</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-honey-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-warm-brown mb-2">Local Pickup</h3>
            <p className="text-gray-600">Convenient pickup in Connecticut</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 