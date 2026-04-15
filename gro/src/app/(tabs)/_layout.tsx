import { useGroceryStore } from '@/store/grocery-store';
import { useAuth } from '@clerk/expo'
import { Redirect, Stack } from 'expo-router'
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from "nativewind";
import { useEffect } from 'react';

export default function TabsLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  const {loadItems,items} = useGroceryStore();
  
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const tabTinColor = isDark ? "hsl(142 70% 54%)" : "hsl(147 75% 33%)";
  
  useEffect(() => {
    loadItems();
  }, []);

  console.log("ITEMS: ",items);

  if (!isLoaded) {
    return null
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />
  }

  return <NativeTabs tintColor={tabTinColor}>
    <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="list.bullet.clipboard" md="list" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="planner">
        <NativeTabs.Trigger.Icon sf="plus.circle" md="add"  /> //md for android and sf for ios
        <NativeTabs.Trigger.Label>Planner</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="insight">
        <NativeTabs.Trigger.Icon sf="chart.bar" 
        md="analytics"/> //md for android and sf for ios
        <NativeTabs.Trigger.Label>Insights</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
  </NativeTabs>
}