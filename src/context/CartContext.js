'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Load from localStorage on mount (optional but good practice)
  useEffect(() => {
    const savedCart = localStorage.getItem('xerodirt_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart');
      }
    }
  }, []);

  // Save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('xerodirt_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (service, tier) => {
    setCartItems(prev => {
      // Check if item already exists
      const existingItemIndex = prev.findIndex(item => item.tier.name === tier.name && item.service.id === service.id);
      
      if (existingItemIndex >= 0) {
        // Increment quantity
        const newCart = [...prev];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      }
      
      // Add new item
      return [...prev, { service, tier, quantity: 1, id: `${service.id}-${tier.name}` }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.id === id);
      if (existingItemIndex >= 0) {
        const item = prev[existingItemIndex];
        if (item.quantity > 1) {
          const newCart = [...prev];
          newCart[existingItemIndex].quantity -= 1;
          return newCart;
        }
        return prev.filter(item => item.id !== id);
      }
      return prev;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.tier.price * item.quantity), 0);
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartTotal, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
