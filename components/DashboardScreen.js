import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Entypo, Feather } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const colors = {
  darkModeGreenBlack: '#001C26',
  backgroundDarkModeAndLetters: '#003B4D',
  lettersAndIcons: '#00BFA6',
  darkModeGreenBar: '#00BFA6',
  mainGreen: '#00D09E',
  lightGreen: '#F0FFF4',
  lightBlueButton: '#ADD8E6',
  blueButton: '#0068FF',
  oceanBlueButton: '#000080',
  mainBackground: '#052224',
};

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [greeting, setGreeting] = useState('Good Morning');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const db = getFirestore();
          const userDoc = doc(db, 'users', user.uid);
          const userSnapshot = await getDoc(userDoc);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            console.log('User data fetched:', userData);
            setUserName(userData.name || 'User');
          } else {
            console.log('No such document!');
          }
        } else {
          console.log('No user is currently signed in.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserName();
  }, []);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome back {userName}</Text>
          <Text style={styles.subGreeting}>{greeting}</Text>
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.balanceBox}>
            <Text style={styles.balanceTitle}>Total Balance</Text>
            <Text style={styles.balanceAmount}>₹7,783.00</Text>
          </View>
          <View style={styles.balanceBox}>
            <Text style={styles.balanceTitle}>Total Expense</Text>
            <Text style={styles.expenseAmount}>-₹1,187.40</Text>
          </View>
        </View>
        <View style={styles.savingsContainer}>
          <View style={styles.savingsBox}>
            <View style={styles.iconWrapper}>
              <Svg height="60" width="60" viewBox="0 0 36 36" style={styles.progressCircle}>
                <Circle
                  cx="18"
                  cy="18"
                  r="16"
                  stroke={colors.lightGreen}
                  strokeWidth="3"
                  fill="none"
                />
                <Circle
                  cx="18"
                  cy="18"
                  r="16"
                  stroke={colors.darkModeGreenBlack}
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="75, 100"
                  strokeDashoffset="25"
                />
              </Svg>
              <View style={styles.iconCenter}>
                <FontAwesome5 name="car" size={16} color="white" />
              </View>
            </View>
            <Text style={styles.savingsTitle}>Savings On Goals</Text>
          </View>
          <View style={styles.revenueBox}>
            <Text style={styles.revenueText}>Revenue Last Week</Text>
            <Text style={styles.revenueAmount}>₹4,000.00</Text>
            <Text style={styles.foodText}>Food Last Week</Text>
            <Text style={styles.foodAmount}>-₹169.00</Text>
          </View>
        </View>
        <View style={styles.expenseContainer}>
          <View style={styles.expenseBox}>
            <MaterialCommunityIcons name="currency-inr" size={24} color={colors.lettersAndIcons} />
            <View style={styles.expenseDetails}>
              <Text style={styles.expenseTitle}>Salary</Text>
              <Text style={styles.expenseSubtitle}>18-27 April 30</Text>
              <Text style={styles.expenseType}>Monthly</Text>
              <Text style={styles.expenseAmount}>₹4,000.00</Text>
            </View>
          </View>
          <View style={styles.expenseBox}>
            <FontAwesome5 name="shopping-basket" size={24} color={colors.lettersAndIcons} />
            <View style={styles.expenseDetails}>
              <Text style={styles.expenseTitle}>Groceries</Text>
              <Text style={styles.expenseSubtitle}>17:00 April 24</Text>
              <Text style={styles.expenseType}>Pantry</Text>
              <Text style={styles.expenseAmount}>₹100.00</Text>
            </View>
          </View>
          <View style={styles.expenseBox}>
            <Entypo name="home" size={24} color={colors.lettersAndIcons} />
            <View style={styles.expenseDetails}>
              <Text style={styles.expenseTitle}>Rent</Text>
              <Text style={styles.expenseSubtitle}>8:30 April 15</Text>
              <Text style={styles.expenseType}>Rent</Text>
              <Text style={styles.expenseAmount}>₹67,40.40</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.activeIcon}>
          <MaterialCommunityIcons name="home" size={24} color={colors.mainBackground} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="chart-bar" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
          <Feather name="repeat" size={24} color={colors.lettersAndIcons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.iconWrapper}>
          <MaterialCommunityIcons name="layers-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Feather name="user" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  container: {
    flexGrow: 1,
    backgroundColor: colors.mainBackground,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20, // Ensure it's below the notch
    marginBottom: 20,
  },
  greeting: {
    color: colors.lightGreen,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subGreeting: {
    color: colors.lightGreen,
    fontSize: 16,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  balanceBox: {
    backgroundColor: colors.backgroundDarkModeAndLetters,
    borderRadius: 10,
    padding: 15,
    flex: 1,
    marginHorizontal: 5,
  },
  balanceTitle: {
    color: colors.lightGreen,
    fontSize: 14,
  },
  balanceAmount: {
    color: colors.lightGreen,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  expenseAmount: {
    color: colors.blueButton,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  savingsContainer: {
    backgroundColor: colors.mainGreen,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  savingsBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  progressCircle: {
    position: 'absolute',
  },
  iconCenter: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  savingsTitle: {
    color: colors.darkModeGreenBlack,
    fontSize: 14,
    marginLeft: 10,
  },
  revenueBox: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  revenueText: {
    color: colors.darkModeGreenBlack,
    fontSize: 14,
  },
  revenueAmount: {
    color: colors.darkModeGreenBlack,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  foodText: {
    color: colors.darkModeGreenBlack,
    fontSize: 14,
    marginTop: 10,
  },
  foodAmount: {
    color: colors.blueButton,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.backgroundDarkModeAndLetters,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  filterText: {
    color: colors.lightGreen,
    fontSize: 14,
  },
  expenseContainer: {
    backgroundColor: colors.backgroundDarkModeAndLetters,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  expenseBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  expenseDetails: {
    marginLeft: 10,
    flex: 1,
  },
  expenseTitle: {
    color: colors.lightGreen,
    fontSize: 14,
  },
  expenseSubtitle: {
    color: colors.lightGreen,
    fontSize: 12,
  },
  expenseType: {
    color: colors.lightGreen,
    fontSize: 12,
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.backgroundDarkModeAndLetters,
    paddingVertical: 7,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center', // Center the icons vertically
  },
  activeIcon: {
    backgroundColor: colors.mainGreen,
    borderRadius: 30,
    padding: 10,
  },
});

export default DashboardScreen;
