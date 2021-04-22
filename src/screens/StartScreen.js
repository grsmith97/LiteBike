import React from 'react';
import {StyleSheet, Text, Button, View, TouchableOpacity, Image} from 'react-native';
import settings from '../assets/settings-cog.png';

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
        onPress={() => navigation.navigate('MapScreen')}
      />
      <TouchableOpacity disabled={true} data-testing='settings-disabled'>
        <Image style={styles.settings} source={settings} data-testing='settings-button' />
      </TouchableOpacity>
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
  settings: {
    height: 40,
    width: 40,
  }
});

export default StartScreen;
