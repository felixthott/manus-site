import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, BarChart3, Shield, Clock, Bell } from 'lucide-react';

const ProductShowcase = () => {
  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Smart Scheduling",
      description: "Automated staff scheduling with conflict detection and optimization"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Staff Management",
      description: "Complete workforce management with skills tracking and compliance"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & Reports",
      description: "Real-time insights and comprehensive reporting for better decisions"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Tracking",
      description: "Automated compliance monitoring and certification management"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Tracking",
      description: "Accurate time tracking with GPS verification and mobile apps"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Instant Notifications",
      description: "Real-time alerts for schedule changes, compliance issues, and more"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Software Interface */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">20X</span>
                    </div>
                    <span className="text-white font-semibold">Healthcare Management</span>
                  </div>
                  <div className="text-white text-sm">Jaison Thomas</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="bg-gray-50 px-6 py-3 border-b">
                <div className="flex space-x-6">
                  <button className="text-blue-600 font-medium text-sm border-b-2 border-blue-600 pb-1">
                    Client Calendar
                  </button>
                  <button className="text-gray-600 text-sm hover:text-blue-600">
                    Staff View
                  </button>
                  <button className="text-gray-600 text-sm hover:text-blue-600">
                    Week View
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="p-6">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Mon 16', 'Tue 17', 'Wed 18', 'Thu 19', 'Fri 20', 'Sat 21', 'Sun 22'].map((day, index) => (
                    <div key={day} className="text-center">
                      <div className="text-xs font-medium text-gray-600 mb-2">{day}</div>
                      <div className="space-y-1">
                        {index < 5 && (
                          <>
                            <div className="bg-purple-100 text-purple-800 text-xs p-2 rounded border-l-4 border-purple-500">
                              <div className="font-medium">Morning Shift</div>
                              <div>08:00 - 16:00</div>
                            </div>
                            {index === 2 && (
                              <div className="bg-blue-100 text-blue-800 text-xs p-2 rounded border-l-4 border-blue-500">
                                <div className="font-medium">Evening Shift</div>
                                <div>16:00 - 00:00</div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Staff Assignment */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Staff Assignments</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white p-3 rounded border">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-medium">JM</span>
                        </div>
                        <div>
                          <div className="font-medium text-sm">John Mathew</div>
                          <div className="text-xs text-gray-500">RGN Endoscopys</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">11:00 PM - 10:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border max-w-xs">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-900">Single Staff Acceptance</div>
                  <div className="text-xs text-gray-600 mt-1">New shift assignment confirmed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Nursing & Health Care Agency Management Software
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Streamline your healthcare operations with our comprehensive management platform. 
                From staff scheduling to compliance tracking, we've got you covered.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                About 20X
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

