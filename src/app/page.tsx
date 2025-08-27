import { Metadata } from 'next';
import Link from 'next/link';

import { 
  Search, 
  MapPin, 
  Calendar, 
  Star, 
  Users, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


export const metadata: Metadata = {
  title: 'EventOps - Book Trusted Event Contractors in India',
  description: 'Find and book reliable event contractors for weddings, corporate events, birthdays, and more. Verified vendors across India with transparent pricing.',
  openGraph: {
    title: 'EventOps - Book Trusted Event Contractors in India',
    description: 'Find and book reliable event contractors for weddings, corporate events, birthdays, and more.',
  },
};

export default function HomePage() {
  const popularCategories = [
    { id: '1', name: 'Catering', slug: 'catering', icon: '🍽️', description: 'Food services' },
    { id: '2', name: 'Decoration', slug: 'decoration', icon: '🌸', description: 'Venue decoration' },
    { id: '3', name: 'Photography', slug: 'photography', icon: '📸', description: 'Photo services' }
  ];
  const popularCities = [
    { id: '1', name: 'Mumbai', slug: 'mumbai' },
    { id: '2', name: 'Delhi', slug: 'delhi' },
    { id: '3', name: 'Bangalore', slug: 'bangalore' }
  ];
  const featuredVendors = [
    { 
      id: '1', 
      name: 'Vendor 1', 
      businessName: 'Test Business',
      category: 'Decoration', 
      city: 'Mumbai', 
      rating: 4.8, 
      totalReviews: 100, 
      badges: [
        { id: '1', name: 'Verified', description: 'Verified vendor', icon: '✓', color: 'bg-green-500' }
      ], 
      description: 'Test vendor', 
      startingPrice: 15000 
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Book Trusted Event Contractors
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                End-to-End
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, find the perfect professionals 
              for your special occasions. Verified vendors, transparent pricing, and seamless booking.
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Select>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent>
                        {popularCities.map((city) => (
                          <SelectItem key={city.id} value={city.slug}>
                            {city.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Select>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Event Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {popularCategories.map((category) => (
                          <SelectItem key={category.id} value={category.slug}>
                            {category.icon} {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="date"
                      placeholder="Event Date"
                      className="pl-10"
                    />
                  </div>
                  
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Search Vendors
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>5000+ Verified Vendors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>4.8/5 Average Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span>50,000+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How EventOps Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Three simple steps to make your event perfect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Search & Discover',
                description: 'Browse through our curated list of verified vendors and venues. Filter by location, budget, and services.',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Compare & Shortlist',
                description: 'Compare vendors side by side, read reviews, and shortlist the ones that match your requirements.',
                icon: '⚖️'
              },
              {
                step: '03',
                title: 'Book & Celebrate',
                description: 'Book your chosen vendors with secure payments and enjoy your perfect event with peace of mind.',
                icon: '🎉'
              }
            ].map((item) => (
              <div key={item.step}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Event Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to make your event memorable
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularCategories.map((category) => (
              <div key={category.id}>
                <Link href={`/services/${category.slug}`}>
                  <Card className="text-center border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="text-4xl mb-2">{category.icon}</div>
                      <CardTitle className="text-sm text-gray-900 dark:text-white">
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Vendors
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Top-rated professionals trusted by thousands of customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVendors.map((vendor) => (
              <div key={vendor.id}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {vendor.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-900 dark:text-white">
                          {vendor.businessName}
                        </CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {vendor.category} • {vendor.city}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {vendor.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        ({vendor.totalReviews} reviews)
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {vendor.badges.map((badge) => (
                        <Badge key={badge.id} variant="secondary" className={badge.color}>
                          {badge.icon} {badge.name}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {vendor.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        Starting from ₹{vendor.startingPrice.toLocaleString()}
                      </span>
                      <Link href={`/vendors/${vendor.id}`}>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/vendors">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                View All Vendors
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of customers who trust EventOps for their special occasions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Started Free
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
