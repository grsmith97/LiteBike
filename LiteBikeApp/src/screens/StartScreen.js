import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} data-testing='litebike-title'>
        LiteBike
      </Text>
      <Button
        title='Start'
        data-testing='start-button'
        color='#add8e6'
        style={styles.button}
        onPress={() => navigation.navigate('EndScreen')}
      />
    </View>
  );
};

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

export default StartScreen;
