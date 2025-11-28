import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/globalStyles'
import PageHeaderSection from '../../components/PageHeader/PageHeaderSection'
import CategoryList from '../../components/CategoryList/CategoryList'
import styles from './styles'
import { useAppSelector } from '../../redux/hooks'

export default function ProductListScreen() {
  const { likedProducts } = useAppSelector(state => state.products)
  const onCategoryPress = ()=> {}

  return (
    <ScrollView>
      <PageHeaderSection
        title='Favourite items' 
        hasSecondaryAction={false}
      />

      <View style={styles.section}>
        <CategoryList 
          categoryTitle='Liked products'
          productsList={likedProducts} 
          categoryAction={onCategoryPress} 
          hasTitleSection={false}
        />
      </View>
    </ScrollView>
  )
}