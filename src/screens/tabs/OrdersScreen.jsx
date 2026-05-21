import React, { useState } from 'react';

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

export default function OrdersScreen({ navigation }) {
  const { cartItems, clearCart, removeFromCart } = useCart();
  const [expandedItems, setExpandedItems] = useState({});

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const deliveryFee = 40;
  const discount = Math.floor(subtotal * 0.1);
  const total = subtotal + deliveryFee - discount;

  const toggleExpanded = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePurchase = () => {
    Alert.alert(
      'Order Confirmed! 🎉',
      'Your order has been placed successfully. Track it in My Orders.',
      [
        {
          text: 'Continue Shopping',
          onPress: () => {
            clearCart();
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>My Orders</Text>
        <Text style={styles.itemCount}>{cartItems.length} items</Text>
      </View>
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIcon}>
            <Ionicons name="cart-outline" size={80} color="#FFE8D6" />
          </View>
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text style={styles.emptySubtitle}>
            Add some delicious food to get started
          </Text>
          <TouchableOpacity
            style={styles.continueShopping}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.continueText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item, index }) => (
              <View style={styles.cartItem}>
                {/* Item Image */}
                <Image
                  source={{ uri: item.image }}
                  style={styles.itemImage}
                />

                {/* Item Content */}
                <View style={styles.itemContent}>
                  <View style={styles.itemHeader}>
                    <View style={styles.itemInfo}>
                      <Text style={styles.itemName} numberOfLines={1}>
                        {item.name}
                      </Text>
                      <Text style={styles.itemCuisine} numberOfLines={1}>
                        {item.cuisine}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => removeFromCart(index)}
                      style={styles.removeButton}
                    >
                      <Ionicons
                        name="close-circle"
                        size={22}
                        color="#FF6B00"
                      />
                    </TouchableOpacity>
                  </View>

                  {/* Price and Quantity */}
                  <View style={styles.itemFooter}>
                    <Text style={styles.itemPrice}>₹{item.price}</Text>
                    <View style={styles.quantityBadge}>
                      <Text style={styles.quantityText}>
                        x{item.quantity || 1}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />

          {/* Order Summary Section */}
          <View style={styles.summarySection}>
            <Text style={styles.summaryTitle}>Order Summary</Text>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>₹{subtotal}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>₹{deliveryFee}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={[styles.summaryLabel, { color: '#22c55e' }]}>
                Discount (10%)
              </Text>
              <Text style={[styles.summaryValue, { color: '#22c55e' }]}>
                -₹{discount}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalAmount}>₹{total}</Text>
            </View>
          </View>

          {/* Promo Code Section */}
          <TouchableOpacity style={styles.promoSection}>
            <View style={styles.promoLeft}>
              <Ionicons name="gift-outline" size={20} color="#FF6B00" />
              <View>
                <Text style={styles.promoTitle}>Have a promo code?</Text>
                <Text style={styles.promoSubtitle}>Add it to save more</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>

          {/* Bottom Fixed Container */}
          <View style={styles.bottomContainer}>
            <View style={styles.deliveryInfo}>
              <Ionicons name="bicycle-outline" size={18} color="#FF6B00" />
              <View style={styles.deliveryText}>
                <Text style={styles.deliveryTitle}>30 min delivery</Text>
                <Text style={styles.deliveryTime}>Usually arrives by 8:30 PM</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handlePurchase}
            >
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
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
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  heading: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1a1a1a',
  },

  badge: {
    backgroundColor: '#FF6B00',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  badgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },

  // Empty State
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  emptyIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FF6B00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 8,
  },

  emptySubtitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },

  continueShopping: {
    backgroundColor: '#FF6B00',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },

  continueText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  // Cart Items
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 14,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
    paddingRight: 12,
  },

  itemImage: {
    width: 110,
    height: 110,
  },

  itemContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },

  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },

  itemInfo: {
    flex: 1,
    gap: 4,
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

  removeButton: {
    padding: 4,
  },

  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FF6B00',
  },

  quantityBadge: {
    backgroundColor: '#FFE8D6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  quantityText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF6B00',
  },

  // Summary Section
  summarySection: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 14,
    padding: 16,
    gap: 12,
  },

  summaryTitle: {
    fontSize: 16,
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

  // Promo Section
  promoSection: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: '#FFE8D6',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  promoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },

  promoTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF6B00',
  },

  promoSubtitle: {
    fontSize: 12,
    color: '#FF8C42',
    fontWeight: '500',
    marginTop: 2,
  },

  // Bottom Container
  bottomContainer: {
    borderTopColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingBottom: 20,
    gap: 12,
    marginBottom: -10,
  },

  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 10,
  },

  deliveryText: {
    flex: 1,
    gap: 2,
  },

  deliveryTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a1a1a',
  },

  deliveryTime: {
    fontSize: 11,
    color: '#999',
    fontWeight: '500',
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

  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});