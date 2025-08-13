import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = ({ onNavigate }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                  Business Software
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Let's turn your vision into reality with innovative software solutions 
                that streamline operations and drive growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                onClick={() => onNavigate('demo')}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4"
                onClick={() => onNavigate('demo')}
              >
                Request a Demo
              </Button>
            </div>

            {/* Product Icons */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-lg">20X</span>
                </div>
                <span className="text-sm text-gray-600">Healthcare</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-sm">RB</span>
                </div>
                <span className="text-sm text-gray-600">Recruitbee</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-sm">FL</span>
                </div>
                <span className="text-sm text-gray-600">FlockLink</span>
              </div>
            </div>
          </div>

          {/* Right Content - Software Preview */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/healthcare-dashboard.png"
                alt="Healthcare Management Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20">
              99.9% Uptime
            </div>
            <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20">
              24/7 Support
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl transform rotate-3 scale-105 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

