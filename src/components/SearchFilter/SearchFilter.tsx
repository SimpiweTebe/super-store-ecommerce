import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import globalStyles from '../../styles/globalStyles'

export default function SearchFilter() {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text>icon</Text>
        <TextInput placeholder='Explore Fashion'/>
      </View>
      <View style={[globalStyles.roundButton, styles.button]} />
    </View>
  )
}