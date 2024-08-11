import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SvgComponent from './Vector.js'; // Adjust the path based on where your converted SVG is located
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const onSwipe = (event) => {
    if (event.nativeEvent.translationX < -50) { // Right-to-left swipe
      navigation.navigate('Option');
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
        <View style={styles.icon}>
          <SvgComponent width={126} height={114.78} />
        </View>
        <Text style={styles.text}>PaisaPal</Text>
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00D09E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 127,
    top: 373,
    width: 109,
    height: 130,
  },
  text: {
    position: 'absolute',
    left: 90,
    top: 494,
    width: 227,
    height: 48,
    color: '#FFFFFF',
    fontSize: 51.14,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 57.4,
  },
});

export default SplashScreen;
