import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import SplashScreen from './components/SplashScreen';
import OptionScreen from './components/OptionScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import DashboardScreen from './components/DashboardScreen';
import TransactionScreen from './components/TransactionScreen';
import CategoriesScreen from './components/CategoriesScreen';
import FoodScreen from './components/FoodScreen';
import TransportScreen from './components/TransportScreen';
import RentScreen from './components/RentScreen';
import EntertainmentScreen from './components/EntertainmentScreen';
import ProfileScreen from './components/ProfileScreen';
import EditProfileScreen from './components/EditProfileScreen';
import SecurityScreen from './components/SecurityScreen';
import ChangePinScreen from './components/ChangePinScreen';
import PinChangedScreen from './components/PinChangedScreen';
import TermsAndConditionsScreen from './components/TermsAndConditionsScreen';
import AddExpensesScreen from './components/AddExpensesScreen';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        // Add any other fonts you need here
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Optionally return a loading indicator
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Option"
          component={OptionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transaction"
          component={TransactionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Food"
          component={FoodScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transport"
          component={TransportScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rent"
          component={RentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Entertainment"
          component={EntertainmentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddExpenses"
          component={AddExpensesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Security"
          component={SecurityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePin"
          component={ChangePinScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PinChanged"
          component={PinChangedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditionsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
