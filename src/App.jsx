import React, { useState } from 'react';
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
import BlogPage from './components/BlogPage';
import RequestDemoPage from './components/RequestDemoPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'blog':
        return <BlogPage onBack={() => navigateTo('home')} />;
      case 'demo':
        return <RequestDemoPage onBack={() => navigateTo('home')} />;
      case 'admin':
        return <AdminPanel onBack={() => navigateTo('home')} />;
      default:
        return (
          <div className="min-h-screen bg-white">
            <Header onNavigate={navigateTo} />
            <Hero onNavigate={navigateTo} />
            <ProductShowcase />
            <BusinessManagement />
            <Partners />
            <AboutSection />
            <CustomerStories />
            <BlogSection onNavigate={navigateTo} />
            <Footer onNavigate={navigateTo} />
          </div>
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;

