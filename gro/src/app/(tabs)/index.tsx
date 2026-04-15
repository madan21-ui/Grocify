import { TabScreenBackground } from '@/components/TabScreenBackground';
import { useGroceryStore } from '@/store/grocery-store';
import { Show, useUser } from '@clerk/expo'
import { useClerk } from '@clerk/expo'
import { Link } from 'expo-router'
import { Text, View, Pressable, StyleSheet, ScrollView } from 'react-native'

export default function ListScreen() {
  return (
    < ScrollView className='flex-1 bg-background py-4 '
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 20 , gap: 14}}
    >
     <TabScreenBackground />
    </ScrollView>
  );
}