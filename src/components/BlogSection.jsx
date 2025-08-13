import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Streamline Operations and Optimise Efficiency with Healthcare Employee Scheduling Software",
      excerpt: "In the fast-paced and demanding world of healthcare, managing employee schedules efficiently is crucial for ensuring quality patient care, maintaining...",
      date: "February 2025",
      readTime: "5 min read",
      category: "Healthcare Technology",
      featured: true
    },
    {
      title: "How Nursing Agency Software is Revolutionizing the Care Industry",
      excerpt: "The healthcare industry has seen a lot of technological advancements in the past few years, and the nursing agency software...",
      date: "March 2023",
      readTime: "4 min read",
      category: "Industry Insights"
    },
    {
      title: "Healthcare Employee Scheduling Software: Improving Efficiency and Quality of Care",
      excerpt: "In the healthcare industry, managing employee schedules can be a complex and time-consuming task. With the high demand for healthcare...",
      date: "March 2023",
      readTime: "6 min read",
      category: "Software Solutions"
    },
    {
      title: "Medical Staffing Software: Streamlining Staffing for Healthcare Providers",
      excerpt: "Discover how medical staffing software can transform your healthcare organization's workforce management and improve operational efficiency.",
      date: "March 2023",
      readTime: "5 min read",
      category: "Workforce Management"
    },
    {
      title: "The Power of Reliable Healthcare Staffing Software",
      excerpt: "Learn about the key features and benefits of implementing reliable healthcare staffing software in your organization.",
      date: "January 2023",
      readTime: "4 min read",
      category: "Technology"
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="h-6 w-6 text-blue-600" />
            <span className="text-blue-600 font-semibold">Blogs</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest articles on healthcare technology, 
            workforce management, and industry best practices.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600 text-sm">{blogPosts[0].date}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Visual */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 lg:p-12 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Schedule Optimization</h4>
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Efficiency Gain</span>
                        <span className="text-green-600 font-semibold">+45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Time Saved</span>
                        <span className="text-blue-600 font-semibold">8hrs/week</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

