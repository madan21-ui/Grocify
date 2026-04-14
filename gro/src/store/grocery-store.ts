

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
    

}


export const useGroceryStore = create<GroceryStore>((set , get) => ({
    posts:["first post", "second post"],
    isLoading: true,

}));