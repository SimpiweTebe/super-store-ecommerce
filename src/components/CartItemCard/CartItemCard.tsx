import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import globalStyles from '../../styles/globalStyles'
import { IProductType } from '../../productData'
import { useAppDispatch } from '../../redux/hooks'
import { addToCart, removeFromCart, updateCart } from '../../redux/products/productSlice'

type Props = {
  product: IProductType
}

export default function CartItemCard({ product }: Props) {
  const dispatch = useAppDispatch()

  const handleUpdateCart = ()=> {
    dispatch(updateCart(product))
    product.QTY === 1 && dispatch(removeFromCart(product))
  }
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.thumbnail}/>
      
      <View>
        <Text style={globalStyles.HeadingTwo}>{product.brand}</Text>
        <Text style={styles.productName}>{product.name}</Text>

        <View style={styles.cartBottomRow}>
          <View style={styles.price}>
            <Text style={globalStyles.HeadingOne}>${product.price * product.QTY}</Text>
          </View>

          <View style={styles.cartActions}>
            <Pressable style={[styles.button, styles.removeBtn]} onPress={handleUpdateCart}>
              <Text>-</Text>
            </Pressable>
            <Text>{product.QTY}</Text>
            <Pressable style={[styles.button, styles.addBtn]} onPress={()=> dispatch(addToCart(product))}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}