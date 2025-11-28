import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PageHeaderSection from '../PageHeader/PageHeaderSection'

export default function NoContent({ title }: { title: string}) {
  return (
    <>
    <PageHeaderSection title='My Cart' hasSecondaryAction={false}/>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 500
  }
})