import { Text, Pressable } from 'react-native'
import React from 'react'
import { Sparkles } from 'lucide-react-native';

import styles from './styles'
import { colors } from '../../constants/branding';

type ButtonProps = {
  title: string
  onPress: ()=> void
  isActive?: boolean
}

export default function Button(props: ButtonProps) {
  return (
    <Pressable onPress={props.onPress} style={[styles.button, styles.buttonWide, props.isActive && styles.activeButton]}>
      {
        props.isActive && <Sparkles size={14} fill={colors.actionGreen} />
      }
      <Text style={[styles.text, props.isActive && styles.activeText]}>{props.title}</Text>
    </Pressable>
  )
}