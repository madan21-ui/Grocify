import { TabScreenBackground } from '@/components/TabScreenBackground';
import { useGroceryStore } from '@/store/grocery-store';
import { Text, View,  ScrollView, FlatList } from 'react-native'
import ListHeroCard from '@/components/list/ListHeroCard';
import PendingItemCard from '@/components/PendingItemsCard';
import CompletedItems from '@/components/list/CompletedItems ';

export default function ListScreen() {

  const { items } = useGroceryStore();
  const pendingItems = items.filter((item) => !item.purchased);
  



  return (
    < ScrollView className='flex-1 bg-background py-4 '
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ gap: 14}}
    >
     <TabScreenBackground />
     <ListHeroCard/>

     <View className="flex-row items-center justify-between px-1">
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
          Shopping items
        </Text>
        <Text className="text-sm text-muted-foreground">{pendingItems.length} active</Text>
      </View>

      <FlatList
      data={pendingItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PendingItemCard item={item} />}
      contentContainerStyle={{ padding: 20 , gap: 14}}
      />
     

      <CompletedItems/>
    </ScrollView>
  );
}


//Previous version with pendingItem.map

/*

export default function ListScreen() {

  const { items } = useGroceryStore();
  const pendingItems = items.filter((item) => !item.purchased);
  



  return (
    < ScrollView className='flex-1 bg-background py-4 '
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 20 , gap: 14}}
    >
     <TabScreenBackground />
     <ListHeroCard/>
     <View className="flex-row items-center justify-between px-1">
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
          Shopping items
        </Text>
        <Text className="text-sm text-muted-foreground">{pendingItems.length} active</Text>
      </View>

      {pendingItems.map((item) => (
        <PendingItemCard key={item.id} item={item} />
      ))}

      <CompletedItems/>
    </ScrollView>
  );
}

*/