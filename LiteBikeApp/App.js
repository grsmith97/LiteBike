import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';

import StartScreen from './src/screens/StartScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
