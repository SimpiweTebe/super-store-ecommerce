import { View, Text } from 'react-native'
import React from 'react'
import RoundButtonIcon from '../Button/RoundButtonIcon'
import { ArrowLeft } from 'lucide-react-native';
import { ShoppingBag, Heart } from 'lucide-react-native';
import styles from './styles'
import globalStyles from '../../styles/globalStyles';

type Props = {
  title: string
  isCartAction?: boolean
  navigation: any
}

export default function PageHeaderSection({ title, navigation, isCartAction = false}: Props) {
  return (
    <View style={styles.container}>
      <RoundButtonIcon Icon={ArrowLeft} onPress={()=> navigation.goBack()}/>
      <Text style={globalStyles.Heading1}>{title}</Text>
      {
        isCartAction ? <RoundButtonIcon Icon={ShoppingBag} onPress={()=> navigation.goBack()}/> 
        : <RoundButtonIcon Icon={Heart} onPress={()=> navigation.goBack()}/>
      }
    </View>
  )
}