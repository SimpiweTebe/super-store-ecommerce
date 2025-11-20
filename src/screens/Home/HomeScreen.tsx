import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import UserHeader from '../../components/UserHeader/UserHeader'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import Routes from '../../navigation/Routes'
import styles from './styles'
import globalStyles from '../../styles/globalStyles'

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={globalStyles.defaultBackground}>
      <UserHeader handleCheckOut={()=> navigation.navigate(Routes.Cart)} />
      <SearchFilter />
      <View style={styles.carousel}>
        <Image source={{uri: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68'}} />
      </View>
    </ScrollView>
  )
}