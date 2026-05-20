import React, { useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';

import { useAuth } from '../../context/AuthContext';

export default function LoginScreen() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] =
    useState('');

  const [secureText, setSecureText] =
    useState(true);

  return (
    <LinearGradient
      colors={['#FF6B00', '#FF8E3C']}
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
      />

      <SafeAreaView style={styles.safeArea}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5787/5787016.png',
            }}
            style={styles.logo}
          />

          <Text style={styles.welcomeTitle}>
            Welcome Back
          </Text>

          <Text style={styles.welcomeSubtitle}>
            Login to continue ordering your
            favorite food
          </Text>
        </View>

        {/* Bottom Card */}
        <View style={styles.card}>
          {/* Email */}
          <Text style={styles.label}>
            Email Address
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={22}
              color="#999"
            />

            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#999"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          {/* Password */}
          <Text style={styles.label}>
            Password
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={22}
              color="#999"
            />

            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#999"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureText}
            />

            <TouchableOpacity
              onPress={() =>
                setSecureText(!secureText)
              }
            >
              <Ionicons
                name={
                  secureText
                    ? 'eye-off-outline'
                    : 'eye-outline'
                }
                size={22}
                color="#999"
              />
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity>
            <Text style={styles.forgotText}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.9}
            onPress={signIn}
          >
            <Text style={styles.loginText}>
              Login
            </Text>
          </TouchableOpacity>

          {/* Signup */}
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>
              Don’t have an account?
            </Text>
            <TouchableOpacity>
              <Text style={styles.signupText}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },

  topSection: {
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 24,
  },

  logo: {
    width: 120,
    height: 120,
  },

  welcomeTitle: {
    marginTop: 20,
    fontSize: 34,
    fontWeight: '900',
    color: '#fff',
  },

  welcomeSubtitle: {
    marginTop: 10,
    fontSize: 15,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    lineHeight: 24,
  },

  card: {
    backgroundColor: '#fff',

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    paddingHorizontal: 24,
    paddingTop: 35,
    paddingBottom: 30,
    marginBottom: -15,
  },

  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
    marginTop: 16,
  },

  inputContainer: {
    height: 58,
    backgroundColor: '#F8F8F8',
    borderRadius: 18,
    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: '#222',
  },

  forgotText: {
    marginTop: 14,
    alignSelf: 'flex-end',
    color: '#FF6B00',
    fontWeight: '700',
  },

  loginButton: {
    height: 58,
    backgroundColor: '#FF6B00',

    borderRadius: 18,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 28,

    shadowColor: '#FF6B00',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 8,
  },

  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },


  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 28,
  },

  footerText: {
    color: '#777',
  },

  signupText: {
    color: '#FF6B00',
    fontWeight: '800',
    marginLeft: 6,
  },
});