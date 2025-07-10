import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Leaf } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                  AgriConnect
                </span>
                <span className="text-xs text-slate-400 -mt-1">Farm to Table Direct</span>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Connecting farmers and suppliers to build a sustainable agricultural marketplace.
              Fresh produce, fair prices, direct connections.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-green-400 transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-green-400 transition-colors duration-200 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm hover:text-green-400 transition-colors duration-200 hover:underline"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-sm hover:text-green-400 transition-colors duration-200 hover:underline"
                >
                  Categories
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-green-400 transition-colors duration-200 hover:underline"
                >
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
                <Link
                  to="/register"
                  className="text-sm hover:text-green-400 transition-colors duration-200 hover:underline"
                >
                  Join as Farmer
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-green-400 transition-colors duration-200 hover:underline"
                >
                  Sell Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-green-400 transition-colors duration-200 hover:underline"
                >
                  Farmer Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-green-400 transition-colors duration-200 hover:underline"
                >
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-green-400" />
                <span>support@agriconnect.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-1 text-green-400" />
                <span>
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
            <p className="text-sm text-slate-400">© 2025 AgriConnect. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm hover:text-green-400 transition-colors duration-200 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm hover:text-green-400 transition-colors duration-200 hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm hover:text-green-400 transition-colors duration-200 hover:underline"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
