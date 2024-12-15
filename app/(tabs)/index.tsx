import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Static Background Layers */}
      <View style={styles.backgroundLayer1} />
      <View style={styles.backgroundLayer2} />
      <View style={styles.backgroundLayer3} />
      <View style={styles.backgroundLayer4} />
      <View style={styles.backgroundLayer5} />

      {/* Logo */}
      <Image
        source={require('@/assets/images/logo pagsasaka.png')} // Your provided logo
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Rider Image */}
      <Image
        source={require('@/assets/images/motor.png')} // Your provided motor image
        style={styles.rider}
        resizeMode="contain"
      />

      {/* SIGN IN Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01AB7E', // Base green color
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensure background layers stay within the container
  },
  backgroundLayer1: {
    position: 'absolute',
    top: '-25%',
    right: '-71%',
    width: '100%',
    height: '100%',
    backgroundColor: '#70C2A9',
    transform: [{ rotate: '98deg' }], // Tilt the layer
    borderRadius: 25,
    shadowColor: '#000', // iOS Shadow
    shadowOffset: { width: 0, height: 4 }, // Shadow only at the bottom
    shadowOpacity: 0.3, // iOS Shadow
    shadowRadius: 6, // iOS Shadow
    elevation: 8, // Android Shadow
    zIndex: 1, // Ensure it's on top of other views if necessary
  },
  backgroundLayer2: {
    position: 'absolute',
    top: '-20%', // Adjusted to avoid full overlap
    right: '-65%',
    width: '70%',
    height: '70%',
    backgroundColor: '#41B897',
    transform: [{ rotate: '98deg' }], // Tilt the layer, same angle
    borderRadius: 25,
    shadowColor: '#000', // iOS Shadow
    shadowOffset: { width: 0, height: 4 }, // Shadow only at the bottom
    shadowOpacity: 0.3, // iOS Shadow
    shadowRadius: 6, // iOS Shadow
    elevation: 8, // Android Shadow
    zIndex: 1, // Ensures this layer is on top if necessary
  },
  
  backgroundLayer3: {
    position: 'absolute',
    bottom: 325,
    left: -310,
    width: '95%',
    height: '50%',
    backgroundColor: '#41B897',
    transform: [{ rotate: '98deg' }],
    borderRadius: 25,
    shadowColor: '#000', // iOS Shadow
    shadowOffset: { width: 0, height: 4 }, // Shadow only at the bottom
    shadowOpacity: 0.3, // iOS Shadow
    shadowRadius: 6, // iOS Shadow
    elevation: 8, // Android Shadow
  },

  backgroundLayer4: {
    position: 'absolute',
    bottom: -150,
    right: -5,
    width: '95%',
    height: '50%',
    backgroundColor: '#41B897',
    transform: [{ rotate: '98deg' }],
    borderRadius: 25,
  },
  backgroundLayer5: {
    position: 'absolute',
    bottom: -210,
    right: -55,
    width: '95%',
    height: '50%',
    backgroundColor: '#70C2A9',
    transform: [{ rotate: '98deg' }],
    borderRadius: 25,
  },
  
  logo: {
    position: 'absolute',
    top: '25%', // Position logo at the top
    width: 300,
    height: 100,
    zIndex: 1, // Ensures this layer is on top if necessary
  },
  rider: {
    position: 'absolute',
    bottom: '40%', // Adjust rider position
    left: '9%',
    width: 160,
    height: 125,
    zIndex: 1, // Ensures this layer is on top if necessary
  },
  button: {
    position: 'absolute',
    bottom: '25%',
    backgroundColor: 'transparent', // Remove the white background
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFFFFF', // Keep the border color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6, // External shadow effect
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
  },
});
