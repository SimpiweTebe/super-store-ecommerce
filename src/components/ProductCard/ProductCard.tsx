import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Heart } from 'lucide-react-native';
import RoundButtonIcon from '../Button/RoundButtonIcon'

import styles from './styles'
import globalStyles from '../../styles/globalStyles';
import Routes from '../../navigation/Routes';
import { IProductType } from '../../productData';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToLikes, removeFromLikes } from '../../redux/products/productSlice';

type productItemTypes = {
  productItem: IProductType
}

export default function ProductCard({ productItem }: productItemTypes) {
  const navigation = useNavigation<any>()
  const dispatch = useAppDispatch()
  const { likedProducts } = useAppSelector((state)=> state.products)
  const isLikedItem = likedProducts?.find(item => item.id === productItem.id)
 
  const handleLike = ()=> {
    isLikedItem ?  dispatch(removeFromLikes(productItem)) : dispatch(addToLikes(productItem)) 
  }

  return (
    <View style={styles.card}>
      <Pressable style={styles.imageContainer} onPress={()=> navigation.navigate(Routes.ProductDetails)}>
        <View style={[styles.likeButton, isLikedItem && styles.likedItem]}>
          <RoundButtonIcon Icon={Heart} onPress={handleLike}/>
        </View>
        <Image source={{uri: productItem.imageUrl}}  style={styles.image}/>
      </Pressable>
      <View style={styles.cardDetails}>
        <Text style={styles.cardBrand}>{productItem.brand}</Text>
        <Text style={globalStyles.HeadingTwo}>{productItem.name}</Text>
        <Text style={[globalStyles.HeadingOne, styles.cardPrice]}>R{productItem.price}</Text>
      </View>
    </View>
  )
}