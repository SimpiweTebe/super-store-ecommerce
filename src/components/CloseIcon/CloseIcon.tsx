import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../constants/branding'

export default function CloseIcon() {
  return (
    <View style={styles.container}>
      <Text>&times;</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderColor: colors.lightGrey,
    borderWidth: 2
  }
})