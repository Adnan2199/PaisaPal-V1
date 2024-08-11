// components/OptionScreen.js

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const OptionScreen = () => {
  const navigation = useNavigation();

  const onSwipe = (event) => {
    if (event.nativeEvent.translationX > 50) { // Left-to-right swipe
      navigation.navigate('Splash');
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onSwipe}
      onHandlerStateChange={(event) => {
        if (event.nativeEvent.state === State.END) {
          onSwipe(event);
        }
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to PaisaPal</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001C26',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#00BFA6',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OptionScreen;
 