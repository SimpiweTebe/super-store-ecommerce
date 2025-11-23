import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import globalStyles from '../../styles/globalStyles'
import PageHeaderSection from '../../components/PageHeader/PageHeaderSection'

export default function UserSettingsScreen() {
  return (
    <ScrollView>
      <PageHeaderSection
        title='User Settings' 
        hasSecondaryAction={false}
      />
    </ScrollView>
  )
}