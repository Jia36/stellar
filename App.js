import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import SpaceCraftsScreen from "./screens/SpaceCrafts";
import DailyPicScreen from "./screens/DailyPic";
import StarMapScreen from "./screens/StarMap";

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
	headerShown:false
      }}>
	<Stack.Screen name="Home" component={HomeScreen}/>
	<Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
	<Stack.Screen name="DailyPics" component={DailyPicScreen}/>
  <Stack.Screen name="StarMaps" component={StarMapScreen}/>
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
