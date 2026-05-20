import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const [notifications, setNotifications] =
    useState(true);

  const [darkMode, setDarkMode] =
    useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.heading}>
        Settings
      </Text>

      {/* Settings Options */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.leftRow}>
            <Ionicons
              name="notifications-outline"
              size={22}
              color="#FF6B00"
            />

            <Text style={styles.label}>
              Notifications
            </Text>
          </View>

          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{
              false: '#D3D3D3',
              true: '#FFB27D',
            }}
            thumbColor={
              notifications ? '#FF6B00' : '#F4F4F4'
            }
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <View style={styles.leftRow}>
            <Ionicons
              name="moon-outline"
              size={22}
              color="#FF6B00"
            />

            <Text style={styles.label}>
              Dark Mode
            </Text>
          </View>

          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{
              false: '#D3D3D3',
              true: '#FFB27D',
            }}
            thumbColor={
              darkMode ? '#FF6B00' : '#F4F4F4'
            }
          />
        </View>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.row}>
          <View style={styles.leftRow}>
            <Ionicons
              name="lock-closed-outline"
              size={22}
              color="#FF6B00"
            />

            <Text style={styles.label}>
              Privacy Policy
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#999"
          />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.row}>
          <View style={styles.leftRow}>
            <Ionicons
              name="document-text-outline"
              size={22}
              color="#FF6B00"
            />

            <Text style={styles.label}>
              Terms & Conditions
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#999"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingTop: -10,
  },

  heading: {
    fontSize: 32,
    fontWeight: '800',
    color: '#222',
    marginBottom: 28,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 18,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 22,
  },

  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    marginLeft: 14,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEE',
  },
});