import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import enemy from '../../assets/entity-enemy.png';

const Enemy = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={enemy} data-testing='enemy'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    position: 'absolute',
    right: 100,
    zIndex: 100,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  }
});

export default Enemy;
