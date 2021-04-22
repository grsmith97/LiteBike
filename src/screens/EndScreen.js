import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

const EndScreen = ({navigation, route}) => {
  const {gameStateMessage} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title} data-testing='game-state-message'>
        {gameStateMessage}
      </Text>
      <Button
        title='Try Again'
        data-testing='end-button'
        color='#add8e6'
        style={styles.button}
        onPress={() => navigation.navigate('StartScreen')}
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
});

export default EndScreen;
