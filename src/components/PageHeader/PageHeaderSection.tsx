import { View, Text } from 'react-native'
import React from 'react'
import RoundButtonIcon from '../Button/RoundButtonIcon'
import { ArrowLeft } from 'lucide-react-native';
import { ShoppingBag } from 'lucide-react-native';
import styles from './styles'
import globalStyles from '../../styles/globalStyles';

type Props = {
  title: string
  hasCartButton: boolean
  navigation: any
}

export default function PageHeaderSection({ title, navigation, hasCartButton}: Props) {
  return (
    <View style={styles.container}>
      <RoundButtonIcon Icon={ArrowLeft} onPress={()=> navigation.goBack()}/>
      <Text style={globalStyles.Heading1}>{title}</Text>
      {
        hasCartButton ? <RoundButtonIcon Icon={ShoppingBag} onPress={()=> navigation.goBack()}/> 
        : <RoundButtonIcon Icon={ArrowLeft} onPress={()=> navigation.goBack()}/>
      }
    </View>
  )
}