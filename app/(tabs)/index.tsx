import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Animated,
} from 'react-native';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const backgroundPosition = useRef(new Animated.Value(-2500)).current;
  const buttonPosition = useRef(new Animated.Value(25)).current; // New ref for button position
  const logoPosition = useRef(new Animated.Value(45)).current; // New ref for logo position
  const riderPosition = useRef(new Animated.Value(9)).current; // Ref for rider position
  const MotorRiderSize = useRef(new Animated.ValueXY({ x: 160, y: 125 })).current; // Ref for MotorRider size

  
  

  const handleLogin = () => {
    console.log('Login button clicked'); // Debug: Check if this logs
  
    // Animate background
    Animated.timing(backgroundPosition, {
      toValue: -25,
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: false,
    }).start(() => {
     
    });
  
    // Animate button position
    Animated.timing(buttonPosition, {
      toValue: -250, // Move to bottom: 250%
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: false,
    }).start();
  
    // Animate logo position
    Animated.timing(logoPosition, {
      toValue: -15, // Move to right: -15
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: false,
    }).start();
  
    // Animate rider position from left 9% to left 110%
    Animated.timing(riderPosition, {
      toValue: 110, // Move to the far right
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: false,
    }).start();

    // Animate rider position from left 9% to left 110% and size changes
    Animated.parallel([
      Animated.timing(riderPosition, {
        toValue: 110, // Move to the far right
        duration: 1000, // Animation duration in milliseconds
        useNativeDriver: false,
      }),
      Animated.timing(MotorRiderSize, {
        toValue: { x: 180, y: 270 }, // Animate size changes
        duration: 1000, // Animation duration in milliseconds
        useNativeDriver: false,
      })
    ]).start();

  };

  return (
    <View style={styles.container}>
      {/* Static Background Layers */}

      <View style={styles.backgroundLayer3} />
      <View style={styles.backgroundLayer4} />
      <View style={styles.backgroundLayer5} />
      <Animated.View
        style={[
          styles.backgroundLayer6,
          { bottom: backgroundPosition }, // Animated style
        ]}
      >
        {/* Login Form */}
        <Text style={styles.formTitle}>SIGN IN</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Logo */}
      <Animated.View style={[styles.logo, { right: logoPosition }]}>
        <Image
          source={require('@/assets/images/logo pagsasaka.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </Animated.View>

      {/* RECTANGLE */}
      <Animated.View style={[styles.logo, { right: logoPosition }]}>
        <Image
          source={require('@/assets/images/Rectangle BIG.png')}
          style={styles.RectangleBIG}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Rider Image */}
      <Animated.Image
        source={require('@/assets/images/motor.png')}
        style={[
          styles.rider,
          {
            left: riderPosition.interpolate({
              inputRange: [9, 110],
              outputRange: ['9%', '110%'],
            }),
          },
        ]}
        resizeMode="contain"
      />

      {/* MotorRider Image */}
      <Animated.Image
        source={require('@/assets/images/Rider2.png')}
        style={[
          styles.MotorRider,
          {
            bottom: riderPosition.interpolate({
              inputRange: [9, 110],
              outputRange: ['80%', '43%'],
            }),
            left: riderPosition.interpolate({
              inputRange: [9, 110],
              outputRange: ['-40%', '9%'],
            }),
            width: MotorRiderSize.x,
            height: MotorRiderSize.y,
          },
        ]}
        resizeMode="contain"
      />

      {/* SIGN IN Button */}
      <Animated.View
        style={[
          styles.button,
          { bottom: buttonPosition.interpolate({
              inputRange: [25, 250],
              outputRange: ['25%', '250%'],
            }) },
        ]}
      >
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01AB7E',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  backgroundLayer2: {
    position: 'absolute',
    top: '-20%',
    right: '-65%',
    width: '70%',
    height: '70%',
    backgroundColor: '#41B897',
    transform: [{ rotate: '98deg' }],
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    zIndex: 1,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
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
  backgroundLayer6: {
    position: 'absolute',
    right: -15,
    width: '105%',
    height: '60%',
    backgroundColor: '#FFFFFF',
    transform: [{ rotate: '10deg' }],
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 1,
  },
  logo: {
    position: 'absolute',
    top: '25%',
    width: 300,
    height: 100,
    zIndex: 1,
    right: 45,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },

  rider: {
    position: 'absolute',
    bottom: '40%',
    left: '9%',
    width: 160,
    height: 125,
    zIndex: 1,
  },

  MotorRider: {
    position: 'absolute',
    bottom: '80%',
    left: '-40%',
    width: 160,
    height: 125,
    zIndex: 1,
  },

  button: {
    position: 'absolute',
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
  },
  formTitle: {
    position: 'absolute',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#106466',
    marginBottom: 5,
    transform: [{ rotate: '-10deg' }],
    bottom: '75%',
    left: '23%',
  },
  input: {
    width: '80%',
    height: 45,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 19,
    fontSize: 16,
    color: '#333',
    transform: [{ rotate: '350deg' }],
  },
  loginButton: {
    backgroundColor: '#01AB7E',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    transform: [{ rotate: '-10deg' }],
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    transform: [{ rotate: '0 deg' }],
  },

  RectangleBIG: {
    position: 'absolute',
    top: '-260%',
    right: '-55%',
    width: '110%',
    height: '250%',
    backgroundColor: '#70C2A9',
    transform: [{ rotate: '-15deg' }],
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },

});
