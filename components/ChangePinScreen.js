import React from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
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

const ChangePinScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Change Pin</Text>
          <TouchableOpacity style={styles.bellButton}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Current Pin" secureTextEntry />
          <TextInput style={styles.input} placeholder="New Pin" secureTextEntry />
          <TextInput style={styles.input} placeholder="Confirm Pin" secureTextEntry />
          <TouchableOpacity style={styles.changePinButton} onPress={() => navigation.navigate('PinChanged')}>
            <Text style={styles.changePinButtonText}>Change Pin</Text>
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
          <MaterialCommunityIcons name="swap-horizontal" size={24} color={colors.lettersAndIcons} />
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
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.backgroundDarkModeAndLetters,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    color: colors.lightGreen,
  },
  changePinButton: {
    backgroundColor: colors.mainGreen,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  changePinButtonText: {
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

export default ChangePinScreen;
