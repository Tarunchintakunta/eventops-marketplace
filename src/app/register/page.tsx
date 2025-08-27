'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Eye, EyeOff, Mail, Lock, User, Building2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuthStore } from '@/lib/stores/auth-store';
import { toast } from 'sonner';
import { categories } from '@/data/categories';
import { cities } from '@/data/cities';

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessType: 'individual',
    category: '',
    city: '',
    description: '',
    startingPrice: '',
    acceptTerms: false
  });
  
  const { register, isLoading } = useAuthStore();
  const router = useRouter();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!formData.acceptTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    try {
      await register({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: activeTab as 'customer' | 'vendor',
        ...(activeTab === 'vendor' && {
          businessName: formData.businessName,
          businessType: formData.businessType as 'individual' | 'company',
          category: formData.category,
          city: formData.city,
          description: formData.description,
          startingPrice: parseFloat(formData.startingPrice)
        })
      });
      
      toast.success('Registration successful!');
      router.push('/dashboard');
    } catch {
      toast.error('Registration failed. Please try again.');
    }
  };

  const popularCategories = categories.filter(cat => cat.popular);
  const popularCities = cities.filter(city => city.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div>
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">EventOps</span>
              </div>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">
                Create Your Account
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Join EventOps and start planning amazing events
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="customer" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Customer</span>
                  </TabsTrigger>
                  <TabsTrigger value="vendor" className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4" />
                    <span>Vendor</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab} className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Basic Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Basic Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                              id="name"
                              type="text"
                              placeholder="Enter your full name"
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91-98765-43210"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your city" />
                            </SelectTrigger>
                            <SelectContent>
                              {popularCities.map((city) => (
                                <SelectItem key={city.id} value={city.name}>
                                  {city.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Vendor-specific fields */}
                    {activeTab === 'vendor' && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Business Information
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="businessName">Business Name *</Label>
                            <Input
                              id="businessName"
                              type="text"
                              placeholder="Enter business name"
                              value={formData.businessName}
                              onChange={(e) => handleInputChange('businessName', e.target.value)}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="businessType">Business Type *</Label>
                            <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="individual">Individual</SelectItem>
                                <SelectItem value="company">Company</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="category">Service Category *</Label>
                            <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select service category" />
                              </SelectTrigger>
                              <SelectContent>
                                {popularCategories.map((category) => (
                                  <SelectItem key={category.id} value={category.name}>
                                    {category.icon} {category.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="startingPrice">Starting Price (₹) *</Label>
                            <Input
                              id="startingPrice"
                              type="number"
                              placeholder="15000"
                              value={formData.startingPrice}
                              onChange={(e) => handleInputChange('startingPrice', e.target.value)}
                              min="0"
                              step="1000"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="description">Business Description</Label>
                          <Textarea
                            id="description"
                            placeholder="Describe your services, experience, and what makes you unique..."
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            rows={3}
                          />
                        </div>
                      </div>
                    )}

                    {/* Security */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Security
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="password">Password *</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                              id="password"
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Create a strong password"
                              value={formData.password}
                              onChange={(e) => handleInputChange('password', e.target.value)}
                              className="pl-10 pr-10"
                              required
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="w-4 h-4 text-gray-400" />
                              ) : (
                                <Eye className="w-4 h-4 text-gray-400" />
                              )}
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm Password *</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                              id="confirmPassword"
                              type={showConfirmPassword ? 'text' : 'password'}
                              placeholder="Confirm your password"
                              value={formData.confirmPassword}
                              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                              className="pl-10 pr-10"
                              required
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="w-4 h-4 text-gray-400" />
                              ) : (
                                <Eye className="w-4 h-4 text-gray-400" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="acceptTerms"
                          checked={formData.acceptTerms}
                          onCheckedChange={(checked) => handleInputChange('acceptTerms', checked as boolean)}
                          required
                        />
                        <Label htmlFor="acceptTerms" className="text-sm text-gray-700 dark:text-gray-300">
                          I agree to the{' '}
                          <Link href="/terms" className="text-purple-600 hover:text-purple-700 dark:text-purple-400">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link href="/privacy" className="text-purple-600 hover:text-purple-700 dark:text-purple-400">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Creating account...' : 'Create Account'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
