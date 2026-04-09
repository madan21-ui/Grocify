import { AuthView } from '@clerk/expo/native'
import { useAuth } from '@clerk/expo'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { View , Text } from 'react-native';
import useSocialAuth from '@/hooks/useSocialAuth';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignInScreen() {
 const { handleSocialAuth , loadingStrategy } = useSocialAuth();

 return(
  <SafeAreaView className="flex-1 bg-red-500 items-center justify-center">
    <Text>
      Hello
    </Text>
  </SafeAreaView>
 );

}