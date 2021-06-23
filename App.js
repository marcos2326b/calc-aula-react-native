import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './src/screens/Calculator'
import Constants from 'expo-constants'

export default function App() {
  return (
    <View style={styles.container}>
    <Calculator/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-background(to rigth, rgb(83,105,118))',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Constants.statusBarHeigth
  },
});
