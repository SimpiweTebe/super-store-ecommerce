import { View, Text, ScrollView, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeaderSection from '../../components/PageHeader/PageHeaderSection'
import styles from './styles'
import Carousel, { SlideData } from '../../components/Carousel/Carousel'
import globalStyles from '../../styles/globalStyles'

const data: SlideData[] = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg'
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

const availableSizes = [
  {
    size: 'S',
    id: 1
  },
  {
    size: 'M',
    id: 2
  },
  {
    size: 'L',
    id: 3
  },
  {
    size: 'XL',
    id: 4
  },
  {
    size: 'XXL',
    id: 5
  },
  {
    size: 'XXXL',
    id: 6
  },
]

export default function ProductDetailsScreen() {
  const [selectedSize, setSelectedSize] = useState(availableSizes[0].size)

  const handleSizeSelect = (item) => {
    console.log({ item})
    setSelectedSize(item.size)
  }

  return (
    <ScrollView style={styles.container}>
      <PageHeaderSection title='Details' />
      <Carousel data={data}/>

      <View style={styles.headerSection}>
        <View>
          <Text style={globalStyles.HeadingOne}>Casual Hoodie Black</Text>
          <Text style={styles.textGrey}>Outwear Men</Text>
        </View>
        <View>
          <Text style={globalStyles.HeadingOne}>$68.00</Text>
        </View>
      </View>

      <View style={styles.sizeSelector}>
        <View style={styles.sizeTitle}>
          <Text style={globalStyles.HeadingTwo}>Select Size</Text>
          <Text style={styles.textGrey}>Size Chart</Text>
        </View>

         <FlatList 
            data={availableSizes}
            horizontal
            renderItem={({ item })=> (
            <Pressable key={item.id} style={[styles.sizeButton, item.size === selectedSize && styles.activeSizeButton]} onPress={()=> handleSizeSelect(item)}>
              <Text style={[styles.buttonText, item.size === selectedSize && styles.activeButtonText]}>{item.size}</Text>
            </Pressable>
            )}
          />
      </View>

     
    </ScrollView>
  )
}