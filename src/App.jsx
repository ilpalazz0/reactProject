import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './Header';
import Footer from './Footer';
import { CartProvider } from './CartContext';
import CartModal from './CartModal';
import ProductsPage from './ProductsPage';
import ServicePage from './ServicePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ProductDetailsPage from './ProductDetailsPage';
import ScrollToTop from './scripts//ScrollToTop';
import LocationPage from './LocationPage';

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  return (
    <Router>
      <CartProvider>
        <ScrollToTop /> {/* Add this component */}
        <Header onCartClick={() => setIsCartOpen(true)} />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/location" element={<LocationPage />} />
        </Routes>

        <CartModal 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
        />
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;