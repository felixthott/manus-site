import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import BusinessManagement from './components/BusinessManagement';
import Partners from './components/Partners';
import AboutSection from './components/AboutSection';
import CustomerStories from './components/CustomerStories';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import './App.css';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductShowcase />
      <BusinessManagement />
      <Partners />
      <AboutSection />
      <CustomerStories />
      <BlogSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;

