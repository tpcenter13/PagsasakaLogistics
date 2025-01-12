import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const RiderDashboard = () => {
  const router = useRouter();

  // Example data for parcels
  const [parcels, setParcels] = useState([
    {
      id: '1',
      name: 'Parcel A',
      status: 'For Pickup',
      from: '7A, Boston',
      to: 'Texas',
      kg: '5',
      deliveryCharge: '40',
      phone: '09123122341',
      trackingID: '616161616178213',
    },
    {
      id: '2',
      name: 'Parcel B',
      status: 'For Pickup',
      from: '5B, Chicago',
      to: 'New York',
      kg: '3',
      deliveryCharge: '30',
      phone: '09123122342',
      trackingID: '626262626278214',
    },
  ]);

  // Navigation handlers
  const goToDashboard = () => router.push('Dashboard');
  const goToPickUp = () => router.push('/PickUp');
  const goToDelivery = () => router.push('/Delivery');
  const goToCompleted = () => router.push('/Completed');
  const goToCancel = () => router.push('/Cancel');

  // Parcel click handler
  const handleParcelClick = (parcel) => {
    alert(`Clicked on ${parcel.name} - Status: ${parcel.status}`);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/PagsasakaRider.png')}
          style={styles.logo}
        />
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

      {/* Profile and Note Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require('@/assets/images/RiderProfile.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>John Doe</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.buttonTextBlack}>Edit</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.userID}>Rider-1</Text>
        </View>
      </View>

      {/* Note Section */}
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>
          Note: The items listed below are your quota parcels for today. Please plan your route
          accordingly.
        </Text>

        <View style={styles.noteLine} />

        {/* Parcel List */}
        <View style={styles.whiteBox}>
          <FlatList
            data={parcels}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.parcelInfoContainer}
                onPress={() => handleParcelClick(item)}
              >
                <View style={styles.row}>
                  <Text style={styles.parcelTitle}>{item.name}</Text>
                  <Text style={styles.pickupText}>{item.status}</Text>
                </View>
                <Text style={styles.trackingID}>Tracking ID: {item.trackingID}</Text>
                <View style={styles.row}>
                  <View style={styles.fromSection}>
                    <Text style={styles.fromLabel}>● From</Text>
                    <Text style={styles.fromValue}>{item.from}</Text>
                  </View>
                  <View style={styles.detailsSection}>
                    <Text style={styles.detailLabel}>Kg:</Text>
                    <Text style={styles.detailValue}>{item.kg}</Text>
                  </View>
                  <View style={styles.detailsSection}>
                    <Text style={styles.detailLabel}>Delivery Charge:</Text>
                    <Text style={styles.detailValue}>{item.deliveryCharge}</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.shippedToSection}>
                    <Text style={styles.shippedToLabel}>📍 Shipped to</Text>
                    <Text style={styles.shippedToValue}>{item.to}</Text>
                  </View>
                  <View style={styles.phoneSection}>
                    <Text style={styles.phoneLabel}>Phone number</Text>
                    <Text style={styles.phoneValue}>{item.phone}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.homeButton}>
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
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 25,
    marginRight: 15,
  },
  profileInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: -5,
  },
  userID: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  editButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  noteContainer: {
    padding: 5,
    backgroundColor: '#fff',
    marginTop: 0,
  },
  noteText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#000',
    backgroundColor: '#fff',
    paddingLeft: '2%',
    marginBottom: 5,
  },
  noteLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  whiteBox: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10, // Slightly rounded corners
    borderWidth: 1, // Thin border
    borderColor: '#ccc', // Light gray border
    shadowColor: '#000', // Shadow for elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
    margin: 10, // Adds spacing around the box
    height: 350,
  },
  
  parcelInfoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  parcelTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  pickupText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#008000',
  },
  trackingID: {
    fontSize: 14,
    color: '#888',
    marginBottom: 9,
  },
  fromSection: {
    flex: 1,
  },
  fromLabel: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  fromValue: {
    fontSize: 14,
    color: '#555',
  },
  detailsSection: {
    alignItems: 'flex-end',
    marginLeft: 15,
  },
  detailLabel: {
    fontSize: 14,
    color: '#000',
  },
  detailValue: {
    fontSize: 14,
    color: '#555',
  },
  shippedToSection: {
    flex: 1,
  },
  shippedToLabel: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  shippedToValue: {
    fontSize: 14,
    color: '#555',
  },
  phoneSection: {
    alignItems: 'flex-end',
    marginLeft: 15,
  },
  phoneLabel: {
    fontSize: 13,
    color: '#000',
  },
  phoneValue: {
    fontSize: 13,
    color: '#555',
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
    width: 25, // Adjust width as needed
    height: 25, // Adjust height as needed
    resizeMode: 'contain', // Ensures the image maintains its aspect ratio
  },
  
});

export default RiderDashboard;