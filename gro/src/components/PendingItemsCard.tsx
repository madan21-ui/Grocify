import { View, Text } from 'react-native'
import React from 'react'
import { GroceryItem, useGroceryStore } from '@/store/grocery-store'


const priorityPillBg = {
  low: "bg-priority-low",
  medium: "bg-priority-medium",
  high: "bg-priority-high",
};

const priorityPillText = {
  low: "text-priority-low-foreground",
  medium: "text-priority-medium-foreground",
  high: "text-priority-high-foreground",
};



const PendingItemsCard = ({item}:{item:GroceryItem}) => {
    const {removeItem,updateQuantity, togglepurchased} = useGroceryStore();

    
  return (
    <View className="rounded-3xl border border-border bg-card p-4">
    </View>
  )
}

export default PendingItemsCard