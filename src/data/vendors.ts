import { Vendor, Badge, Package, PortfolioItem, Availability, TimeSlot } from '@/types';

const badges: Badge[] = [
  {
    id: '1',
    name: 'Verified',
    description: 'Identity and business verified',
    icon: '✓',
    color: 'bg-green-500'
  },
  {
    id: '2',
    name: 'Top Rated',
    description: 'Consistently high ratings',
    icon: '⭐',
    color: 'bg-yellow-500'
  },
  {
    id: '3',
    name: 'New',
    description: 'Recently joined platform',
    icon: '🆕',
    color: 'bg-blue-500'
  },
  {
    id: '4',
    name: 'Premium',
    description: 'Premium subscription member',
    icon: '💎',
    color: 'bg-purple-500'
  }
];

const packages: Package[] = [
  {
    id: '1',
    name: 'Basic Package',
    description: 'Essential services for intimate gatherings',
    price: 15000,
    currency: 'INR',
    features: ['Basic setup', 'Standard quality', '4 hours service'],
    inclusions: ['All basic materials', 'Setup and cleanup'],
    exclusions: ['Premium materials', 'Extended hours'],
    deliveryTime: '2-3 days',
    isPopular: false
  },
  {
    id: '2',
    name: 'Premium Package',
    description: 'Enhanced services for special occasions',
    price: 35000,
    currency: 'INR',
    features: ['Premium setup', 'High quality materials', '6 hours service'],
    inclusions: ['Premium materials', 'Setup and cleanup', 'Basic customization'],
    exclusions: ['Full customization', 'Extended hours'],
    deliveryTime: '3-4 days',
    isPopular: true
  },
  {
    id: '3',
    name: 'Luxury Package',
    description: 'Ultimate experience for grand celebrations',
    price: 75000,
    currency: 'INR',
    features: ['Luxury setup', 'Premium quality', '8 hours service'],
    inclusions: ['Luxury materials', 'Full customization', 'Setup and cleanup'],
    exclusions: ['None'],
    deliveryTime: '5-7 days',
    isPopular: false
  }
];

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Royal Wedding Decoration',
    description: 'Elegant floral arrangements for a grand wedding celebration',
    imageUrl: '/images/portfolio/wedding-1.jpg',
    category: 'Wedding',
    tags: ['Floral', 'Luxury', 'Traditional'],
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Corporate Event Setup',
    description: 'Professional setup for corporate events and conferences',
    imageUrl: '/images/portfolio/corporate-1.jpg',
    category: 'Corporate',
    tags: ['Professional', 'Modern', 'Clean'],
    createdAt: '2024-01-10'
  },
  {
    id: '3',
    title: 'Birthday Party Theme',
    description: 'Colorful and fun decorations for birthday celebrations',
    imageUrl: '/images/portfolio/birthday-1.jpg',
    category: 'Birthday',
    tags: ['Colorful', 'Fun', 'Themed'],
    createdAt: '2024-01-05'
  }
];

const timeSlots: TimeSlot[] = [
  { id: '1', startTime: '09:00', endTime: '12:00', isAvailable: true, price: 5000 },
  { id: '2', startTime: '12:00', endTime: '15:00', isAvailable: true, price: 5000 },
  { id: '3', startTime: '15:00', endTime: '18:00', isAvailable: true, price: 5000 },
  { id: '4', startTime: '18:00', endTime: '21:00', isAvailable: false, price: 6000 }
];

const availability: Availability[] = [
  {
    id: '1',
    date: '2024-12-25',
    timeSlots,
    isBlocked: false
  },
  {
    id: '2',
    date: '2024-12-26',
    timeSlots,
    isBlocked: false
  },
  {
    id: '3',
    date: '2024-12-27',
    timeSlots,
    isBlocked: true,
    reason: 'Personal holiday'
  }
];

export const vendors: Vendor[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    email: 'priya@royaldecors.com',
    phone: '+91-98765-43210',
    avatar: '/images/avatars/priya.jpg',
    role: 'vendor',
    createdAt: '2023-01-15',
    updatedAt: '2024-01-15',
    businessName: 'Royal Decors & Events',
    businessType: 'company',
    category: 'Decoration',
    subcategories: ['Floral', 'Balloon', 'Lighting', 'Theme-based'],
    description: 'Leading decoration company with 15+ years of experience in creating magical moments. Specializing in weddings, corporate events, and celebrations.',
    startingPrice: 15000,
    city: 'Mumbai',
    serviceAreas: ['Mumbai', 'Thane', 'Navi Mumbai', 'Pune'],
    verified: true,
    topRated: true,
    new: false,
    rating: 4.8,
    totalReviews: 127,
    portfolio: portfolioItems,
    packages,
    availability,
    badges: [badges[0], badges[1], badges[3]],
    kycStatus: 'verified',
    subscription: 'premium'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    email: 'rajesh@tasteofindia.com',
    phone: '+91-98765-43211',
    avatar: '/images/avatars/rajesh.jpg',
    role: 'vendor',
    createdAt: '2022-06-20',
    updatedAt: '2024-01-10',
    businessName: 'Taste of India Catering',
    businessType: 'company',
    category: 'Catering',
    subcategories: ['North Indian', 'South Indian', 'Continental', 'Chinese'],
    description: 'Premium catering services with authentic Indian flavors. From traditional weddings to modern corporate events, we deliver excellence on every plate.',
    startingPrice: 25000,
    city: 'Delhi',
    serviceAreas: ['Delhi', 'Noida', 'Gurgaon', 'Faridabad'],
    verified: true,
    topRated: true,
    new: false,
    rating: 4.9,
    totalReviews: 89,
    portfolio: portfolioItems,
    packages,
    availability,
    badges: [badges[0], badges[1], badges[3]],
    kycStatus: 'verified',
    subscription: 'premium'
  },
  {
    id: '3',
    name: 'Anjali Patel',
    email: 'anjali@capturemoments.com',
    phone: '+91-98765-43212',
    avatar: '/images/avatars/anjali.jpg',
    role: 'vendor',
    createdAt: '2023-03-10',
    updatedAt: '2024-01-12',
    businessName: 'Capture Moments Photography',
    businessType: 'individual',
    category: 'Photography',
    subcategories: ['Wedding', 'Portrait', 'Event', 'Cinematography'],
    description: 'Passionate photographer capturing life\'s precious moments. Specializing in wedding photography with a creative and artistic approach.',
    startingPrice: 35000,
    city: 'Bengaluru',
    serviceAreas: ['Bengaluru', 'Mysuru', 'Mandya'],
    verified: true,
    topRated: false,
    new: false,
    rating: 4.6,
    totalReviews: 45,
    portfolio: portfolioItems,
    packages,
    availability,
    badges: [badges[0]],
    kycStatus: 'verified',
    subscription: 'free'
  },
  {
    id: '4',
    name: 'Suresh Reddy',
    email: 'suresh@melodymakers.com',
    phone: '+91-98765-43213',
    avatar: '/images/avatars/suresh.jpg',
    role: 'vendor',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15',
    businessName: 'Melody Makers Band',
    businessType: 'company',
    category: 'Music & Entertainment',
    subcategories: ['Live Band', 'Classical', 'Folk', 'Fusion'],
    description: 'Talented musicians creating magical atmospheres with live music. From traditional classical to modern fusion, we make every event memorable.',
    startingPrice: 20000,
    city: 'Hyderabad',
    serviceAreas: ['Hyderabad', 'Secunderabad', 'Warangal'],
    verified: false,
    topRated: false,
    new: true,
    rating: 4.2,
    totalReviews: 12,
    portfolio: portfolioItems,
    packages,
    availability,
    badges: [badges[2]],
    kycStatus: 'pending',
    subscription: 'free'
  },
  {
    id: '5',
    name: 'Meera Singh',
    email: 'meera@beautystudio.com',
    phone: '+91-98765-43214',
    avatar: '/images/avatars/meera.jpg',
    role: 'vendor',
    createdAt: '2022-12-15',
    updatedAt: '2024-01-08',
    businessName: 'Beauty Studio by Meera',
    businessType: 'individual',
    category: 'Makeup & Styling',
    subcategories: ['Bridal', 'Party', 'Hair Styling', 'Mehendi'],
    description: 'Professional makeup artist and hairstylist with expertise in bridal makeup and party looks. Creating beauty that lasts all day.',
    startingPrice: 12000,
    city: 'Chennai',
    serviceAreas: ['Chennai', 'Chengalpattu', 'Kanchipuram'],
    verified: true,
    topRated: false,
    new: false,
    rating: 4.7,
    totalReviews: 67,
    portfolio: portfolioItems,
    packages,
    availability,
    badges: [badges[0]],
    kycStatus: 'verified',
    subscription: 'free'
  },
  {
    id: '6',
    name: 'Vikram Malhotra',
    email: 'vikram@luxuryvenues.com',
    phone: '+91-98765-43215',
    avatar: '/images/avatars/vikram.jpg',
    role: 'vendor',
    createdAt: '2021-08-20',
    updatedAt: '2024-01-05',
    businessName: 'Luxury Venues & Resorts',
    businessType: 'company',
    category: 'Venues',
    subcategories: ['Hotels', 'Resorts', 'Banquet Halls', 'Lawns'],
    description: 'Premium venues for all types of events. From intimate gatherings to grand celebrations, we provide the perfect setting.',
    startingPrice: 50000,
    city: 'Jaipur',
    serviceAreas: ['Jaipur', 'Ajmer', 'Tonk'],
    verified: true,
    topRated: true,
    new: false,
    rating: 4.9,
    totalReviews: 156,
    portfolio: portfolioItems,
    packages,
    availability,
    badges: [badges[0], badges[1], badges[3]],
    kycStatus: 'verified',
    subscription: 'enterprise'
  }
];
