import React from 'react';

import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function CustomDrawerContent(props) {
  const { logout } = useAuth();

  const { cartItems } = useCart();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          paddingTop: 0,
        }}
      >
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/564x/a7/4a/7a/a74a7ac388624bfbc7ae863fe3a9b4b2.jpg',
            }}
            style={styles.profileImage}
          />

          <Text style={styles.userName}>
            Rohan Mitra
          </Text>

          <Text style={styles.userEmail}>
            rohanmitra@gmail.com
          </Text>
        </View>

        {/* Cart Summary */}
        <View style={styles.cartContainer}>
          <Ionicons
            name="cart"
            size={22}
            color="#FF6B00"
          />

          <Text style={styles.cartText}>
            {cartItems.length} items in cart
          </Text>
        </View>

        {/* Drawer Items */}
        <View style={styles.drawerItemsContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={styles.footer}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FF6B00',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  profileImage: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    borderWidth: 3,
    borderColor: '#fff',
  },

  userName: {
    marginTop: 16,
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
  },

  userEmail: {
    marginTop: 4,
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
  },

  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF4EC',
    marginHorizontal: 16,
    marginTop: 22,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
  },

  cartText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '700',
    color: '#333',
  },

  drawerItemsContainer: {
    marginTop: 18,
    flex: 1,
  },

  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },

  logoutButton: {
    backgroundColor: '#FF6B00',
    height: 55,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },
});