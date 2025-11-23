import { View, Text, Pressable } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/globalStyles'
import styles from './styles'
import ProductCard from '../ProductCard/ProductCard'

type CategoryListProps = {
  categoryTitle: string
  categoryAction: ()=> void
  productsList: any[]
}

export default function CategoryList({categoryAction, productsList, categoryTitle }: CategoryListProps) {
  return (
    <View>
      <View style={styles.row}>
        <Text style={globalStyles.HeadingOne}>{categoryTitle}</Text>
        <Pressable onPress={categoryAction}>
          <Text>See All</Text>
        </Pressable>
      </View>

      <View style={styles.productGrid}>
        {
          productsList?.map((product, indx) => <ProductCard productItem={product} key={indx}/>)
        }
      </View>
    </View>
  )
}