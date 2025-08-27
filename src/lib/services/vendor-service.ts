import { Vendor, SearchFilters, SearchResult } from '@/types';
import { vendors } from '@/data/vendors';

export class VendorService {
  static async getVendors(filters?: SearchFilters): Promise<SearchResult> {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    
    let filteredVendors = [...vendors];
    
    if (filters) {
      if (filters.city) {
        filteredVendors = filteredVendors.filter(v => 
          v.city.toLowerCase().includes(filters.city!.toLowerCase())
        );
      }
      
      if (filters.category) {
        filteredVendors = filteredVendors.filter(v => 
          v.category.toLowerCase() === filters.category!.toLowerCase()
        );
      }
      
      if (filters.budgetMin !== undefined) {
        filteredVendors = filteredVendors.filter(v => 
          v.startingPrice >= filters.budgetMin!
        );
      }
      
      if (filters.budgetMax !== undefined) {
        filteredVendors = filteredVendors.filter(v => 
          v.startingPrice <= filters.budgetMax!
        );
      }
      
      if (filters.rating !== undefined) {
        filteredVendors = filteredVendors.filter(v => 
          v.rating >= filters.rating!
        );
      }
      
      if (filters.verified !== undefined) {
        filteredVendors = filteredVendors.filter(v => 
          v.verified === filters.verified
        );
      }
      
      if (filters.topRated !== undefined) {
        filteredVendors = filteredVendors.filter(v => 
          v.topRated === filters.topRated
        );
      }
      
      if (filters.new !== undefined) {
        filteredVendors = filteredVendors.filter(v => 
          v.new === filters.new
        );
      }
      
      if (filters.query) {
        const query = filters.query.toLowerCase();
        filteredVendors = filteredVendors.filter(v =>
          v.businessName.toLowerCase().includes(query) ||
          v.description.toLowerCase().includes(query) ||
          v.category.toLowerCase().includes(query) ||
          v.subcategories.some(sub => sub.toLowerCase().includes(query))
        );
      }
    }
    
    // Simulate pagination
    const hasMore = filteredVendors.length > 10;
    const paginatedVendors = filteredVendors.slice(0, 10);
    
    return {
      vendors: paginatedVendors,
      venues: [],
      totalResults: filteredVendors.length,
      hasMore
    };
  }
  
  static async getVendorById(id: string): Promise<Vendor | null> {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500));
    
    const vendor = vendors.find(v => v.id === id);
    return vendor || null;
  }
  
  static async getVendorsByCategory(category: string): Promise<Vendor[]> {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 600));
    
    return vendors.filter(v => 
      v.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  static async getVendorsByCity(city: string): Promise<Vendor[]> {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 600));
    
    return vendors.filter(v => 
      v.city.toLowerCase().includes(city.toLowerCase())
    );
  }
  
  static async getPopularVendors(): Promise<Vendor[]> {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 200 + Math.random() * 300));
    
    return vendors
      .filter(v => v.topRated || v.verified)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);
  }
  
  static async getNewVendors(): Promise<Vendor[]> {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 200 + Math.random() * 300));
    
    return vendors
      .filter(v => v.new)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 4);
  }
}
