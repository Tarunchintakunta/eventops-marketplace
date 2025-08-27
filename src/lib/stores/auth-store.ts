import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Customer, Vendor } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  login: (email: string, password: string, role: 'customer' | 'vendor') => Promise<void>;
  register: (userData: Partial<User>) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
  clearError: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string, role: 'customer' | 'vendor') => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock user data based on role
          let mockUser: User;
          
          if (role === 'customer') {
            mockUser = {
              id: 'customer-1',
              name: 'Rahul Sharma',
              email,
              phone: '+91-98765-43210',
              role: 'customer',
              createdAt: '2024-01-01',
              updatedAt: '2024-01-15'
            } as Customer;
          } else {
            mockUser = {
              id: 'vendor-1',
              name: 'Priya Patel',
              email,
              phone: '+91-98765-43211',
              role: 'vendor',
              createdAt: '2024-01-01',
              updatedAt: '2024-01-15'
            } as Vendor;
          }
          
          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null
          });
        } catch {
          set({
            error: 'Login failed. Please try again.',
            isLoading: false
          });
        }
      },

      register: async (userData: Partial<User>) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const newUser: User = {
            id: `user-${Date.now()}`,
            name: userData.name || '',
            email: userData.email || '',
            phone: userData.phone || '',
            role: userData.role || 'customer',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          } as User;
          
          set({
            user: newUser,
            isAuthenticated: true,
            isLoading: false,
            error: null
          });
        } catch {
          set({
            error: 'Registration failed. Please try again.',
            isLoading: false
          });
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null
        });
      },

      setUser: (user: User) => {
        set({
          user,
          isAuthenticated: true,
          error: null
        });
      },

      clearError: () => {
        set({ error: null });
      },

      updateProfile: (updates: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: { ...currentUser, ...updates, updatedAt: new Date().toISOString() }
          });
        }
      }
    }),
    {
      name: 'eventops-auth',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      })
    }
  )
);
