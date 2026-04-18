import { View, Text , ScrollView } from 'react-native'
import React from 'react'
import { useGroceryStore } from '@/store/grocery-store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabScreenBackground } from '@/components/TabScreenBackground';

const plannerScreen = () => {

  const {items} = useGroceryStore();
  const pendingCount = items.filter((item) => !item.purchased).length;
  const highPriorityCount = items.filter(
    (items ) => !items.purchased && items.priority === "high").length;

    const totalCount = items.filter((item) => !item.purchased)
    .reduce((sum, item) => sum + item.quantity, 0);
  return (
    <ScrollView className='flex-1 bg-background py-4'
    contentInsetAdjustmentBehavior="always"
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 20 , gap: 14}}
    >
     <TabScreenBackground/>

     <View className='gap-4 rounded-3x1 border border-border bg-card/70 p-5'>
     <View className='flex-row items-start justify-between'>
      
      
      <View className="flex-1 pr-4">
            <Text className="text-xs font-semibold uppercase tracking-[1.2px] text-muted-foreground">
              Grocery planner
            </Text>
            <Text className="mt-1 text-3xl font-bold leading-9 text-foreground">
              Plan smarter, shop calmer.
            </Text>
            <Text className="mt-2 text-sm leading-5 text-muted-foreground">
              Organize your next grocery run with categories, quantities, and priority in one place.
            </Text>
        </View>

        
     </View>
     </View>
    </ScrollView>
  )
}

export default plannerScreen