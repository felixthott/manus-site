import React from 'react';
import { Button } from '@/components/ui/button';
import { Building2, TrendingUp, Users, Shield } from 'lucide-react';

const BusinessManagement = () => {
  const stats = [
    { number: '1000+', label: 'Organizations Trust Us' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Expert Support' },
    { number: '50+', label: 'Countries Served' }
  ];

  const products = [
    {
      name: '20X',
      description: 'Healthcare Management',
      color: 'from-blue-500 to-blue-600',
      icon: <Building2 className="h-8 w-8" />
    },
    {
      name: 'Recruitbee',
      description: 'Recruitment Solutions',
      color: 'from-orange-500 to-red-500',
      icon: <Users className="h-8 w-8" />
    },
    {
      name: 'FlockLink',
      description: 'Business Management',
      color: 'from-gray-600 to-gray-700',
      icon: <TrendingUp className="h-8 w-8" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Business Management Software
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            1000s of organisations trust Byte River to help them and their customers 
            streamline operations, improve efficiency, and drive growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Software Solutions
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our suite of business management tools is designed to handle every aspect 
                of your operations, from healthcare management to recruitment and beyond.
              </p>
            </div>

            <div className="space-y-6">
              {products.map((product, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center text-white`}>
                    {product.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{product.name}</h4>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {/* Dashboard Cards */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-green-500 text-sm font-medium">+12%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">2,847</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-green-500 text-sm font-medium">99.9%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">Uptime</div>
                  <div className="text-sm text-gray-600">This Month</div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Recent Activity</h4>
                    <div className="text-sm text-gray-500">Live</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">New staff member onboarded</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Schedule updated for next week</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Compliance check completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessManagement;

