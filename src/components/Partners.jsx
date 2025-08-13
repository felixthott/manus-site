import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Vine Recruitment', logo: 'VR' },
    { name: 'Medcare Works', logo: 'MW' },
    { name: 'Lime Healthcare', logo: 'LH' },
    { name: 'Gifted Healthcare', logo: 'GH' },
    { name: 'MedStaff', logo: 'MS' },
    { name: 'CareLink', logo: 'CL' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Better together.
          </h2>
          <p className="text-lg text-gray-600">
            Byte River partners with industry leading companies
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm border flex items-center justify-center mb-3 group-hover:shadow-md transition-shadow">
                <span className="text-gray-600 font-bold text-lg">{partner.logo}</span>
              </div>
              <span className="text-sm text-gray-600 text-center font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-2xl">50+</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Global Partners</h3>
            <p className="text-gray-600 text-sm">
              Trusted by healthcare organizations worldwide
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold text-2xl">99%</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Satisfaction Rate</h3>
            <p className="text-gray-600 text-sm">
              Consistently high customer satisfaction scores
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 font-bold text-2xl">24/7</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Support Available</h3>
            <p className="text-gray-600 text-sm">
              Round-the-clock support for all our partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

