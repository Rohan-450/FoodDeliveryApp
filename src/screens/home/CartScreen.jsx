// src/screens/CartScreen.jsx

import React from 'react';

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../../context/CartContext';

export default function CartScreen() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>
          My Cart
        </Text>

        <Text style={styles.itemCount}>
          {cartItems.length} items
        </Text>
      </View>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons
            name="cart-outline"
            size={90}
            color="#CCC"
          />

          <Text style={styles.emptyTitle}>
            Your cart is empty
          </Text>

          <Text style={styles.emptySubtitle}>
            Add delicious food to your cart
          </Text>
        </View>
      ) : (
        <>
          {/* Cart Items */}
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) =>
              index.toString()
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 120,
            }}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />

                <View style={styles.content}>
                  <Text style={styles.title}>
                    {item.name}
                  </Text>

                  <Text style={styles.cuisine}>
                    {item.cuisine}
                  </Text>

                  <Text style={styles.price}>
                    ₹ {item.price}
                  </Text>
                </View>
              </View>
            )}
          />

          {/* Bottom Checkout */}
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.totalLabel}>
                Total Price
              </Text>

              <Text style={styles.totalPrice}>
                ₹ {total}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.checkoutButton}
            >
              <Text style={styles.checkoutText}>
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 13,
    marginTop: -20,
  },

  header: {
    marginBottom: 18,
  },

  heading: {
    fontSize: 32,
    fontWeight: '800',
    color: '#222',
  },

  itemCount: {
    marginTop: 5,
    color: '#777',
    fontSize: 15,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '800',
    color: '#222',
  },

  emptySubtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#777',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },

  image: {
    width: 120,
    height: 120,
  },

  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#222',
  },

  cuisine: {
    marginTop: 6,
    color: '#777',
    fontSize: 14,
  },

  price: {
    marginTop: 10,
    color: '#FF6B00',
    fontSize: 18,
    fontWeight: '700',
  },

  bottomContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 8,
    marginBottom: 10,
  },

  totalLabel: {
    color: '#777',
    fontSize: 14,
  },

  totalPrice: {
    marginTop: 4,
    fontSize: 24,
    fontWeight: '800',
    color: '#222',
  },

  checkoutButton: {
    backgroundColor: '#FF6B00',
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 16,
  },

  checkoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});