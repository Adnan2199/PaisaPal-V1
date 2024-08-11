import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
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

const TermsAndConditionsScreen = () => {
  const navigation = useNavigation();
  const [isChecked] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Terms And Conditions</Text>
          <TouchableOpacity style={styles.bellButton}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.termsTitle}>Paisa Pal</Text>
          <Text style={styles.termsText}>
            1. Introduction{'\n'}
            Welcome to PaisaPal. These terms and conditions outline the rules and regulations for the use of [Finance App Name]'s services.{'\n'}
            {'\n'}
            2. Acceptance of Terms{'\n'}
            By accessing or using PaisaPal, you agree to be bound by these terms and conditions, all applicable laws, and regulations. If you do not agree with any part of these terms, you are prohibited from using this app.{'\n'}
            {'\n'}
            3. Eligibility{'\n'}
            You must be at least 18 years old to use this app. By using the app, you represent and warrant that you meet this age requirement.{'\n'}
            {'\n'}
            4. Account Registration{'\n'}
            To use certain features of the app, you must register for an account. You agree to provide accurate and complete information during the registration process and to update such information to keep it accurate and complete.{'\n'}
            {'\n'}
            5. User Responsibilities{'\n'}
            You are responsible for maintaining the confidentiality of your account and password.{'\n'}
            You agree to notify us immediately of any unauthorized use of your account.{'\n'}
            You are responsible for all activities that occur under your account.{'\n'}
            {'\n'}
            6. Use of Services{'\n'}
            You agree to use the services only for lawful purposes.
          </Text>
          <TouchableOpacity style={[styles.acceptButton, { backgroundColor: isChecked ? colors.mainGreen : colors.backgroundDarkModeAndLetters }]} disabled={!isChecked} onPress={() => {/* Handle acceptance */}}>
            <Text style={styles.acceptButtonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <MaterialCommunityIcons name="home" size={24} color={colors.lettersAndIcons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="chart-bar" size={24} color={colors.lettersAndIcons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
          <MaterialCommunityIcons name="repeat" size={24} color={colors.lettersAndIcons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <MaterialCommunityIcons name="layers-outline" size={24} color={colors.lettersAndIcons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.activeIcon}>
          <Feather name="user" size={24} color={colors.mainBackground} />
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
  contentContainer: {
    marginBottom: 20,
  },
  termsTitle: {
    color: colors.lightGreen,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  termsText: {
    color: colors.lightGreen,
    fontSize: 14,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    color: colors.lightGreen,
    fontSize: 14,
    marginLeft: 10,
  },
  acceptButton: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  acceptButtonText: {
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

export default TermsAndConditionsScreen;