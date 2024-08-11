import React from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Feather } from '@expo/vector-icons';
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

const CategoriesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Categories</Text>
          <TouchableOpacity style={styles.bellButton}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="white" />
          </TouchableOpacity>
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
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={[styles.categoryBox, styles.food]} onPress={() => navigation.navigate('Food')}>
            <MaterialCommunityIcons name="food-fork-drink" size={24} color="white" />
            <Text style={styles.categoryTitle}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryBox, styles.transport]} onPress={() => navigation.navigate('Transport')}>
            <FontAwesome5 name="bus" size={24} color="white" />
            <Text style={styles.categoryTitle}>Transport</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryBox, styles.rent]} onPress={() => navigation.navigate('Rent')}>
            <FontAwesome5 name="hand-holding-usd" size={24} color="white" />
            <Text style={styles.categoryTitle}>Rent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryBox, styles.entertainment]} onPress={() => navigation.navigate('Entertainment')}>
            <MaterialCommunityIcons name="movie" size={24} color="white" />
            <Text style={styles.categoryTitle}>Entertainment</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddExpenses')}>
          <Text style={styles.addButtonText}>Add Expenses</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <MaterialCommunityIcons name="home" size={24} color={colors.lettersAndIcons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="chart-bar" size={24} color={colors.lettersAndIcons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
          <Feather name="repeat" size={24} color={colors.lettersAndIcons} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeIcon}>
          <MaterialCommunityIcons name="layers-outline" size={24} color={colors.mainBackground} />
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
  categoriesContainer: {
    marginBottom: 20,
  },
  categoryBox: {
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  food: {
    backgroundColor: colors.blueButton,
  },
  transport: {
    backgroundColor: colors.lightBlueButton,
  },
  rent: {
    backgroundColor: colors.lightBlueButton,
  },
  entertainment: {
    backgroundColor: colors.oceanBlueButton,
  },
  categoryTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: colors.mainGreen,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: colors.mainBackground,
    fontSize: 16,
    fontWeight: 'bold',
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

export default CategoriesScreen;
