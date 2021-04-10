import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

const EndScreen = ({navigation, route}) => {
  const {gameStateMessage} = route.params;

  return (
    <View style={styles.container}>
      <Text>
        {gameStateMessage}
      </Text>
      <Button
        title='Try Again'
        data-testing='end-button'
        color={'#1344ad'}
        style={styles.button}
        onPress={() => navigation.navigate('Start Screen')}
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
