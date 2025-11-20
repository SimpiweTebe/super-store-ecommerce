import { Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

type Props = {
  Icon: any
  onPress: ()=> void
  backgroundColor?: string
}

export default function RoundButtonIcon({ Icon, onPress, backgroundColor }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.button, backgroundColor && { backgroundColor }]}>
      <Icon size={18} />
    </Pressable>
  )
}