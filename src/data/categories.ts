import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Catering',
    slug: 'catering',
    description: 'Delicious food and beverage services for your special occasions',
    icon: '🍽️',
    imageUrl: '/images/categories/catering.jpg',
    subcategories: ['North Indian', 'South Indian', 'Continental', 'Chinese', 'Street Food', 'Desserts'],
    popular: true
  },
  {
    id: '2',
    name: 'Decoration',
    slug: 'decoration',
    description: 'Beautiful floral arrangements and venue decoration services',
    icon: '🌸',
    imageUrl: '/images/categories/decoration.jpg',
    subcategories: ['Floral', 'Balloon', 'Lighting', 'Fabric', 'Theme-based', 'Mandap'],
    popular: true
  },
  {
    id: '3',
    name: 'Photography',
    slug: 'photography',
    description: 'Professional photography and videography to capture your memories',
    icon: '📸',
    imageUrl: '/images/categories/photography.jpg',
    subcategories: ['Wedding', 'Portrait', 'Event', 'Cinematography', 'Drone', 'Photo Booth'],
    popular: true
  },
  {
    id: '4',
    name: 'Makeup & Styling',
    slug: 'makeup-styling',
    description: 'Professional makeup artists and hairstylists for your special day',
    icon: '💄',
    imageUrl: '/images/categories/makeup.jpg',
    subcategories: ['Bridal', 'Party', 'Hair Styling', 'Mehendi', 'Nail Art', 'Costume'],
    popular: true
  },
  {
    id: '5',
    name: 'Music & Entertainment',
    slug: 'music-entertainment',
    description: 'Live music, DJs, and entertainment to make your event memorable',
    icon: '🎵',
    imageUrl: '/images/categories/music.jpg',
    subcategories: ['DJ', 'Live Band', 'Classical', 'Folk', 'Dance', 'Comedy'],
    popular: true
  },
  {
    id: '6',
    name: 'Venues',
    slug: 'venues',
    description: 'Beautiful venues and locations for your special occasions',
    icon: '🏛️',
    imageUrl: '/images/categories/venues.jpg',
    subcategories: ['Banquet Halls', 'Hotels', 'Lawns', 'Resorts', 'Community Halls', 'Farmhouses'],
    popular: true
  },
  {
    id: '7',
    name: 'Transportation',
    slug: 'transportation',
    description: 'Luxury vehicles and transportation services for your event',
    icon: '🚗',
    imageUrl: '/images/categories/transportation.jpg',
    subcategories: ['Wedding Cars', 'Buses', 'Limos', 'Bikes', 'Helicopter', 'Boats'],
    popular: false
  },
  {
    id: '8',
    name: 'Invitations',
    slug: 'invitations',
    description: 'Beautiful and personalized invitation cards for your events',
    icon: '✉️',
    imageUrl: '/images/categories/invitations.jpg',
    subcategories: ['Wedding Cards', 'Digital', 'Traditional', 'Modern', 'Eco-friendly', 'Luxury'],
    popular: false
  },
  {
    id: '9',
    name: 'Mehendi & Art',
    slug: 'mehendi-art',
    description: 'Traditional mehendi artists and body art services',
    icon: '🖌️',
    imageUrl: '/images/categories/mehendi.jpg',
    subcategories: ['Bridal Mehendi', 'Party Mehendi', 'Tattoo', 'Face Painting', 'Nail Art', 'Body Art'],
    popular: false
  },
  {
    id: '10',
    name: 'Pandit & Priest',
    slug: 'pandit-priest',
    description: 'Religious ceremonies and puja services for traditional events',
    icon: '🕉️',
    imageUrl: '/images/categories/pandit.jpg',
    subcategories: ['Wedding Ceremonies', 'Griha Pravesh', 'Naming Ceremony', 'Annaprashan', 'Mundan', 'Other Pujas'],
    popular: false
  },
  {
    id: '11',
    name: 'Logistics',
    slug: 'logistics',
    description: 'Event planning, coordination, and logistics management services',
    icon: '📋',
    imageUrl: '/images/categories/logistics.jpg',
    subcategories: ['Event Planning', 'Coordination', 'Setup', 'Cleanup', 'Security', 'Parking'],
    popular: false
  },
  {
    id: '12',
    name: 'Cleaning Services',
    slug: 'cleaning-services',
    description: 'Professional cleaning and maintenance services for venues',
    icon: '🧹',
    imageUrl: '/images/categories/cleaning.jpg',
    subcategories: ['Pre-event', 'Post-event', 'Deep Cleaning', 'Carpet Cleaning', 'Window Cleaning', 'Sanitization'],
    popular: false
  }
];
