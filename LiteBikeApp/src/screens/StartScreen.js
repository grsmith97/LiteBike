import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default function StartScreen() {
  const handleOnPressStart = () => {
    console.log('Start button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} data-testing="litebike-title">
        LiteBike
      </Text>
      <Button title='Start' color='#1344ad' style={styles.button} onPress={handleOnPressStart}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#1344ad',
    fontSize: 40,
  },
  button: {
    // backgroundColor: '#1344ad',
  }
});
