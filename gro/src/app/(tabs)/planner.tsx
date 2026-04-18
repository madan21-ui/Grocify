import { View, Text , ScrollView } from 'react-native'
import React from 'react'
import { useGroceryStore } from '@/store/grocery-store';

const plannerScreen = () => {

  const {items} = useGroceryStore();
  const pendingCount = items.filter((item) => !item.purchased).length;
  const highPriorityCount = items.filter(
    (items ) => !items.purchased && items.priority === "high").length;

    const totalCount = items.filter((item) => !item.purchased)
    .reduce((sum, item) => sum + item.quantity, 0);
  return (
    <ScrollView className='flex-1 bg-background py-4'>
      <Text >plannerScreen</Text>
    </ScrollView>
  )
}

export default plannerScreen