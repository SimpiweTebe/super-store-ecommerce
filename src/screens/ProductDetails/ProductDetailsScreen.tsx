import { View, Text, ScrollView, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Share2 } from 'lucide-react-native';

import PageHeaderSection from '../../components/PageHeader/PageHeaderSection'
import styles from './styles'
import Carousel, { SlideData } from '../../components/Carousel/Carousel'
import globalStyles from '../../styles/globalStyles'
import Button from '../../components/Button/Button'
import RoundButtonIcon from '../../components/Button/RoundButtonIcon'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart } from '../../redux/products/productSlice';
import { IProductType } from '../../productData';

export default function ProductDetailsScreen() {
  const dispatch = useAppDispatch()
  const { likedProducts, currentProduct: productDetails } = useAppSelector((state => state.products))
  const isLikedProduct = !!likedProducts.find(item => item.id === productDetails?.id)

  const [currentProduct, setCurrentProduct] = useState<IProductType | null>(null)
  const [selectedSize, setSelectedSize] = useState('')

  useEffect(()=> {
    setCurrentProduct(productDetails)
    currentProduct && setSelectedSize(currentProduct?.availableSize[0])
  }, [currentProduct, likedProducts, productDetails])

  const handleSizeSelect = (item: string) => {
    setSelectedSize(item)
  }

  if (!currentProduct) return <View><Text>Loading...</Text></View>

  const data: SlideData[] = [
  {
    id: 1,
    url: currentProduct.imageUrl
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/3289620/pexels-photo-3289620.jpeg'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/3178875/pexels-photo-3178875.jpeg'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/11383130/pexels-photo-11383130.jpeg'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg'
  },
]

  const handleAddToCart = ()=> dispatch(addToCart({...currentProduct, selectedSize }))

  return (
    <>
    <ScrollView style={styles.container}>
      <PageHeaderSection title='Details' isLikedItem={isLikedProduct}/>
      <Carousel data={data}/>

      <View style={styles.headerSection}>
        <View>
          <Text style={globalStyles.HeadingOne}>{currentProduct.brand}</Text>
          <Text style={styles.textGrey}>{currentProduct.name}</Text>
        </View>
        <View>
          <Text style={globalStyles.HeadingOne}>R{currentProduct.price}</Text>
        </View>
      </View>

      <View style={styles.sizeSelector}>
        <View style={styles.sizeTitle}>
          <Text style={globalStyles.HeadingTwo}>Select Size</Text>
          <Text style={styles.textGrey}>Size Chart</Text>
        </View>

         <FlatList 
            data={currentProduct.availableSize}
            horizontal
            renderItem={({ item })=> (
            <Pressable key={item} style={[styles.sizeButton, item === selectedSize && styles.activeSizeButton]} onPress={()=> handleSizeSelect(item)}>
              <Text style={[styles.buttonText, item === selectedSize && styles.activeButtonText]}>{item}</Text>
            </Pressable>
            )}
          />
      </View>

      <View style={styles.details}>
        <Text style={styles.textGrey}>
          {currentProduct.description}
        </Text>
      </View>
    </ScrollView>

    <View style={styles.pageActions}>
      <RoundButtonIcon Icon={Share2} onPress={()=> {}}/>
      <View style={styles.addToCart}>
        <Button title='Add To Cart' isPrimary onPress={handleAddToCart}/>
      </View>
    </View>
    </>
  )
}