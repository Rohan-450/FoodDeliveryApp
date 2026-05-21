import React, { useState } from 'react';

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
import { useCart } from '../../context/CartContext';

export default function RestaurantDetailsScreen({
  route,
  navigation,
}) {
  const { restaurant } = route.params;
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Restaurant Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: restaurant.image }}
            style={styles.image}
          />
          <View style={styles.imageOverlay} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Title and Rating */}
          <View style={styles.titleSection}>
            <View>
              <Text style={styles.title}>{restaurant.name}</Text>
              <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
            </View>
            <View style={styles.ratingBadge}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{restaurant.rating}</Text>
            </View>
          </View>

          {/* Info Pills */}
          <View style={styles.infoPills}>
            <View style={styles.pill}>
              <Ionicons name="time-outline" size={16} color="#FF6B00" />
              <Text style={styles.pillText}>30 mins</Text>
            </View>
            <View style={styles.pill}>
              <Ionicons name="bicycle-outline" size={16} color="#FF6B00" />
              <Text style={styles.pillText}>Free Delivery</Text>
            </View>
            <View style={styles.pill}>
              <Ionicons name="location-outline" size={16} color="#FF6B00" />
              <Text style={styles.pillText}>3.2 km</Text>
            </View>
          </View>

          {/* Price */}
          <View style={styles.priceSection}>
            <Text style={styles.priceLabel}>Average Price</Text>
            <Text style={styles.price}>₹{restaurant.price}</Text>
            <Text style={styles.priceSubtext}>per person</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* About Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About Restaurant</Text>
            <Text style={styles.description}>
              Enjoy delicious food made with fresh ingredients and delivered
              hot to your doorstep. Experience premium taste, quick delivery,
              and amazing service.
            </Text>
          </View>

          {/* Highlights */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Why order from here?</Text>
            <View style={styles.highlightsList}>
              {[
                { icon: 'leaf-outline', text: 'Fresh Ingredients' },
                { icon: 'flash-outline', text: 'Quick Delivery' },
                { icon: 'star-outline', text: 'Top Rated Restaurant' },
              ].map((item, index) => (
                <View key={index} style={styles.highlightItem}>
                  <View style={styles.highlightIcon}>
                    <Ionicons name={item.icon} size={18} color="#FF6B00" />
                  </View>
                  <Text style={styles.highlightText}>{item.text}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Menu Preview */}
          <View style={styles.section}>
            <View style={styles.menuHeader}>
              <Text style={styles.sectionTitle}>Popular Items</Text>
              <TouchableOpacity>
                <Text style={styles.viewMenuLink}>View Menu</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuItems}>
              {['Biryani', 'Butter Chicken', 'Naan', 'Garlic Naan', 'Mango Lassi'].map((item, index) => (
                <View key={index} style={styles.menuItemTag}>
                  <Text style={styles.menuItemText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Button */}
      <View style={styles.bottomContainer}>
        <View style={styles.quantityControl}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => quantity > 1 && setQuantity(quantity - 1)}
          >
            <Ionicons name="remove" size={18} color="#FF6B00" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Ionicons name="add" size={18} color="#FF6B00" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => {
            addToCart(restaurant, quantity);
            navigation.navigate('Cart');
          }}
        >
          <Ionicons name="bag-add-outline" size={20} color="#fff" />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -40,
  },

  // Header
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  // Image
  imageContainer: {
    width: '100%',
    height: 220,
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    background: 'linear-gradient(transparent, white)',
  },

  // Content
  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1a1a1a',
  },

  cuisine: {
    fontSize: 14,
    color: '#999',
    fontWeight: '600',
    marginTop: 4,
  },

  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE8D6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    gap: 4,
  },

  ratingText: {
    fontWeight: '700',
    color: '#FF6B00',
    fontSize: 14,
  },

  // Info Pills
  infoPills: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },

  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    gap: 6,
  },

  pillText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },

  // Price Section
  priceSection: {
    marginTop: 20,
    paddingHorizontal: 12,
    paddingVertical: 14,
    backgroundColor: '#FFE8D6',
    borderRadius: 14,
    alignItems: 'center',
  },

  priceLabel: {
    fontSize: 12,
    color: '#FF6B00',
    fontWeight: '600',
  },

  price: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FF6B00',
    marginTop: 4,
  },

  priceSubtext: {
    fontSize: 12,
    color: '#FF6B00',
    fontWeight: '500',
    marginTop: 2,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 20,
  },

  // Sections
  section: {
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
    fontWeight: '500',
  },

  // Highlights
  highlightsList: {
    gap: 12,
  },

  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  highlightIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFE8D6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  highlightText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },

  // Menu
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  viewMenuLink: {
    color: '#FF6B00',
    fontWeight: '700',
    fontSize: 13,
  },

  menuItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  menuItemTag: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFE8D6',
  },

  menuItemText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },

  // Bottom Container
  bottomContainer: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
    gap: 12,
  },

  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a1a',
    minWidth: 20,
    textAlign: 'center',
  },

  addToCartButton: {
    flex: 1,
    height: 52,
    backgroundColor: '#FF6B00',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});