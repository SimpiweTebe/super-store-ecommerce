import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { ShoppingBag, ChevronDown } from 'lucide-react-native';
import styles from './styles'
import globalStyles from '../../styles/globalStyles'
import RoundButtonIcon from '../Button/RoundButtonIcon';

type Props = {
  handleCheckOut: ()=> void
}

const UserHeader = ({ handleCheckOut }: Props) => {

  return (
    <View style={styles.container}>
      <Pressable style={styles.userActions}>
        <Image source={{ uri: 'https://placehold.co/60x60/png'}} style={styles.userImage}/>
        <Text style={globalStyles.textMedium}>Hey, User</Text>
        <ChevronDown size={14}/>
      </Pressable>
      <RoundButtonIcon Icon={ShoppingBag} onPress={handleCheckOut}/>
    </View>
  )
}

export default UserHeader