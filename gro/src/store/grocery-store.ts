

import { create } from 'zustand';


export type GroceryCategory = "fruits" | "vegetables" | "dairy" | "meat" | "bakery" | "beverages" | "snacks" | "household";
export type GroceryPriority = "low" | "medium" | "high";
export type GroceryItem = {
    id: string;
    name: string;
    quantity: number;
    category: GroceryCategory;
    priority: GroceryPriority;
    purchased: boolean;
    
};

export type CreateItemInput = {
    name: string;
    quantity: number;
    category: GroceryCategory;
    priority: GroceryPriority;

}

type ItemsResponse = {
    items: GroceryItem[];
};
type ItemResponse = {
    item: GroceryItem;
};

type GroceryStore = {
    items: GroceryItem[];
    isLoading: boolean;
    error: string | null,
    loadItems: () => Promise<void>;
    addItem: (input: CreateItemInput) => Promise<GroceryItem | void>;
    updateQuantity: ( id: string, quantity: number) => Promise<GroceryItem | void>;
    togglepurchased: (id: string) => Promise<void>;
    removeItem: (id: string) => Promise<void>;  
    clearPurchased: () => Promise<void>;
}


export const useGroceryStore = create<GroceryStore>((set , get) => ({
    items: [], 
    isLoading: false,
    error: null,
    loadItems: async () => {
           set({ isLoading: true, error: null });
        try {
            const res = await fetch('/api/items');
            const payload = (await res.json()) as ItemsResponse;
            if(!res.ok) throw new Error(`Request failed ( ${res.status}) `);
            set({ items: payload.items });
        }catch (error) {
            const message = error instanceof Error ? error.message : "Failed to load items";
            set({ error: "Something went wrong" });
        } finally {
            set({ isLoading: false });
        }
    },
    addItem: async (input) => {},
    updateQuantity: async (id, quantity) => {},
    togglepurchased: async (id) => {},
    removeItem: async (id) => {},
    clearPurchased: async () => {}
}));