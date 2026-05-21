import React, { useState } from 'react';

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../../context/CartContext';


export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, _, idx) => ({ ...acc, [idx]: 1 }), {})
  );

  const subtotal = cartItems.reduce(
    (sum, item, idx) => sum + item.price * (quantities[idx] || 1),
    0
  );
  const deliveryFee = subtotal > 500 ? 0 : 50;
  const discount = Math.floor(subtotal * 0.05);
  const total = subtotal + deliveryFee - discount;

  const updateQuantity = (index, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max(1, (prev[index] || 1) + delta),
    }));
  };

  const handleRemoveItem = (index) => {
    removeFromCart(index);
    const newQuantities = { ...quantities };
    delete newQuantities[index];
    setQuantities(newQuantities);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.heading}>My Cart</Text>
          <Text style={styles.itemCount}>
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartItems.length}</Text>
        </View>
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIconContainer}>
            <Ionicons name="bag-outline" size={70} color="#FFE8D6" />
          </View>
          <Text style={styles.emptyTitle}>Cart is empty</Text>
          <Text style={styles.emptySubtitle}>
            Start adding your favorite meals
          </Text>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.continueButtonText}>Continue Browsing</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}
            renderItem={({ item, index }) => (
              <View style={styles.cartCard}>
                {/* Image */}
                <Image
                  source={{ uri: item.image }}
                  style={styles.cartImage}
                />

                {/* Content */}
                <View style={styles.cartContent}>
                  <View style={styles.cardTop}>
                    <View style={styles.titleSection}>
                      <Text style={styles.itemName} numberOfLines={1}>
                        {item.name}
                      </Text>
                      <Text style={styles.itemCuisine} numberOfLines={1}>
                        {item.cuisine}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => handleRemoveItem(index)}
                      style={styles.deleteButton}
                    >
                      <Ionicons name="trash-outline" size={18} color="#FF6B00" />
                    </TouchableOpacity>
                  </View>

                  {/* Price and Controls */}
                  <View style={styles.cardBottom}>
                    <Text style={styles.itemPrice}>₹{item.price}</Text>
                    <View style={styles.quantityControl}>
                      <TouchableOpacity
                        style={styles.quantityBtn}
                        onPress={() => updateQuantity(index, -1)}
                      >
                        <Ionicons name="remove" size={16} color="#FF6B00" />
                      </TouchableOpacity>
                      <Text style={styles.quantityValue}>
                        {quantities[index] || 1}
                      </Text>
                      <TouchableOpacity
                        style={styles.quantityBtn}
                        onPress={() => updateQuantity(index, 1)}
                      >
                        <Ionicons name="add" size={16} color="#FF6B00" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />

          {/* Summary Section */}
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Order Summary</Text>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>₹{subtotal}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>
                {deliveryFee === 0 ? (
                  <Text style={{ color: '#22c55e', fontWeight: '700' }}>
                    FREE
                  </Text>
                ) : (
                  `₹${deliveryFee}`
                )}
              </Text>
            </View>

            {discount > 0 && (
              <View style={styles.summaryRow}>
                <Text style={[styles.summaryLabel, { color: '#22c55e' }]}>
                  Discount (5%)
                </Text>
                <Text style={[styles.summaryValue, { color: '#22c55e' }]}>
                  -₹{discount}
                </Text>
              </View>
            )}

            <View style={styles.divider} />

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalAmount}>₹{total}</Text>
            </View>

            {subtotal <= 500 && (
              <View style={styles.freeDeliveryTip}>
                <Ionicons name="information-circle" size={16} color="#22c55e" />
                <Text style={styles.freeDeliveryText}>
                  Add ₹{500 - subtotal} more for free delivery
                </Text>
              </View>
            )}
          </View>

          {/* Sticky Checkout Button */}
          <View style={styles.checkoutContainer}>
            <TouchableOpacity
              style={styles.checkoutButton}
            >
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
              <Ionicons name="arrow-forward" size={18} color="#fff" />
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
    backgroundColor: '#fff',
    paddingTop: -40,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  heading: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1a1a1a',
  },

  itemCount: {
    marginTop: 4,
    color: '#999',
    fontSize: 13,
    fontWeight: '600',
  },

  badge: {
    backgroundColor: '#FF6B00',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  badgeText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },

  // Empty State
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  emptyIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFE8D6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  emptyTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 8,
  },

  emptySubtitle: {
    fontSize: 15,
    color: '#999',
    textAlign: 'center',
    marginBottom: 28,
  },

  continueButton: {
    backgroundColor: '#FF6B00',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },

  continueButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  // Cart Items
  cartCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 14,
    marginBottom: 12,
    overflow: 'hidden',
    paddingRight: 12,
  },

  cartImage: {
    width: 100,
    height: 110,
  },

  cartContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },

  titleSection: {
    flex: 1,
    gap: 3,
  },

  itemName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a1a',
  },

  itemCuisine: {
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  },

  deleteButton: {
    padding: 6,
    marginRight: -6,
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FF6B00',
  },

  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 4,
    gap: 8,
    borderWidth: 1,
    borderColor: '#FFE8D6',
  },

  quantityBtn: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityValue: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a1a1a',
    minWidth: 20,
    textAlign: 'center',
  },

  // Summary
  summaryContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 14,
    padding: 14,
    gap: 10,
  },

  summaryTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 8,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  summaryLabel: {
    fontSize: 13,
    color: '#666',
    fontWeight: '600',
  },

  summaryValue: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a1a1a',
  },

  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },

  totalLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a1a',
  },

  totalAmount: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FF6B00',
  },

  freeDeliveryTip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    gap: 8,
    marginTop: 4,
  },

  freeDeliveryText: {
    fontSize: 12,
    color: '#22c55e',
    fontWeight: '600',
    flex: 1,
  },

  // Checkout
  checkoutContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 8,
  },

  checkoutButton: {
    backgroundColor: '#FF6B00',
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});