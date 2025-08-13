import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const CustomerStories = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Manisha Jain",
      company: "Primus Nursing",
      rating: 4.0,
      title: "Essential Workforce Tool for Healthcare Agencies",
      content: "The software has been a game-changer for our healthcare agency, streamlining workforce management, ensuring compliance, and improving overall efficiency. Its user-friendly design, seamless integration with other systems, and scalability make it an ideal solution for agencies of any size.",
      avatar: "MJ"
    },
    {
      name: "Emanuel",
      company: "Breakthru",
      rating: 4.0,
      title: "Overall we have been happy with the software",
      content: "It is very good for initial shortlisting stage, and for collecting staff documents and trainings. Good for keeping up with compliance for staff. The alternative software was not as comprehensive as 20X.",
      avatar: "EM"
    },
    {
      name: "Khawar",
      company: "Gateway Recruitment",
      rating: 4.0,
      title: "Very good experience",
      content: "Very happy, I have enjoyed working with the team closely. The team is every so helpful and they always do as you need them too. The support has been exceptional throughout our journey.",
      avatar: "KH"
    },
    {
      name: "Jason Hewitt",
      company: "Healthcare Solutions",
      rating: 4.0,
      title: "20X Platform",
      content: "20x has been amazing thus far. The team are very helpful and welcome feature suggestions and implement these pretty fast. They have been very supportive on our journey and the software is the best on the market.",
      avatar: "JH"
    },
    {
      name: "Toluwani Owa",
      company: "Omega Healthcare",
      rating: 4.0,
      title: "Excellent customer service experience",
      content: "Wow! Where do I start from? The customer service experience has been excellent, the app is incredibly built and serves the purpose. The support team is always there to help whenever we need assistance.",
      avatar: "TO"
    },
    {
      name: "Ricardo Pereira",
      company: "Cosmopolitan Recruitment",
      rating: 4.0,
      title: "Perfect system for temp agencies",
      content: "Been a recruitment consultant for the past 6 years and started using 20x system for the past 3 months, by far one of the best systems I used, simple and straightforward. From initial recruitment to staff payment, it saves lots of time.",
      avatar: "RP"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-blue-600 font-semibold mb-2">BYTE RIVER</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Customer Stories.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about how ByteRiver solutions have 
            transformed their healthcare and recruitment operations.
          </p>
        </div>

        {/* Featured Product */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nursing & Health Care Agency Management Software
              </h3>
              <p className="text-gray-600">
                Streamlining healthcare operations with comprehensive management tools
              </p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">20X</span>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="flex items-start justify-between mb-8">
              <Quote className="h-12 w-12 text-blue-600 flex-shrink-0" />
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full w-10 h-10 p-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full w-10 h-10 p-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {testimonials[currentTestimonial].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {testimonials[currentTestimonial].content}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonials[currentTestimonial].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  <span className="text-gray-600 font-medium">
                    {testimonials[currentTestimonial].rating} Reviews
                  </span>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Customer Satisfaction</h4>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Ease of Use</span>
                      <div className="flex">
                        {renderStars(4.5)}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Customer Support</span>
                      <div className="flex">
                        {renderStars(4.8)}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Value for Money</span>
                      <div className="flex">
                        {renderStars(4.6)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Verified Review
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Let's turn your vision into reality.
          </h3>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;

