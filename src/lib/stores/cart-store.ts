import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Vendor, PackageBuilderService } from '@/types';

interface CartState {
  shortlistedVendors: Vendor[];
  selectedServices: PackageBuilderService[];
  totalEstimatedCost: number;
}

interface CartActions {
  addToShortlist: (vendor: Vendor) => void;
  removeFromShortlist: (vendorId: string) => void;
  addService: (service: PackageBuilderService) => void;
  removeService: (serviceId: string) => void;
  updateServiceQuantity: (serviceId: string, quantity: number) => void;
  clearCart: () => void;
  calculateTotal: () => void;
}

export const useCartStore = create<CartState & CartActions>()(
  persist(
    (set, get) => ({
      shortlistedVendors: [],
      selectedServices: [],
      totalEstimatedCost: 0,

      addToShortlist: (vendor: Vendor) => {
        const { shortlistedVendors } = get();
        if (!shortlistedVendors.find(v => v.id === vendor.id)) {
          set({
            shortlistedVendors: [...shortlistedVendors, vendor]
          });
        }
      },

      removeFromShortlist: (vendorId: string) => {
        const { shortlistedVendors, selectedServices } = get();
        set({
          shortlistedVendors: shortlistedVendors.filter(v => v.id !== vendorId),
          selectedServices: selectedServices.filter(s => s.vendorId !== vendorId)
        });
        get().calculateTotal();
      },

      addService: (service: PackageBuilderService) => {
        const { selectedServices } = get();
        const existingService = selectedServices.find(s => s.id === service.id);
        
        if (existingService) {
          set({
            selectedServices: selectedServices.map(s =>
              s.id === service.id
                ? { ...s, quantity: s.quantity + 1, totalPrice: s.price * (s.quantity + 1) }
                : s
            )
          });
        } else {
          set({
            selectedServices: [...selectedServices, service]
          });
        }
        get().calculateTotal();
      },

      removeService: (serviceId: string) => {
        const { selectedServices } = get();
        set({
          selectedServices: selectedServices.filter(s => s.id !== serviceId)
        });
        get().calculateTotal();
      },

      updateServiceQuantity: (serviceId: string, quantity: number) => {
        const { selectedServices } = get();
        if (quantity <= 0) {
          get().removeService(serviceId);
          return;
        }
        
        set({
          selectedServices: selectedServices.map(s =>
            s.id === serviceId
              ? { ...s, quantity, totalPrice: s.price * quantity }
              : s
          )
        });
        get().calculateTotal();
      },

      clearCart: () => {
        set({
          shortlistedVendors: [],
          selectedServices: [],
          totalEstimatedCost: 0
        });
      },

      calculateTotal: () => {
        const { selectedServices } = get();
        const total = selectedServices.reduce((sum, service) => sum + service.totalPrice, 0);
        set({ totalEstimatedCost: total });
      }
    }),
    {
      name: 'eventops-cart',
      partialize: (state) => ({
        shortlistedVendors: state.shortlistedVendors,
        selectedServices: state.selectedServices,
        totalEstimatedCost: state.totalEstimatedCost
      })
    }
  )
);
