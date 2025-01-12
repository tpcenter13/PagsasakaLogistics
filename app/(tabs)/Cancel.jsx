import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Cancel = () => {
  const router = useRouter();
  
  // Navigation handlers
  const goToDashboard = () => router.push('/Dashboard');
  const goToPickUp = () => router.push('/PickUp');
  const goToDelivery = () => router.push('/Delivery');
  const goToCompleted = () => router.push('/Completed');
  const goToCancel = () => router.push('/Cancel');

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('@/assets/images/PagsasakaRider.png')} style={styles.logo} />
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonTransparent} onPress={goToPickUp}>
          <Text style={styles.buttonTextBlack}>Pick Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTransparent} onPress={goToDelivery}>
          <Text style={styles.buttonTextBlack}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTransparent} onPress={goToCompleted}>
          <Text style={styles.buttonTextBlack}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonTransparent, styles.cancelButton]}
          onPress={goToCancel}
        >
          <Text style={styles.buttonTextRed}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Line under the buttons */}
      <View style={styles.line} />

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.homeButton} onPress={goToDashboard}>
          <Image
            source={require('@/assets/images/Home.png')}
            style={styles.homeButtonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#608C54',
    paddingVertical: 10,
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  buttonTransparent: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  cancelButton: {
    borderColor: '#E63946',
  },
  buttonTextBlack: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextRed: {
    color: '#E63946',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.25)',
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: -5,
    left: 0,
    right: 0,
    backgroundColor: '#608C54',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtonImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default Cancel;
