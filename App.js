import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './pages/HomePage/index';
import LandingPage from './pages/LandingPage/index';
import LoginPage from './pages/LoginPage/index';
import FeedPage from './pages/FeedPage/index';
import PostPage from './pages/PostPage/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Feed" component={FeedPage} />
        <Stack.Screen name="Post" component={PostPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
