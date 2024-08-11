import React from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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

const PinChangedScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.title}>Pin Changed Successfully</Text>
        </View>
        <View style={styles.successContainer}>
          <MaterialCommunityIcons name="check-circle-outline" size={100} color={colors.mainGreen} />
          <Text style={styles.successMessage}>Pin Has Been Changed Successfully</Text>
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
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    color: colors.lightGreen,
    fontSize: 24,
    fontWeight: 'bold',
  },
  successContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  successMessage: {
    color: colors.lightGreen,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
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

export default PinChangedScreen;
