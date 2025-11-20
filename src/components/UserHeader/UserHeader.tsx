import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import globalStyles from '../../styles/globalStyles'

type Props = {
  handleCheckOut: ()=> void
}

const UserHeader = ({ handleCheckOut }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.userActions}>
        <Image source={{ uri: 'https://placehold.co/60x60/png'}} style={styles.userImage}/>
        <Text style={globalStyles.textMedium}>Hey, User</Text>
      </Pressable>
      <Pressable style={styles.cartActions} onPress={handleCheckOut}>
        <Image source={{ uri: 'https://placehold.co/60x60/png'}} style={styles.userImage}/>
      </Pressable>
    </View>
  )
}

export default UserHeader