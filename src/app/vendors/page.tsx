'use client';

import { useState, useEffect } from 'react';

import { Search, Filter, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { VendorService } from '@/lib/services/vendor-service';
import { useCartStore } from '@/lib/stores/cart-store';
import { Vendor, SearchFilters } from '@/types';
import { categories } from '@/data/categories';
import { cities } from '@/data/cities';

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  const { addToShortlist, shortlistedVendors } = useCartStore();

  useEffect(() => {
    const loadVendors = async () => {
      setLoading(true);
      try {
        const result = await VendorService.getVendors(filters);
        setVendors(result.vendors);
        setTotalResults(result.totalResults);
        setHasMore(result.hasMore);
      } catch (error) {
        console.error('Error loading vendors:', error);
      } finally {
        setLoading(false);
      }
    };

    loadVendors();
  }, [filters]);

  const handleFilterChange = (key: keyof SearchFilters, value: string | number | boolean) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({});
  };

  const isShortlisted = (vendorId: string) => {
    return shortlistedVendors.some(v => v.id === vendorId);
  };

  const toggleShortlist = (vendor: Vendor) => {
    if (isShortlisted(vendor.id)) {
      // Remove from shortlist (implement in cart store)
    } else {
      addToShortlist(vendor);
    }
  };

  const popularCategories = categories.filter(cat => cat.popular);
  const popularCities = cities.filter(city => city.popular);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse Event Vendors
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find the perfect professionals for your event from our verified vendor network
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search vendors..."
                value={filters.query || ''}
                onChange={(e) => handleFilterChange('query', e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={filters.city || ''} onValueChange={(value) => handleFilterChange('city', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Cities</SelectItem>
                {popularCities.map((city) => (
                  <SelectItem key={city.id} value={city.name}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={filters.category || ''} onValueChange={(value) => handleFilterChange('category', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {popularCategories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.icon} {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Budget Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget Range (₹)
                  </label>
                  <div className="space-y-2">
                    <Slider
                      value={[filters.budgetMin || 0, filters.budgetMax || 100000]}
                      onValueChange={([min, max]) => {
                        handleFilterChange('budgetMin', min);
                        handleFilterChange('budgetMax', max);
                      }}
                      max={100000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>₹{filters.budgetMin?.toLocaleString() || '0'}</span>
                      <span>₹{filters.budgetMax?.toLocaleString() || '100,000'}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Minimum Rating
                  </label>
                  <Select value={filters.rating?.toString() || ''} onValueChange={(value) => handleFilterChange('rating', parseFloat(value))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any Rating</SelectItem>
                      <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      <SelectItem value="4.0">4.0+ Stars</SelectItem>
                      <SelectItem value="3.5">3.5+ Stars</SelectItem>
                      <SelectItem value="3.0">3.0+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Badges */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Special Badges
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="verified"
                        checked={filters.verified || false}
                        onCheckedChange={(checked) => handleFilterChange('verified', checked)}
                      />
                      <label htmlFor="verified" className="text-sm text-gray-700 dark:text-gray-300">
                        Verified Only
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="topRated"
                        checked={filters.topRated || false}
                        onCheckedChange={(checked) => handleFilterChange('topRated', checked)}
                      />
                      <label htmlFor="topRated" className="text-sm text-gray-700 dark:text-gray-300">
                        Top Rated
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="new"
                        checked={filters.new || false}
                        onCheckedChange={(checked) => handleFilterChange('new', checked)}
                      />
                      <label htmlFor="new" className="text-sm text-gray-700 dark:text-gray-300">
                        New Vendors
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button variant="outline" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {vendors.length} of {totalResults} vendors
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
            <Select onValueChange={(value) => handleFilterChange('sort', value)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Relevance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Vendors Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : vendors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor) => (
              <div key={vendor.id}>
                <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
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
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleShortlist(vendor)}
                        className={isShortlisted(vendor.id) ? 'text-purple-600' : 'text-gray-400'}
                      >
                        {isShortlisted(vendor.id) ? '✓' : '♡'}
                      </Button>
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
                  
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-3">
                      {vendor.description}
                    </p>
                    
                    <Separator className="my-4" />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        Starting from ₹{vendor.startingPrice.toLocaleString()}
                      </span>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No vendors found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Vendors
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
