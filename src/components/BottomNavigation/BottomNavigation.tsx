import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Heart, House, CircleUserRound, ShoppingBag } from 'lucide-react-native';
import RoundButtonIcon from '../Button/RoundButtonIcon'
import Routes from '../../navigation/Routes';
import styles from './styles'
import { colors } from '../../constants/branding';
import { useNavigation } from '@react-navigation/native';

export default function BottomNavigation() {
  const navigation = useNavigation<any>()
  const [isActive, setIsActive] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.linkItem}>
        <RoundButtonIcon Icon={House} onPress={()=> navigation.navigate(Routes.Home)} />
        {
          isActive && <Text style={styles.linkText}>Home</Text>
        }
      </View>
      <View style={styles.linkItem}>
        <RoundButtonIcon Icon={ShoppingBag} onPress={()=> navigation.navigate(Routes.Cart)} />
        {
          isActive && <Text style={styles.linkText}>Home</Text>
        }
      </View>
      <View style={styles.linkItem}>
        <RoundButtonIcon Icon={Heart} onPress={()=> navigation.navigate(Routes.ProductList)} />
        {
          isActive && <Text style={styles.linkText}>Home</Text>
        }
      </View>
      <View style={styles.linkItem}>
        <RoundButtonIcon Icon={CircleUserRound} onPress={()=> navigation.navigate(Routes.UserSettings)} />
        {
          isActive && <Text style={styles.linkText}>Home</Text>
        }
      </View>
    </View>
  )
}