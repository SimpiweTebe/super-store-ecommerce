import { View, Text, ScrollView, TextInput } from 'react-native'
import React from 'react'
import PageHeaderSection from '../../components/PageHeader/PageHeaderSection'
import CartItemCard from '../../components/CartItemCard/CartItemCard'
import styles from './styles'
import Button from '../../components/Button/Button'
import globalStyles from '../../styles/globalStyles'
import { useAppSelector } from '../../redux/hooks'

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
    price: 68.99,
    productThumbnail: 'https://images.pexels.com/photos/18247649/pexels-photo-18247649.jpeg'
  },
  {
    id: 2,
    brand: 'Brown Jacket',
    name: 'Outerwear Men',
    price: 99.00,
    productThumbnail: 'https://images.pexels.com/photos/6206978/pexels-photo-6206978.jpeg'
  },
  {
    id: 3,
    brand: 'Brown Jacket',
    name: 'Outerwear Men',
    price: 450.25,
    productThumbnail: 'https://images.pexels.com/photos/380311/pexels-photo-380311.jpeg'
  },
]

export default function CartScreen({ navigation }) {

  const { cartProducts, likedProducts } = useAppSelector(state => state.products)

  console.log({ cartProducts })

  return (
    <>
    <PageHeaderSection title='My Cart' />
    <ScrollView style={styles.container}>
      <View style={styles.cartList}>
        {
          cartProducts?.map(item => <CartItemCard product={item} key={item.id}/>)
        }
      </View>

      <View style={styles.totalContainer}>
        <View style={[styles.row, styles.inputField]}>
          <TextInput placeholder='Enter Discount Code'/>
           <Button title='Apply' onPress={()=> {}} />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Sub total: </Text>
          <Text style={globalStyles.HeadingTwo}>$201</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Discount: </Text>
          <Text style={globalStyles.HeadingTwo}>$11.00</Text>
        </View>
        <View style={[styles.row, styles.total]}>
          <Text style={styles.text}>total: </Text>
          <Text style={globalStyles.HeadingTwo}>$212</Text>
        </View>
      </View>
    </ScrollView>

    <View style={styles.cartActions}>
      <Button title='Checkout' onPress={()=> {}} isPrimary />
    </View>
    </>
  )
}