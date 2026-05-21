import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';

export default function ProfileScreen({ navigation }) {
  const { logout } = useAuth();

  const menuItems = [
    {
      icon: 'receipt-outline',
      label: 'My Orders',
      subtitle: 'View past orders',
      color: '#FF6B00',
    },
    {
      icon: 'heart-outline',
      label: 'Favorites',
      subtitle: 'Saved restaurants',
      color: '#FF6B00',
    },
    {
      icon: 'map-outline',
      label: 'Addresses',
      subtitle: 'Manage locations',
      color: '#FF6B00',
    },
    {
      icon: 'wallet-outline',
      label: 'Payments',
      subtitle: 'Saved cards',
      color: '#FF6B00',
    },
    {
      icon: 'notifications-outline',
      label: 'Notifications',
      subtitle: 'Push settings',
      color: '#FF6B00',
    },
    {
      icon: 'help-circle-outline',
      label: 'Help & Support',
      subtitle: 'FAQs & Contact',
      color: '#FF6B00',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* Header with Dark Background */}
        <View style={styles.headerSection}>
          <View style={styles.profileCard}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/564x/a7/4a/7a/a74a7ac388624bfbc7ae863fe3a9b4b2.jpg',
                }}
                style={styles.profileImage}
              />
              <TouchableOpacity style={styles.editBadge}>
                <Ionicons name="camera" size={14} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.profileInfo}>
              <Text style={styles.name}>Rohan Mitra</Text>
              <Text style={styles.email}>rohanmitra@gmail.com</Text>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>₹2,450</Text>
            <Text style={styles.statLabel}>Spent</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>⭐ 4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              activeOpacity={0.7}
            >
              <View style={styles.menuLeft}>
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: `${item.color}20` },
                  ]}
                >
                  <Ionicons
                    name={item.icon}
                    size={20}
                    color={item.color}
                  />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuLabel}>{item.label}</Text>
                  <Text style={styles.menuSubtitle}>
                    {item.subtitle}
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#ccc"
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={logout}
          activeOpacity={0.8}
        >
          <Ionicons name="log-out-outline" size={20} color="#FF6B00" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -40,
  },

  // Header Section
  headerSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  profileImageContainer: {
    position: 'relative',
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FF6B00',
  },

  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FF6B00',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },

  profileInfo: {
    flex: 1,
    gap: 4,
  },

  name: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1a1a1a',
  },

  email: {
    fontSize: 13,
    color: '#999',
    fontWeight: '500',
  },

  editButton: {
    marginTop: 8,
    backgroundColor: '#FFE8D6',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },

  editButtonText: {
    color: '#FF6B00',
    fontSize: 12,
    fontWeight: '700',
  },

  // Stats Section
  statsSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 10,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    gap: 6,
  },

  statNumber: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FF6B00',
  },

  statLabel: {
    fontSize: 12,
    color: '#999',
    fontWeight: '600',
  },

  // Menu Section
  menuSection: {
    paddingHorizontal: 16,
    gap: 0,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuTextContainer: {
    gap: 2,
  },

  menuLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a1a',
  },

  menuSubtitle: {
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  },

  // Logout Button
  logoutButton: {
    marginHorizontal: 16,
    marginTop: 28,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#FF6B00',
    height: 52,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  logoutText: {
    color: '#FF6B00',
    fontSize: 16,
    fontWeight: '700',
  },

  // Version Info
  versionText: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 12,
    color: '#ccc',
    fontWeight: '500',
  },
});