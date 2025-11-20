import { View, TextInput, Pressable } from 'react-native'
import React, { useRef } from 'react'
import styles from './styles'
import RoundButtonIcon from '../Button/RoundButtonIcon'
import { SlidersVertical, Search } from 'lucide-react-native';
import { colors } from '../../constants/branding'

export default function SearchFilter() {
  const inputRef = useRef<any>(null)

  return (
    <View style={styles.container}>
      <Pressable style={styles.input} onPress={()=> inputRef.current.focus()}>
        <Search />
        <TextInput placeholder='Explore Fashion' ref={inputRef}/>
      </Pressable>
      <RoundButtonIcon Icon={SlidersVertical} onPress={()=> {}} backgroundColor={colors.actionGreen}/>
    </View>
  )
}