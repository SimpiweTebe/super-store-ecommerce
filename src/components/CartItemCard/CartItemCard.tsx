import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { ProductTtype } from '../../screens/Cart/CartScreen'
import globalStyles from '../../styles/globalStyles'

type Props = {
  product: ProductTtype
}

export default function CartItemCard({ product }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.productThumbnail }} style={styles.thumbnail}/>
      
      <View>
        <Text style={globalStyles.HeadingTwo}>{product.brand}</Text>
        <Text style={styles.productName}>{product.name}</Text>

        <View style={styles.cartBottomRow}>
          <View style={styles.price}>
            <Text style={globalStyles.HeadingOne}>${product.price}</Text>
          </View>

          <View style={styles.cartActions}>
            <Pressable style={[styles.button, styles.removeBtn]}>
              <Text>-</Text>
            </Pressable>
            <Text>1</Text>
            <Pressable style={[styles.button, styles.addBtn]}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}