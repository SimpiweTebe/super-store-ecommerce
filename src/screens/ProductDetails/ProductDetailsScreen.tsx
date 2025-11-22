import { View, Text, ScrollView, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeaderSection from '../../components/PageHeader/PageHeaderSection'
import styles from './styles'
import Carousel, { SlideData } from '../../components/Carousel/Carousel'

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

export default function ProductDetailsScreen() {

  return (
    <ScrollView>
      <PageHeaderSection title='Details' />
      <Carousel data={data}/>
      <View>
        <View>
          <Text>Casual Hoodie Black</Text>
          <Text>Outwear Men</Text>
        </View>
        <View>
          <Text>$68.00</Text>
        </View>
      </View>
    </ScrollView>
  )
}