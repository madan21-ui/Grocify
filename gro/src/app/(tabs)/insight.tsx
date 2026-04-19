import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { TabScreenBackground } from '@/components/TabScreenBackground'
import UserProfile from '@/components/insight/userProfile';
import { useClerk, useUser } from '@clerk/expo';

const insightScreen = () => {
  return (
    <ScrollView className='flex-1 bg-background py-4'
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 20 , gap: 14 }}
    contentInsetAdjustmentBehavior='automatic'
    >

     <TabScreenBackground/>

     <UserProfile />

    </ScrollView>
  );
};

export default insightScreen