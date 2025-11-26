import { View, Text, Pressable } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/globalStyles'
import styles from './styles'
import ProductCard from '../ProductCard/ProductCard'
import { IProductType } from '../../productData'
import { useAppSelector } from '../../redux/hooks'

type CategoryListProps = {
  categoryTitle: string
  categoryAction: ()=> void
  productsList: IProductType[]
  hasTitleSection?: boolean
}

export default function CategoryList({categoryAction, productsList, categoryTitle, hasTitleSection = true }: CategoryListProps) {
  const { likedProducts } = useAppSelector((state)=> state.products)

  return (
    <View>
      {
        hasTitleSection && (
          <View style={styles.row}>
            <Text style={globalStyles.HeadingOne}>{categoryTitle}</Text>
            <Pressable onPress={categoryAction}>
              <Text>See All</Text>
            </Pressable>
          </View>
        )
      }

      <View style={styles.productGrid}>
        {
          productsList?.map((product) => <ProductCard productItem={product} key={product.id} />)
        }
      </View>
    </View>
  )
}