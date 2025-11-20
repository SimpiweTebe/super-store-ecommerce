import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen';
import Routes from './Routes';
import ProductDetailsScreen from '../screens/ProductDetails/ProductDetailsScreen';
import CartScreen from '../screens/Cart/CartScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.Home}>
        <Stack.Screen name={Routes.Home} component={HomeScreen} />
        <Stack.Screen name={Routes.ProductDetails} component={ProductDetailsScreen} />
        <Stack.Screen name={Routes.Cart} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}