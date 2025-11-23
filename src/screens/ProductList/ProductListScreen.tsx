import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/globalStyles'
import PageHeaderSection from '../../components/PageHeader/PageHeaderSection'

export default function ProductListScreen() {
  return (
    <ScrollView>
      <PageHeaderSection
        title='Dynamic list page' 
        hasSecondaryAction={false}
      />
    </ScrollView>
  )
}