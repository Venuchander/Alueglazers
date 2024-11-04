import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing icons from react-icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">ALUEGLAZERS</h3>
            <p className="text-gray-400 text-sm">Redefining spaces with innovative glazing solutions since 2013.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#products" className="text-gray-400 hover:text-white transition-colors text-sm">Products</Link></li>
              <li><Link href="#innovation" className="text-gray-400 hover:text-white transition-colors text-sm">Innovation</Link></li>
              <li><Link href="#support" className="text-gray-400 hover:text-white transition-colors text-sm">Support</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 text-sm">Valasaravakkam, Chennai, Tamil Nadu</p>
            <p className="text-gray-400 text-sm">info@alueglazers.com</p>
            <p className="text-gray-400 text-sm">+91 1234567890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" title="Facebook">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" title="Twitter">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" title="Instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ALUEGLAZERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
