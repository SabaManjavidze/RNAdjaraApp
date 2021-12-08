import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomePage from './src/Pages/HomePage/HomePage';
import MovieDetails from './src/Pages/MovieDetails/MovieDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title:"ilarioni"}} component={HomePage} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
