import { View, Text, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeaderSection from '../../components/PageHeader/PageHeaderSection'
import CartItemCard from '../../components/CartItemCard/CartItemCard'
import styles from './styles'
import Button from '../../components/Button/Button'
import globalStyles from '../../styles/globalStyles'
import { useAppSelector } from '../../redux/hooks'
import { IProductType } from '../../productData'
import NoContent from '../../components/NoContent/NoContent'


export default function CartScreen({ navigation }) {

  const { cartProducts } = useAppSelector(state => state.products)
  const totalAmount = cartProducts.reduce((total, currentItem) => (total + currentItem.price * currentItem.QTY), 0)
  const totalQTY = cartProducts.reduce((total, currentItem) => (total + currentItem.QTY), 0)

  if (cartProducts.length === 0) return <NoContent title='Your cart is empty'/>

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
          <Text style={globalStyles.HeadingTwo}>R{totalAmount}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Discount: </Text>
          <Text style={globalStyles.HeadingTwo}>R{totalQTY >= 5 ? 200 : 0}</Text>
        </View>
        <View style={[styles.row, styles.total]}>
          <Text style={styles.text}>total: </Text>
          <Text style={globalStyles.HeadingTwo}>R{totalAmount}</Text>
        </View>
      </View>
    </ScrollView>

    <View style={styles.cartActions}>
      <Button title='Checkout' onPress={()=> {}} isPrimary />
    </View>
    </>
  )
}