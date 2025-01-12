// App.js or Navigation.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RiderDashboard from './RiderDashboard';  // Import your RiderDashboard component
import PickUpScreen from './PickUpScreen';     // Import the PickUp screen
import DeliveryScreen from './DeliveryScreen'; // Import the Delivery screen
import CompletedScreen from './CompletedScreen'; // Import the Completed screen
import CancelScreen from './CancelScreen';     // Import the Cancel screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RiderDashboard">
        <Stack.Screen name="RiderDashboard" component={RiderDashboard} />
        <Stack.Screen name="PickUp" component={PickUpScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
        <Stack.Screen name="Completed" component={CompletedScreen} />
        <Stack.Screen name="Cancel" component={CancelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
