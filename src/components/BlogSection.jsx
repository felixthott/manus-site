import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const BlogSection = ({ onNavigate }) => {
  const blogPosts = [
    {
      title: "Streamline Operations and Optimise Efficiency with Healthcare Employee Scheduling Software",
      excerpt: "In the fast-paced and demanding world of healthcare, managing employee schedules efficiently is crucial for ensuring quality patient care, maintaining...",
      date: "February 2025",
      readTime: "5 min read",
      category: "Healthcare Technology",
      featured: true,
      image: "/healthcare-dashboard.png"
    },
    {
      title: "How Nursing Agency Software is Revolutionizing the Care Industry",
      excerpt: "The healthcare industry has seen a lot of technological advancements in the past few years, and the nursing agency software...",
      date: "March 2023",
      readTime: "4 min read",
      category: "Industry Insights",
      image: "/nursing-staff.png"
    },
    {
      title: "Healthcare Employee Scheduling Software: Improving Efficiency and Quality of Care",
      excerpt: "In the healthcare industry, managing employee schedules can be a complex and time-consuming task. With the high demand for healthcare...",
      date: "March 2023",
      readTime: "6 min read",
      category: "Software Solutions",
      image: "/business-meeting.png"
    },
    {
      title: "Medical Staffing Software: Streamlining Staffing for Healthcare Providers",
      excerpt: "Discover how medical staffing software can transform your healthcare organization's workforce management and improve operational efficiency.",
      date: "March 2023",
      readTime: "5 min read",
      category: "Workforce Management",
      image: "/mobile-app.png"
    },
    {
      title: "The Power of Reliable Healthcare Staffing Software",
      excerpt: "Learn about the key features and benefits of implementing reliable healthcare staffing software in your organization.",
      date: "January 2023",
      readTime: "4 min read",
      category: "Technology",
      image: "/analytics-chart.png"
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-blue-600 rounded"></div>
            <span className="text-blue-600 font-semibold">INSIGHTS</span>
            <div className="w-12 h-1 bg-blue-600 rounded"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in healthcare management and business software solutions.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => onNavigate('blog')}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button 
                  onClick={() => onNavigate('blog')}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1 group"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => onNavigate('blog')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
          >
            View All Posts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

