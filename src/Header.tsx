import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Add this import

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-[#160433] border-b border-purple-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/nlogo.png" 
                alt="Netisens Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-purple-800/30 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-800/30">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-300 hover:text-white transition-colors px-2 py-1">Features</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors px-2 py-1">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors px-2 py-1">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors px-2 py-1">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}