// src/screens/ProfileScreen.jsx

import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';

export default function ProfileScreen() {
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Image */}
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/a7/4a/7a/a74a7ac388624bfbc7ae863fe3a9b4b2.jpg',
        }}
        style={styles.profileImage}
      />

      {/* User Info */}
      <Text style={styles.name}>
        Rohan Mitra
      </Text>

      <Text style={styles.email}>
        rohanmitra@gmail.com
      </Text>

      {/* Info Cards */}
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Ionicons
            name="location-outline"
            size={22}
            color="#FF6B00"
          />

          <Text style={styles.infoText}>
            Kolkata, India
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Ionicons
            name="call-outline"
            size={22}
            color="#FF6B00"
          />

          <Text style={styles.infoText}>
            +91 9876543210
          </Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={logout}
      >
        <Ionicons
          name="log-out-outline"
          size={22}
          color="#fff"
        />

        <Text style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#FF6B00',
  },

  name: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: '800',
    color: '#222',
  },

  email: {
    marginTop: 6,
    fontSize: 15,
    color: '#777',
  },

  infoContainer: {
    width: '100%',
    marginTop: 40,
  },

  infoCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 18,
    marginBottom: 18,
  },

  infoText: {
    marginLeft: 14,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  logoutButton: {
    marginTop: 40,
    backgroundColor: '#FF6B00',
    width: '100%',
    height: 58,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 10,
  },
});