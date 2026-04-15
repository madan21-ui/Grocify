import { View, Text } from 'react-native'
import React from 'react'
import { useGroceryStore } from '@/store/grocery-store';

const ListHeroCard = () => {

    const {items}= useGroceryStore();
    const completedCount = items.filter(item => item.purchased).length;
  return (
    <View>
      <Text>{completedCount} items completed</Text>
    </View>
  )
}

export default ListHeroCard