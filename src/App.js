import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Recipes from './components/Recipes';
import Subscriptions from './components/Subscriptions';
import CustomOrders from './components/CustomOrders';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'products':
        return <Products addToCart={addToCart} />;
      case 'about':
        return <About />;
      case 'recipes':
        return <Recipes />;
      case 'subscriptions':
        return <Subscriptions />;
      case 'custom-orders':
        return <CustomOrders />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-cottage-cream">
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cartItemCount={getTotalItems()}
        setIsCartOpen={setIsCartOpen}
      />
      
      <main>
        {renderSection()}
      </main>

      <Cart 
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        getTotalPrice={getTotalPrice}
      />

      <Footer />
    </div>
  );
}

export default App;
