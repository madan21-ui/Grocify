import { View, Text } from 'react-native'
import React from 'react'
import { GroceryItem, useGroceryStore } from '@/store/grocery-store'

const PendingItemsCard = ({item}:{item:GroceryItem}) => {
    const {removeItem,updateQuantity, togglepurchased} = useGroceryStore();
  return (
    <View>
      <Text>PendingItemsCard</Text>
    </View>
  )
}

export default PendingItemsCard