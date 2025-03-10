import React from 'react';
import {  Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
export const Footer: React.FC = () => {
  return (
<footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-4">
            <img src={logo} alt="Logo" className="h-10 w-40 md:h-24 md:w-14 lg:h-20 lg:w-32" />

              {/* <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">EliteCrows</span> */}
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Leading AI & Cloud Solutions provider specializing in enterprise digital transformation.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span><a>elitecrowsindia@gmail.com</a></span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span><a>+91 6383 106 107</a></span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Gobichettipalayam,Erode-638506</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} EliteCrows. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};