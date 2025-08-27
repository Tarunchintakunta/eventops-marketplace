'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { 
  Menu, 
  X, 
  Search, 
  User, 
  Building2, 
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useAuthStore } from '@/lib/stores/auth-store';
import { useTheme } from 'next-themes';
import { categories } from '@/data/categories';


export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { theme, setTheme } = useTheme();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleMegaMenuHover = (menu: string) => {
    setActiveMegaMenu(menu);
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  const isActive = (path: string) => pathname === path;

  const megaMenuItems = {
    services: {
      title: 'Services',
      description: 'Find the perfect services for your event',
      items: categories.slice(0, 6).map(cat => ({
        name: cat.name,
        href: `/services/${cat.slug}`,
        icon: cat.icon,
        description: cat.description
      }))
    },
    vendors: {
      title: 'Vendors',
      description: 'Browse verified professionals',
      items: [
        { name: 'All Vendors', href: '/vendors', icon: '👥', description: 'Complete directory' },
        { name: 'Top Rated', href: '/vendors?topRated=true', icon: '⭐', description: 'Best in class' },
        { name: 'New Vendors', href: '/vendors?new=true', icon: '🆕', description: 'Fresh talent' },
        { name: 'Verified', href: '/vendors?verified=true', icon: '✓', description: 'Trusted professionals' }
      ]
    },
    venues: {
      title: 'Venues',
      description: 'Discover perfect locations',
      items: [
        { name: 'Banquet Halls', href: '/venues?category=banquet', icon: '🏛️', description: 'Elegant spaces' },
        { name: 'Hotels', href: '/venues?category=hotel', icon: '🏨', description: 'Luxury venues' },
        { name: 'Lawns', href: '/venues?category=lawn', icon: '🌿', description: 'Outdoor celebrations' },
        { name: 'Resorts', href: '/venues?category=resort', icon: '🏖️', description: 'Scenic locations' }
      ]
    },
    inspiration: {
      title: 'Inspiration',
      description: 'Get inspired for your event',
      items: [
        { name: 'Weddings', href: '/inspiration?category=wedding', icon: '💒', description: 'Romantic ideas' },
        { name: 'Corporate', href: '/inspiration?category=corporate', icon: '💼', description: 'Professional setups' },
        { name: 'Birthdays', href: '/inspiration?category=birthday', icon: '🎂', description: 'Fun celebrations' },
        { name: 'Festivals', href: '/inspiration?category=festival', icon: '🎉', description: 'Cultural events' }
      ]
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">EventOps</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {Object.entries(megaMenuItems).map(([key, menu]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMegaMenuHover(key)}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <span>{menu.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeMegaMenu === key && (
                  <div className="absolute top-full left-0 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-6">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {menu.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {menu.description}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {menu.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            onClick={closeMobileMenu}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{item.icon}</span>
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                                  {item.name}
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            ))}

            <Link
              href="/blog"
              className={`text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                isActive('/blog') ? 'text-purple-600 dark:text-purple-400' : ''
              }`}
            >
              Blog
            </Link>

            <Link
              href="/guides"
              className={`text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                isActive('/guides') ? 'text-purple-600 dark:text-purple-400' : ''
              }`}
            >
              Guides
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">Search</span>
              <kbd className="hidden lg:inline-flex items-center rounded border bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-xs font-mono text-gray-600 dark:text-gray-400">
                ⌘K
              </kbd>
            </Button>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <Sun className="w-4 h-4 dark:hidden" />
              <Moon className="w-4 h-4 hidden dark:block" />
            </Button>

            {/* Auth buttons */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span className="hidden md:inline">{user?.name}</span>
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="text-gray-700 dark:text-gray-300"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="default" size="sm">
                    Get Started
                  </Button>
                </Link>
                <Link href="/vendor/register">
                  <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2">
                    <Building2 className="w-4 h-4" />
                    <span>Become a Vendor</span>
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="lg:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-6 space-y-6">
              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Services
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {categories.slice(0, 6).map((category) => (
                    <Link
                      key={category.id}
                      href={`/services/${category.slug}`}
                      className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      <span className="text-xl">{category.icon}</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {category.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="space-y-3">
                <Link
                  href="/vendors"
                  className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Browse Vendors
                </Link>
                <Link
                  href="/venues"
                  className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Find Venues
                </Link>
                <Link
                  href="/inspiration"
                  className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Get Inspired
                </Link>
                <Link
                  href="/blog"
                  className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
                <Link
                  href="/guides"
                  className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Guides
                </Link>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <Link href="/vendor/register">
                  <Button className="w-full" onClick={closeMobileMenu}>
                    Become a Vendor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
    </nav>
  );
}
