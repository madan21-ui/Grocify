import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { GroceryItem, useGroceryStore } from '@/store/grocery-store'
import { FontAwesome6 } from '@expo/vector-icons';

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
      <View className='flex-row items-start gap-3'>
        <Pressable 
        className="mt-1 size-6 items-center justify-center rounded-full border-2 border-border bg-card " onPress={() => togglepurchased(item.id)}>
          <FontAwesome6 name="minus" size={12} color="#3b5a4a" />
        </Pressable>
      </View>
    </View>
  ) 
}

export default PendingItemsCard