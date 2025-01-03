import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, FlatList } from 'react-native';

const RiderDashboard = () => {
  // Example data to display inside the white box
  const [parcels, setParcels] = useState([
    { id: '1', name: 'Parcel A', status: 'For Pickup' },
    { id: '2', name: 'Parcel B', status: 'For Pickup' },
    { id: '3', name: 'Parcel C', status: 'For Pickup' },
  ]);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('@/assets/images/PagsasakaRider.png')} style={styles.logo} />
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonTransparent}>
          <Text style={styles.buttonTextBlack}>Pick Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTransparent}>
          <Text style={styles.buttonTextBlack}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTransparent}>
          <Text style={styles.buttonTextBlack}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonTransparent, styles.cancelButton]}>
          <Text style={styles.buttonTextRed}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Line under the buttons */}
      <View style={styles.line} />

      {/* Profile and Note Section */}
      <View style={styles.profileContainer}>
        <Image source={require('@/assets/images/RiderProfile.png')} style={styles.profileImage} />
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

      {/* Note Section inside Profile Container */}
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>Note: The items listed below are your quota parcel for today. Please plan your route accordingly.</Text>

        {/* Line between noteText and parcel items */}
        <View style={styles.noteLine} />

        {/* White box container under the note text */}
        <View style={styles.whiteBox}>
          {/* Displaying the parcel data */}
          <FlatList
            data={parcels}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.parcelItem}>
                <Text style={styles.parcelName}>{item.name}</Text>
                <Text style={styles.parcelStatus}>{item.status}</Text>
              </View>
            )}
          />
        </View>
      </View>

      {/* Footer Section with Home Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Home</Text>
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
    paddingVertical: 15,
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 70,
    resizeMode: 'contain',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  buttonTransparent: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: -5,
  },
  userID: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  editButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  noteContainer: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 0,
  },
  noteText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#000',
    backgroundColor: '#fff',
    paddingLeft: '2%',
    marginBottom: 10, // Space below the note text
  },
  noteLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',  // Light gray line color
    marginVertical: 10,  // Adds space between the text and line
  },
  whiteBox: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2, // Optional: adds shadow for better visibility
  },
  parcelItem: {
    marginBottom: 15,
  },
  parcelName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  parcelStatus: {
    fontSize: 14,
    color: '#888',
  },
  footer: {
    backgroundColor: '#608C54', // Same color as the header
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%', // Adjusts space above the footer
  },
  homeButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: '#608C54',
    borderWidth: 1,
  },
  homeButtonText: {
    color: '#608C54',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RiderDashboard;
