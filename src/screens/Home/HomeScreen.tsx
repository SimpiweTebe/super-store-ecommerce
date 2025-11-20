import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import UserHeader from '../../components/UserHeader/UserHeader'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import Routes from '../../navigation/Routes'

export default function HomeScreen({ navigation }) {
  const handleCheckOut = ()=> navigation.navigate(Routes.Cart)
  return (
    <ScrollView>
      <UserHeader handleCheckOut={handleCheckOut} />
      <SearchFilter />
    </ScrollView>
  )
}