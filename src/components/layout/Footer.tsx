import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
              <span className="text-xl font-bold text-white">AgriConnect</span>
            </div>
            <p className="text-sm">
              Connecting farmers and suppliers to build a sustainable agricultural marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-green-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm hover:text-green-400 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-400 transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* For Farmers */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">For Farmers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register" className="text-sm hover:text-green-400 transition-colors">
                  Join as Farmer
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-400 transition-colors">
                  Sell Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-400 transition-colors">
                  Farmer Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-green-400 transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@agriconnect.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="text-sm">
                  123 Agriculture Ave
                  <br />
                  Farm City, FC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 AgriConnect. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-green-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
