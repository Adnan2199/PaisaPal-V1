import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, StatusBar, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import { firestore } from '../firebase'; // Import Firestore

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

const AddExpensesScreen = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [comments, setComments] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleAddExpense = async () => {
    if (!amount || !category || !title) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      await firestore.collection('expenses').add({
        amount,
        category,
        date: date.toISOString(),
        title,
        comments,
      });
      Alert.alert('Success', 'Expense added successfully');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to add expense');
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Add Expenses</Text>
          <TouchableOpacity style={styles.bellButton}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Date</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Select Date"
              placeholderTextColor={colors.lightGreen}
              value={date.toDateString()}
              editable={false} // Make it non-editable to show the selected date
            />
            <TouchableOpacity style={styles.iconButton} onPress={showDatePicker}>
              <MaterialCommunityIcons name="calendar" size={24} color={colors.mainGreen} />
            </TouchableOpacity>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text style={styles.label}>Category</Text>
          <View style={styles.inputContainer}>
            <RNPickerSelect
              onValueChange={(value) => setCategory(value)}
              items={[
                { label: 'Food', value: 'Food' },
                { label: 'Transport', value: 'Transport' },
                { label: 'Entertainment', value: 'Entertainment' },
                { label: 'Shopping', value: 'Shopping' },
              ]}
              placeholder={{
                label: 'Select a category',
                value: null,
              }}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: '50%',
                  transform: [{ translateY: -12 }],
                  right: 10,
                },
              }}
              value={category}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return <MaterialCommunityIcons name="chevron-down" size={24} color={colors.mainGreen} />;
              }}
            />
          </View>
          <Text style={styles.label}>Amount</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.currencySymbol}>₹</Text>
            <TextInput
              style={[styles.input, styles.roundedInput, { flex: 1 }]}
              placeholder="Enter Amount"
              placeholderTextColor={colors.lightGreen}
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.label}>Expense Title</Text>
          <View style={styles.inputContainer}>
            <RNPickerSelect
              onValueChange={(value) => setTitle(value)}
              items={[
                { label: 'Breakfast', value: 'Breakfast' },
                { label: 'Lunch', value: 'Lunch' },
                { label: 'Brunch', value: 'Brunch' },
                { label: 'Dinner', value: 'Dinner' },
                { label: 'Cab', value: 'Cab' }
              ]}
              placeholder={{
                label: 'Select an expense title',
                value: null,
              }}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: '50%',
                  transform: [{ translateY: -12 }],
                  right: 10,
                },
              }}
              value={title}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return <MaterialCommunityIcons name="chevron-down" size={24} color={colors.mainGreen} />;
              }}
            />
          </View>
          <Text style={styles.label}>Comments</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Enter Comments"
            placeholderTextColor={colors.lightGreen}
            multiline
            value={comments}
            onChangeText={setComments}
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleAddExpense}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const pickerSelectStyles = {
  inputIOS: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: colors.lightGreen,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: colors.lightGreen,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
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
    marginTop: 20,
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
  formContainer: {
    marginBottom: 20,
  },
  label: {
    color: colors.lightGreen,
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundDarkModeAndLetters,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 15,
    color: colors.lightGreen,
  },
  roundedInput: {
    borderRadius: 10,
  },
  iconButton: {
    padding: 10,
  },
  currencySymbol: {
    paddingLeft: 15,
    paddingRight: 5,
    color: colors.lightGreen,
    fontSize: 18,
  },
  textarea: {
    backgroundColor: colors.backgroundDarkModeAndLetters,
    borderRadius: 10,
    padding: 15,
    color: colors.lightGreen,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: colors.mainGreen,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: colors.mainBackground,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddExpensesScreen;
