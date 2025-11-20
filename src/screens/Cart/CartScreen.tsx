import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ShoppingBag } from 'lucide-react-native';
import PageHeaderSection from '../../components/PageHeader/PageHeaderSection'

export default function CartScreen({ navigation }) {

  return (
    <ScrollView>
      <PageHeaderSection
        title='My Cart' 
        navigation={navigation}
        hasCartButton
      />
    </ScrollView>
  )
}