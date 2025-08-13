import React from 'react';
import { Button } from '@/components/ui/button';
import { Target, Zap, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Mission-Critical Focus",
      description: "We deliver technology solutions that are essential to your business operations"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Speed & Quality",
      description: "Known for our rapid delivery without compromising on quality standards"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer-Centric",
      description: "Every solution is designed to enrich customer experiences and optimize efficiency"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Unbeatable ROI",
      description: "Our solutions deliver measurable returns on investment for our clients"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <div className="text-blue-200 font-semibold mb-2">BYTE RIVER</div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                We are Byte River
              </h2>
              <div className="space-y-4 text-lg text-blue-100 leading-relaxed">
                <p>
                  We give our customers the choice, support, expertise and innovation to grow.
                </p>
                <p>
                  We enable some of the most demanding organizations to enrich customer experiences, 
                  optimize efficiencies, launch new platforms, and monetize data opportunities.
                </p>
                <p>
                  We offer fully-managed and end-to-end technology, tools, talent, and tactics as 
                  a single platform to deliver on mission-critical technology initiatives. We're 
                  known for our speed, quality, and unbeatable ROI.
                </p>
              </div>
            </div>

            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              About Byte River
            </Button>
          </div>

          {/* Right - Visual Elements */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="space-y-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-white">{value.title}</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full p-4 shadow-lg">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full p-4 shadow-lg">
              <div className="w-8 h-8 flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-blue-200">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-blue-200">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-blue-200">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

