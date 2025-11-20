import { View, Text, Image } from 'react-native'
import React from 'react'
import { Heart } from 'lucide-react-native';
import RoundButtonIcon from '../Button/RoundButtonIcon'

import styles from './styles'
import globalStyles from '../../styles/globalStyles';

type productItemTypes = {
  productItem: any
  navigation: any
}


export default function ProductCard({productItem, navigation}: productItemTypes) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <View style={styles.likeButton}>
          <RoundButtonIcon Icon={Heart} onPress={()=> {}}/>
        </View>
        <Image source={{uri: 'https://images.pexels.com/photos/18247649/pexels-photo-18247649.jpeg'}}  style={styles.image}/>
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardBrand}>T-Shirt man</Text>
        <Text style={globalStyles.Heading2}>Black Shirt</Text>
        <Text style={[globalStyles.Heading2, styles.cardPrice]}>R799</Text>
      </View>
    </View>
  )
}