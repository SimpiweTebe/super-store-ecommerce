import { View, Text } from 'react-native'
import React from 'react'
import RoundButtonIcon from '../Button/RoundButtonIcon'
import { ArrowLeft } from 'lucide-react-native';
import { ShoppingBag, Heart } from 'lucide-react-native';
import styles from './styles'
import globalStyles from '../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string
  isCartAction?: boolean
  hasSecondaryAction?: boolean
}

export default function PageHeaderSection({ title, isCartAction = false, hasSecondaryAction = true }: Props) {
  const navigation = useNavigation<any>()
    
  return (
    <View style={styles.container}>
      <RoundButtonIcon Icon={ArrowLeft} onPress={()=> navigation.goBack()}/>
      <Text style={globalStyles.HeadingOne}>{title}</Text>
      
      { hasSecondaryAction && (
          isCartAction ? <RoundButtonIcon Icon={ShoppingBag} onPress={()=> navigation.goBack()}/> 
          : <RoundButtonIcon Icon={Heart} onPress={()=> navigation.goBack()}/> 
        )
      }
      {/* To preserve layout consistency and spacing we add this component but hide from UI */}
      {
        !hasSecondaryAction && <ShoppingBag color={'#fff'} />
      }
    </View>
  )
}