import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Heart } from 'lucide-react-native';
import RoundButtonIcon from '../Button/RoundButtonIcon'

import styles from './styles'
import globalStyles from '../../styles/globalStyles';
import Routes from '../../navigation/Routes';

type productItemTypes = {
  productItem: any
}


export default function ProductCard({productItem}: productItemTypes) {
  const navigation = useNavigation<any>()

  return (
    <View style={styles.card}>
      <Pressable style={styles.imageContainer} onPress={()=> navigation.navigate(Routes.ProductDetails)}>
        <View style={styles.likeButton}>
          <RoundButtonIcon Icon={Heart} onPress={()=> {}}/>
        </View>
        <Image source={{uri: 'https://images.pexels.com/photos/18247649/pexels-photo-18247649.jpeg'}}  style={styles.image}/>
      </Pressable>
      <View style={styles.cardDetails}>
        <Text style={styles.cardBrand}>T-Shirt man</Text>
        <Text style={globalStyles.Heading2}>Black Shirt</Text>
        <Text style={[globalStyles.Heading2, styles.cardPrice]}>R799</Text>
      </View>
    </View>
  )
}