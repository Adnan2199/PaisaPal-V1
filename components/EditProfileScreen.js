import React from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar, TouchableOpacity, SafeAreaView, TextInput, Switch } from 'react-native';
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

const EditProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Edit My Profile</Text>
          <TouchableOpacity style={styles.bellButton}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileImage} />
          <Text style={styles.profileName}>Ranisha Giri</Text>
          <Text style={styles.profileId}>ID: 25030024</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={colors.lightGreen}
            value="Ranisha Giri"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            placeholderTextColor={colors.lightGreen}
            value="+91 7982254964"
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor={colors.lightGreen}
            value="example@example.com"
          />
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Push Notifications</Text>
            <Switch value={true} />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Turn Dark Theme</Text>
            <Switch value={true} />
          </View>
          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.lightGreen,
    marginBottom: 10,
  },
  profileName: {
    color: colors.lightGreen,
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileId: {
    color: colors.lightGreen,
    fontSize: 16,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.backgroundDarkModeAndLetters,
    color: colors.lightGreen,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    color: colors.lightGreen,
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: colors.mainGreen,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  updateButtonText: {
    color: colors.mainBackground,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
