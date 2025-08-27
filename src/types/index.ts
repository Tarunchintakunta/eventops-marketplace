export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: 'customer' | 'vendor' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface Customer extends User {
  role: 'customer';
  addresses: Address[];
  preferences: CustomerPreferences;
}

export interface Vendor extends User {
  role: 'vendor';
  businessName: string;
  businessType: 'individual' | 'company';
  category: string;
  subcategories: string[];
  description: string;
  startingPrice: number;
  city: string;
  serviceAreas: string[];
  verified: boolean;
  topRated: boolean;
  new: boolean;
  rating: number;
  totalReviews: number;
  portfolio: PortfolioItem[];
  packages: Package[];
  availability: Availability[];
  badges: Badge[];
  kycStatus: 'pending' | 'verified' | 'rejected';
  subscription: 'free' | 'premium' | 'enterprise';
}

export interface Admin extends User {
  role: 'admin';
  permissions: string[];
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface CustomerPreferences {
  preferredCategories: string[];
  preferredCities: string[];
  budgetRange: {
    min: number;
    max: number;
  };
  eventTypes: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  createdAt: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: 'INR';
  features: string[];
  inclusions: string[];
  exclusions: string[];
  deliveryTime: string;
  isPopular: boolean;
}

export interface Availability {
  id: string;
  date: string;
  timeSlots: TimeSlot[];
  isBlocked: boolean;
  reason?: string;
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  price?: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  imageUrl: string;
  parentCategory?: string;
  subcategories: string[];
  popular: boolean;
}

export interface City {
  id: string;
  name: string;
  slug: string;
  state: string;
  popular: boolean;
  imageUrl: string;
  description: string;
}

export interface Venue {
  id: string;
  name: string;
  description: string;
  category: 'banquet' | 'hotel' | 'lawn' | 'resort' | 'community-hall' | 'other';
  city: string;
  address: string;
  capacity: {
    min: number;
    max: number;
  };
  rooms: number;
  cateringPolicy: 'allowed' | 'not-allowed' | 'in-house-only';
  startingPrice: number;
  images: string[];
  amenities: string[];
  rating: number;
  totalReviews: number;
  verified: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  createdAt: string;
  helpful: number;
  vendorReply?: string;
  vendorReplyDate?: string;
}

export interface Booking {
  id: string;
  customerId: string;
  vendorId: string;
  eventType: string;
  eventDate: string;
  eventTime: string;
  location: string;
  services: BookingService[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  createdAt: string;
  updatedAt: string;
}

export interface BookingService {
  id: string;
  serviceName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  addons: string[];
}

export interface Quote {
  id: string;
  customerId: string;
  vendorId: string;
  eventType: string;
  eventDate: string;
  eventTime: string;
  location: string;
  requirements: string;
  budget: {
    min: number;
    max: number;
  };
  status: 'pending' | 'responded' | 'accepted' | 'rejected';
  vendorResponse?: {
    price: number;
    description: string;
    inclusions: string[];
    exclusions: string[];
    deliveryTime: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Lead {
  id: string;
  vendorId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  eventType: string;
  eventDate: string;
  requirements: string;
  budget: {
    min: number;
    max: number;
  };
  source: 'website' | 'referral' | 'social' | 'other';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar?: string;
  category: string;
  tags: string[];
  imageUrl: string;
  publishedAt: string;
  readTime: number;
  views: number;
}

export interface Guide {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  imageUrl: string;
  publishedAt: string;
  updatedAt: string;
}

export interface InspirationItem {
  id: string;
  title: string;
  description: string;
  category: string;
  style: string;
  color: string;
  budget: 'low' | 'medium' | 'high';
  imageUrl: string;
  tags: string[];
  vendorId?: string;
  createdAt: string;
}

export interface SearchFilters {
  query?: string;
  city?: string;
  category?: string;
  date?: string;
  budgetMin?: number;
  budgetMax?: number;
  rating?: number;
  availability?: string;
  verified?: boolean;
  topRated?: boolean;
  new?: boolean;
  sort?: string;
}

export interface SearchResult {
  vendors: Vendor[];
  venues: Venue[];
  totalResults: number;
  hasMore: boolean;
}

export interface PackageBuilder {
  id: string;
  name: string;
  eventType: string;
  eventDate: string;
  services: PackageBuilderService[];
  totalEstimatedCost: number;
  status: 'draft' | 'ready' | 'booked';
  createdAt: string;
  updatedAt: string;
}

export interface PackageBuilderService {
  id: string;
  vendorId: string;
  vendorName: string;
  serviceName: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
  actionUrl?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  type: 'text' | 'image' | 'file';
  read: boolean;
  createdAt: string;
}

export interface DashboardStats {
  totalBookings: number;
  totalRevenue: number;
  pendingQuotes: number;
  upcomingEvents: number;
  monthlyGrowth: number;
}

export interface VendorStats extends DashboardStats {
  totalLeads: number;
  conversionRate: number;
  averageRating: number;
  portfolioViews: number;
}

export interface AdminStats {
  totalVendors: number;
  pendingApprovals: number;
  totalUsers: number;
  totalRevenue: number;
  monthlyGrowth: number;
}
