// src/screens/tabs/OrdersScreen.jsx

import React from 'react';

import {
  Alert,
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

export default function OrdersScreen() {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const handlePurchase = () => {
    Alert.alert(
      'Purchase Successful 🎉',
      'Your order has been placed successfully.',
      [
        {
          text: 'OK',
          onPress: () => clearCart(),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>
          My Orders
        </Text>

        <Text style={styles.subHeading}>
          {cartItems.length} items selected
        </Text>
      </View>

      {/* Empty State */}
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons
            name="bag-handle-outline"
            size={90}
            color="#CCC"
          />

          <Text style={styles.emptyTitle}>
            No Orders Yet
          </Text>

          <Text style={styles.emptySubtitle}>
            Add food items to continue
          </Text>
        </View>
      ) : (
        <>
          {/* Orders List */}
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) =>
              index.toString()
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 140,
            }}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />

                <View style={styles.cardContent}>
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

          {/* Bottom Section */}
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.totalLabel}>
                Total Amount
              </Text>

              <Text style={styles.totalPrice}>
                ₹ {total}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.purchaseButton}
              onPress={handlePurchase}
            >
              <Text style={styles.purchaseText}>
                Purchase
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
    paddingTop: 10,
  },

  header: {
    marginBottom: 24,
  },

  heading: {
    fontSize: 32,
    fontWeight: '800',
    color: '#222',
  },

  subHeading: {
    marginTop: 6,
    fontSize: 15,
    color: '#777',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    marginTop: 18,
    fontSize: 24,
    fontWeight: '800',
    color: '#222',
  },

  emptySubtitle: {
    marginTop: 8,
    color: '#777',
    fontSize: 15,
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

  cardContent: {
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
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 8,
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

  purchaseButton: {
    backgroundColor: '#FF6B00',
    paddingHorizontal: 28,
    paddingVertical: 15,
    borderRadius: 16,
  },

  purchaseText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});