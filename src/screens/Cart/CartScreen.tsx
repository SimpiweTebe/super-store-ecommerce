import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PageHeaderSection from '../../components/PageHeader/PageHeaderSection'
import CartItemCard from '../../components/CartItemCard/CartItemCard'
import styles from './styles'
import Button from '../../components/Button/Button'

export type ProductTtype = {
  id: number
  brand: string
  name: string
  price: number
  productThumbnail: string
}

const products: ProductTtype[] = [
  {
    id: 1,
    brand: 'Brown Jacket',
    name: 'Outerwear Men',
    price: 68.00,
    productThumbnail: 'https://images.pexels.com/photos/18247649/pexels-photo-18247649.jpeg'
  },
  {
    id: 2,
    brand: 'Brown Jacket',
    name: 'Outerwear Men',
    price: 68.00,
    productThumbnail: 'https://images.pexels.com/photos/18247649/pexels-photo-18247649.jpeg'
  },
  {
    id: 3,
    brand: 'Brown Jacket',
    name: 'Outerwear Men',
    price: 68.00,
    productThumbnail: 'https://images.pexels.com/photos/18247649/pexels-photo-18247649.jpeg'
  },
]

export default function CartScreen({ navigation }) {

  return (
    <>
    <PageHeaderSection title='My Cart' />
    <ScrollView style={styles.container}>
      <View style={styles.cartList}>
        {
          products.map(item => <CartItemCard product={item} key={item.id}/>)
        }
      </View>
    </ScrollView>
    <View style={styles.cartActions}>
      <Button title='Checkout' onPress={()=> {}}/>
    </View>
    </>
  )
}