'use client';

import Link from 'next/link';

import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/data/categories';
import { cities } from '@/data/cities';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Contact', href: '/contact' }
    ],
    explore: [
      { name: 'Services', href: '/services' },
      { name: 'Vendors', href: '/vendors' },
      { name: 'Venues', href: '/venues' },
      { name: 'Inspiration', href: '/inspiration' }
    ],
    help: [
      { name: 'Support', href: '/support' },
      { name: 'FAQ', href: '/faq' },
      { name: 'How it Works', href: '/how-it-works' },
      { name: 'Guides', href: '/guides' }
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Refund Policy', href: '/refund-policy' },
      { name: 'Accessibility', href: '/accessibility' }
    ]
  };

  const popularCategories = categories.filter(cat => cat.popular).slice(0, 6);
  const popularCities = cities.filter(city => city.popular).slice(0, 6);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">EventOps</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              India&apos;s leading marketplace for booking reliable event contractors. 
              From weddings to corporate events, find the perfect professionals for your special occasions.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@eventops.in</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+91-1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Help</h3>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular categories and cities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-white mb-4">Popular Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {popularCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/services/${category.slug}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {category.icon} {category.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Popular Cities</h3>
            <div className="grid grid-cols-2 gap-2">
              {popularCities.map((city) => (
                <Link
                  key={city.id}
                  href={`/cities/${city.slug}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  🏙️ {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">
              Stay Updated with EventOps
            </h3>
            <p className="text-gray-400 mb-4">
              Get the latest event trends, vendor updates, and exclusive offers delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                required
              />
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} EventOps. All rights reserved.
            </div>
            
            {/* Social media links */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
