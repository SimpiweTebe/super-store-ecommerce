import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

type ButtonProps = {
  title: string
  onPress: ()=> void
  icon?: any
}

export default function Button(props: ButtonProps) {
  return (
    <Pressable onPress={props.onPress}>
      {
        props.icon && (props.icon)
      }
      <Text>{props.title}</Text>
    </Pressable>
  )
}