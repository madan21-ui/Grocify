import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { useAuth } from '@clerk/expo'

const SSOCallBackScreen = () => {
  const { isSignedIn, isLoaded } = useAuth()
  
    if (!isLoaded) {
      return null
    }
  
    if (isSignedIn) {
      return <Redirect href={'/'} />
    }

    return <Redirect href={'/(auth)/sign-in'} />
}

export default SSOCallBackScreen