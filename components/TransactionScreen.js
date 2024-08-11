import React from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Entypo, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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

const TransactionScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Transaction</Text>
          <TouchableOpacity style={styles.bellButton}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.balanceBox}>
            <Text style={styles.balanceTitle}>Total Balance</Text>
            <Text style={styles.balanceAmount}>₹7,783.00</Text>
          </View>
          <View style={styles.incomeExpenseContainer}>
            <View style={styles.incomeExpenseBox}>
              <MaterialCommunityIcons name="cash" size={24} color={colors.lettersAndIcons} />
              <Text style={styles.incomeExpenseTitle}>Income</Text>
              <Text style={styles.incomeExpenseAmount}>₹4,120.00</Text>
            </View>
            <View style={styles.incomeExpenseBox}>
              <MaterialCommunityIcons name="cash-minus" size={24} color={colors.lettersAndIcons} />
              <Text style={styles.incomeExpenseTitle}>Expense</Text>
              <Text style={styles.incomeExpenseAmount}>₹1,187.40</Text>
            </View>
          </View>
        </View>
        <View style={styles.transactionsContainer}>
          <Text style={styles.monthTitle}>April</Text>
          <View style={styles.transactionBox}>
            <MaterialCommunityIcons name="currency-inr" size={24} color={colors.lettersAndIcons} />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>Salary</Text>
              <Text style={styles.transactionSubtitle}>18-27 April 30</Text>
              <Text style={styles.transactionType}>Monthly</Text>
              <Text style={styles.transactionAmount}>₹4,000.00</Text>
            </View>
          </View>
          <View style={styles.transactionBox}>
            <FontAwesome5 name="shopping-basket" size={24} color={colors.lettersAndIcons} />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>Groceries</Text>
              <Text style={styles.transactionSubtitle}>17:00 April 24</Text>
              <Text style={styles.transactionType}>Pantry</Text>
              <Text style={styles.transactionAmount}>₹100.00</Text>
            </View>
          </View>
          <View style={styles.transactionBox}>
            <Entypo name="home" size={24} color={colors.lettersAndIcons} />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>Rent</Text>
              <Text style={styles.transactionSubtitle}>8:30 April 15</Text>
              <Text style={styles.transactionType}>Rent</Text>
              <Text style={styles.transactionAmount}>₹6,744.00</Text>
            </View>
          </View>
          <View style={styles.transactionBox}>
            <FontAwesome5 name="car-side" size={24} color={colors.lettersAndIcons} />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>Transport</Text>
              <Text style={styles.transactionSubtitle}>7:30 April 08</Text>
              <Text style={styles.transactionType}>Fuel</Text>
              <Text style={styles.transactionAmount}>₹4.13</Text>
            </View>
          </View>
          <Text style={styles.monthTitle}>March</Text>
          <View style={styles.transactionBox}>
            <FontAwesome5 name="utensils" size={24} color={colors.lettersAndIcons} />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>Food</Text>
              <Text style={styles.transactionSubtitle}>18:30 March 31</Text>
              <Text style={styles.transactionType}>Dinner</Text>
              <Text style={styles.transactionAmount}>₹232.00</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <MaterialCommunityIcons name="home" size={24} color={colors.lettersAndIcons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="chart-bar" size={24} color={colors.lettersAndIcons} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeIcon}>
          <Feather name="repeat" size={24} color={colors.mainBackground} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.iconWrapper}>
          <MaterialCommunityIcons name="layers-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Feather name="user" size={24} color={colors.lettersAndIcons} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20, // Ensure it's below the notch
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  title: {
    color: colors.lightGreen,
    fontSize: 24,
    fontWeight: 'bold',
  },
  bellButton: {
    padding: 10,
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceBox: {
    backgroundColor: colors.backgroundDarkModeAndLetters,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
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
  incomeExpenseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  incomeExpenseBox: {
    flex: 1,
    backgroundColor: colors.backgroundDarkModeAndLetters,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  incomeExpenseTitle: {
    color: colors.lightGreen,
    fontSize: 14,
  },
  incomeExpenseAmount: {
    color: colors.blueButton,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  transactionsContainer: {
    marginBottom: 20,
  },
  monthTitle: {
    color: colors.lightGreen,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  transactionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundDarkModeAndLetters,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  transactionDetails: {
    marginLeft: 10,
    flex: 1,
  },
  transactionTitle: {
    color: colors.lightGreen,
    fontSize: 14,
  },
  transactionSubtitle: {
    color: colors.lightGreen,
    fontSize: 12,
  },
  transactionType: {
    color: colors.lightGreen,
    fontSize: 12,
    marginTop: 2,
  },
  transactionAmount: {
    color: colors.blueButton,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'right',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.backgroundDarkModeAndLetters,
    paddingVertical: 15,
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

export default TransactionScreen;
