// LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../firebase'; // Adjust the path if necessary
import { MaterialIcons } from '@expo/vector-icons';
import { collection, getDocs } from 'firebase/firestore';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSwipe = (event) => {
    if (event.nativeEvent.translationX > 50) {
      navigation.navigate('Option');
    }
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Invalid email format');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user);

        // Fetch user data from Firestore
        try {
          const querySnapshot = await getDocs(collection(firestore, 'users'));
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          });
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }

        navigation.navigate('Dashboard');
      })
      .catch((error) => {
        Alert.alert('Login Error', error.message);
      });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <PanGestureHandler
      onGestureEvent={onSwipe}
      onHandlerStateChange={(event) => {
        if (event.nativeEvent.state === State.END) {
          onSwipe(event);
        }
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.visibilityToggle}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <MaterialIcons
              name={isPasswordVisible ? 'visibility' : 'visibility-off'}
              size={24}
              color="#aaa"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001C26',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  passwordContainer: {
    position: 'relative',
    width: '80%',
  },
  visibilityToggle: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  loginButton: {
    backgroundColor: '#00BFA6',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#001C26',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 20,
  },
});

export default LoginScreen;
