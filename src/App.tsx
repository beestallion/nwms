import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { motion } from 'framer-motion'; // Add this import

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#160433] text-white"
    >
      <Header />
      {/* Main Hero Section */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-12">
            
            {/* Left Side - Hero Image */}
            <div className="order-0 lg:order-1">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <img 
                  src="/Home.png" 
                  alt="Workspace illustration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="home-text order-1 lg:order-2 space-y-8" >
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#0CF637] to-[#950DFF] bg-clip-text text-transparent">
                    Innovative
                  </span>
                  <br />
                  workspaces
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  <span className="text-white font-medium">Public, Private, and Semi-private.</span>
                  <br />
                  Boost your productivity!
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <Link to="/get-started">
                  <button className="primary-btn w-full lg:w-auto bg-[#FF9D00] hover:bg-[#e8890a] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200">
                    GET STARTED
                  </button>
                </Link>
                
                <Link to="/sign-in">
                <button className="gradient-outline-btn w-full lg:w-auto text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200">
                  I'M ALREADY REGISTERED
                </button>
                </Link>
              </div>
          

              {/* Additional Info */}
              <div className="pt-8 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0CF637] rounded-full"></div>
                    <span>24/7 Access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#FF9D00] rounded-full"></div>
                    <span>High-Speed WiFi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#950DFF] rounded-full"></div>
                    <span>Premium Amenities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Subtle Background Elements */}
      {/* <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#0CF637] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#950DFF] rounded-full opacity-5 blur-3xl"></div>
      </div> */}
    </motion.div>
  );
}

export default App;