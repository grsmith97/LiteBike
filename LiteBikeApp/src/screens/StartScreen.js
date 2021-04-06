import React, {useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default function StartScreen() {
  const [buttonState, setButtonState] = useState(true);

  const handleOnPressStart = () => {
    setButtonState(!buttonState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} data-testing='litebike-title'>
        LiteBike
      </Text>
      <Button
        title='Start'
        data-testing='start-button'
        color={buttonState ? '#1344ad' : '#ff0000'}
        style={styles.button}
        onPress={handleOnPressStart}
      />
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
