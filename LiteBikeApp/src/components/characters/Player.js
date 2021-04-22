import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import player from '../../assets/entity-player.png';

const Player = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={player} data-testing='player'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 35,
    position: 'absolute',
    left: 100,
    zIndex: 101,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  }
});

export default Player;
