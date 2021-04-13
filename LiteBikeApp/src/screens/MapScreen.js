import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import DevMap from '../components/maps/DevMap';

const MapScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} data-testing='title'>
        Level: DevMap
      </Text>
      <DevMap />
      <Button
        title='Next'
        data-testing='next-button'
        color='#32c8fa'
        style={styles.button}
        onPress={() => navigation.navigate('EndScreen', {gameStateMessage: 'You Lost!!!'})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  title: {
    color: '#32c8fa',
    fontSize: 40,
  },
  button: {
  },
});

export default MapScreen;
