import { View, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import UserHeader from '../../components/UserHeader/UserHeader'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import Routes from '../../navigation/Routes'
import styles from './styles'
import globalStyles from '../../styles/globalStyles'
import Button from '../../components/Button/Button'
import CategoryList from '../../components/CategoryList/CategoryList'
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import { useNavigation } from '@react-navigation/native'
import { productData } from '../../productData'
import { useAppSelector } from '../../redux/hooks'

type Props = {
  id: number
  title: string
}

const categories: Props[] = [
  {
    id: 1,
    title: 'All'
  },
  {
    id: 2,
    title: 'Dresses'
  },
  {
    id: 3,
    title: 'Jackets'
  },
  {
    id: 4,
    title: 'Jeans'
  },
  {
    id: 5,
    title: 'Shoes'
  },
]

export default function HomeScreen() {
  const navigation = useNavigation<any>()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { cartProducts, likedProducts } = useAppSelector(state => state.products)

  const onCategoryPress = ()=> {}

  return (
    <>
    <ScrollView style={globalStyles.defaultBackground}>
      <UserHeader handleCheckOut={()=> navigation.navigate(Routes.Cart)} />
      <SearchFilter />
      <View style={styles.carousel}>
        <Image 
          style={styles.carouselImage}
          source={{uri: 'https://images.pexels.com/photos/18247649/pexels-photo-18247649.jpeg'}} 
        />
      </View>

      <View>
        <FlatList 
          data={categories}
          horizontal
          renderItem={({ item }) => (
            <Button 
              title={item.title}
              isActive={selectedCategory === item.title} 
              onPress={()=> setSelectedCategory(item.title)}
            />
          )}
          keyExtractor={item => `${item.id}`}
          showsHorizontalScrollIndicator={false}
        /> 
      </View>

      <View style={styles.section}>
        <CategoryList 
          categoryTitle='Special For You'
          productsList={productData} 
          categoryAction={onCategoryPress} 
        />
      </View>
      <View style={styles.section}>
        <CategoryList 
          categoryTitle='Latest deals'
          productsList={productData} 
          categoryAction={onCategoryPress} 
      
        />
      </View>
    </ScrollView>
    <BottomNavigation />
    </>
  )
}