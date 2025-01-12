import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

const PickUp = () => {
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

      {/* Card Section */}
      <View style={styles.card}>
        {/* Group A */}
        <View style={styles.groupA}>
          <View style={styles.groupARow}>
            <View>
              <Text style={styles.cardTitle}>FireWall</Text>
              <Text style={styles.cardSubText}>Tracking ID: 616161616178213</Text>
            </View>
            <View style={styles.todoContainer}>
              <Text style={styles.todoText}>To do</Text>
              <Text style={styles.todoPhone}>09123122341</Text>
            </View>
          </View>
        </View>

        {/* Horizontal Divider Line */}
        <View style={styles.horizontalDivider} />

        {/* Group B */}
        <View style={styles.groupB}>
          <Text style={styles.cardFrom}>From: 7A, Boston</Text>
          <Text style={styles.cardTo}>Shipped to: Texas</Text>
          <View style={styles.cardActions}>
            <TouchableOpacity style={styles.issueButton}>
              <Text style={styles.buttonTextWhite}>Issue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scanButton}>
              <Text style={styles.buttonTextWhite}>Scan QR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Footer Section */}
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
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  groupA: {
    marginBottom: 10,
  },
  groupARow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20, // H3 font size
    fontWeight: 'bold',
    color: '#000',
  },
  cardSubText: {
    fontSize: 14,
    color: '#666',
  },
  todoContainer: {
    alignItems: 'flex-end',
  },
  todoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  todoPhone: {
    fontSize: 14,
    color: '#666',
  },
  horizontalDivider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    marginVertical: 10,
  },
  groupB: {
    marginTop: 10,
  },
  cardFrom: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  cardTo: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  issueButton: {
    backgroundColor: '#E63946',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
  },
  scanButton: {
    backgroundColor: '#006D32',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  buttonTextWhite: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: -5,
    left: 0,
    right: 0,
    backgroundColor: '#608C54',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtonImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default PickUp;
