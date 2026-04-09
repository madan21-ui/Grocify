import { AuthView } from '@clerk/expo/native'
import { useAuth } from '@clerk/expo'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'

export default function SignInScreen() {
 const {handleSocialAuth , LoadingStrategy} = useSocialAuth()

  return <AuthView mode="signInOrUp" />
}