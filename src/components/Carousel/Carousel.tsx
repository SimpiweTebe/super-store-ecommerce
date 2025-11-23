import { View, Image, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'

import styles from './styles'

export type SlideData = {
  id: number
  url: string
}

export default function Carousel({ data }: { data: SlideData[]}) {
  const [currentSlide, setCurrentSlide] = useState<SlideData>(data[0])
  
  const changeCurrentSlide = (currentItem: SlideData)=> {
    setCurrentSlide(currentItem)
  }

  return (
    <>
    <View style={styles.carouselContainer}>
      <Image source={{ uri: currentSlide.url }} style={styles.carouselImage}/>
      <View style={styles.slideIndexContainer}>
        {
          data.map(item => <View key={item.id} style={[styles.slideIndex, item.id === currentSlide.id && styles.activeCarouselThumbail && styles.activeSlideIndex]}/>)
        }
      </View>
    </View>
    <View>
      <FlatList 
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item })=> (
          <Pressable style={[styles.carouselThumbail, item.id === currentSlide.id && styles.activeCarouselThumbail]} onPress={()=> changeCurrentSlide(item)}>
            <Image source={{ uri: item.url }} style={styles.carouselThumbailImage}/>
          </Pressable>
        )}
      />
    </View>
    </>
  )
}