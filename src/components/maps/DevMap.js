import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Enemy from '../characters/Enemy';
import Player from '../characters/Player';

import devMap from '../../assets/map-devmap.png';

const DevMap = () => {
  return (
    <View style={styles.viewSpace}>
      <Image source={devMap} style={styles.devMap} data-testing='dev-map'/>
      <Enemy style={styles.character}/>
      <Player style={styles.character}/>
    </View>
  );
};

const styles = StyleSheet.create({
  viewSpace: {
    height: '70%',
    width: '100%',
    maxWidth: 800,
    maxHeight: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(100,100,100,0.8)',
    borderWidth: 6,
    margin: 20,
    position: 'relative',
  },
  devMap: {
    height: '100%',
    width: '100%',
    resizeMode: 'repeat',
  },
  character: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  }
});

export default DevMap;
