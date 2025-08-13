import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  MessageSquare, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Save,
  Upload,
  BarChart3,
  Globe
} from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isEditing, setIsEditing] = useState(false);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
    { id: 'pages', label: 'Pages', icon: <FileText className="h-5 w-5" /> },
    { id: 'blog', label: 'Blog Posts', icon: <FileText className="h-5 w-5" /> },
    { id: 'testimonials', label: 'Testimonials', icon: <MessageSquare className="h-5 w-5" /> },
    { id: 'users', label: 'Users', icon: <Users className="h-5 w-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'seo', label: 'SEO Settings', icon: <Globe className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> }
  ];

  const mockData = {
    pages: [
      { id: 1, title: 'Home Page', status: 'Published', lastModified: '2025-01-15' },
      { id: 2, title: 'About Us', status: 'Published', lastModified: '2025-01-10' },
      { id: 3, title: 'Products', status: 'Draft', lastModified: '2025-01-12' }
    ],
    blogPosts: [
      { id: 1, title: 'Healthcare Employee Scheduling Software', status: 'Published', author: 'Admin', date: '2025-02-01' },
      { id: 2, title: 'Nursing Agency Software Revolution', status: 'Published', author: 'Admin', date: '2025-01-28' },
      { id: 3, title: 'Medical Staffing Solutions', status: 'Draft', author: 'Admin', date: '2025-01-25' }
    ],
    testimonials: [
      { id: 1, name: 'Manisha Jain', company: 'Primus Nursing', rating: 4.0, status: 'Approved' },
      { id: 2, name: 'Emanuel', company: 'Breakthru', rating: 4.0, status: 'Approved' },
      { id: 3, name: 'Khawar', company: 'Gateway Recruitment', rating: 4.0, status: 'Pending' }
    ]
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Quick Add
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Pages</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <p className="text-sm text-green-600 mt-2">+2 this month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Blog Posts</p>
              <p className="text-2xl font-bold text-gray-900">28</p>
            </div>
            <FileText className="h-8 w-8 text-green-600" />
          </div>
          <p className="text-sm text-green-600 mt-2">+5 this month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Testimonials</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <MessageSquare className="h-8 w-8 text-orange-600" />
          </div>
          <p className="text-sm text-green-600 mt-2">+12 this month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Monthly Visitors</p>
              <p className="text-2xl font-bold text-gray-900">24.5K</p>
            </div>
            <BarChart3 className="h-8 w-8 text-purple-600" />
          </div>
          <p className="text-sm text-green-600 mt-2">+18% this month</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">New testimonial from Manisha Jain approved</span>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Blog post "Healthcare Scheduling" published</span>
              <span className="text-xs text-gray-400">5 hours ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Homepage content updated</span>
              <span className="text-xs text-gray-400">1 day ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Plus className="h-6 w-6 mb-2" />
              <span className="text-sm">New Page</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <FileText className="h-6 w-6 mb-2" />
              <span className="text-sm">New Post</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Upload className="h-6 w-6 mb-2" />
              <span className="text-sm">Upload Media</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
              <Settings className="h-6 w-6 mb-2" />
              <span className="text-sm">Site Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContentTable = (title, data, columns) => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column}
                </th>
              ))}
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {Object.values(item).slice(1).map((value, valueIndex) => (
                  <td key={valueIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {valueIndex === Object.values(item).length - 3 && item.status ? (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Published' || item.status === 'Approved' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {value}
                      </span>
                    ) : (
                      value
                    )}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSEOSettings = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">SEO Settings</h1>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Global SEO Settings</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="Best Innovative Software Solutions and Services | ByteRiver Tech"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
            <textarea 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              defaultValue="ByteRiver provides innovative healthcare and business management software solutions. Streamline operations with our 20X, Recruitbee, and FlockLink platforms."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="healthcare software, nursing agency software, recruitment software, business management"
            />
          </div>
          
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">SEO Performance</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">SEO Score</span>
              <span className="text-2xl font-bold text-green-600">95/100</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Performance</span>
                <span className="text-green-600">Excellent</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-11/12"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Accessibility</span>
                <span className="text-green-600">Good</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-5/6"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Best Practices</span>
                <span className="text-green-600">Excellent</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'pages':
        return renderContentTable('Pages', mockData.pages, ['Title', 'Status', 'Last Modified']);
      case 'blog':
        return renderContentTable('Blog Posts', mockData.blogPosts, ['Title', 'Status', 'Author', 'Date']);
      case 'testimonials':
        return renderContentTable('Testimonials', mockData.testimonials, ['Name', 'Company', 'Rating', 'Status']);
      case 'seo':
        return renderSEOSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r">
        <div className="p-6">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BR</span>
            </div>
            <span className="ml-2 text-lg font-bold text-gray-900">Admin Panel</span>
          </div>
        </div>
        
        <nav className="px-4 pb-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;

