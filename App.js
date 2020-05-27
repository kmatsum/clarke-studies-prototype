import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { enableScreens } from 'react-native-screens';
//Navigator Imports
import ClarkeNavigator from './navigation/ClarkeNavigator'; 

//Enable usage of Screens
enableScreens();

//TODO: REDUX STUFF HERE

export default function App() {
  return (
    <ClarkeNavigator />
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
