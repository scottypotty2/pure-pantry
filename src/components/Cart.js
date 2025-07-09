import React from 'react';

const Cart = ({ isOpen, setIsOpen, cart, removeFromCart, updateQuantity, getTotalPrice }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-handwriting font-bold text-warm-brown">
              Your Cart
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-warm-brown transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-serif text-gray-600 mb-2">Your cart is empty</h3>
                <p className="text-gray-500">Add some delicious items to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-cottage-cream rounded-lg">
                    <div className="text-2xl">{item.emoji || '🍞'}</div>
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-warm-brown">{item.name}</h3>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-sage-green text-white rounded-full flex items-center justify-center hover:bg-warm-brown transition-colors duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="w-8 text-center font-serif font-bold text-warm-brown">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-sage-green text-white rounded-full flex items-center justify-center hover:bg-warm-brown transition-colors duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-2 text-gray-400 hover:text-rust-red transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-serif font-bold text-warm-brown">Total:</span>
                <span className="text-2xl font-handwriting font-bold text-warm-brown">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
              
              <div className="bg-sage-green bg-opacity-10 rounded-lg p-4 mb-4">
                <h4 className="font-serif font-bold text-warm-brown mb-2">Pickup Information</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                </ul>
              </div>

              <button
                onClick={() => {
                  // Here you would typically integrate with a payment processor
                  alert('Thank you for your order! We will contact you to arrange pickup.');
                  setIsOpen(false);
                }}
                className="w-full bg-warm-brown text-white py-4 px-6 rounded-lg font-serif text-lg hover:bg-rust-red transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>Checkout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart; 