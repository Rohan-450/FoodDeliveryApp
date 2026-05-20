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
import { useCart } from '../../context/CartContext';

export default function RestaurantDetailsScreen({
  route,
  navigation,
}) {
  const { restaurant } = route.params;

  const { addToCart } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image */}
        <View>
          <Image
            source={{ uri: restaurant.image }}
            style={styles.image}
          />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.topRow}>
            <Text style={styles.title}>
              {restaurant.name}
            </Text>

            <View style={styles.ratingContainer}>
              <Ionicons
                name="star"
                size={16}
                color="#FFD700"
              />

              <Text style={styles.ratingText}>
                {restaurant.rating}
              </Text>
            </View>
          </View>

          <Text style={styles.cuisine}>
            {restaurant.cuisine}
          </Text>

          <Text style={styles.price}>
            ₹ {restaurant.price} for one
          </Text>

          {/* Description */}
          <Text style={styles.sectionTitle}>
            About Restaurant
          </Text>

          <Text style={styles.description}>
            Enjoy delicious food made with fresh
            ingredients and delivered hot to your
            doorstep. Experience premium taste,
            quick delivery, and amazing service.
          </Text>

          {/* Delivery Info */}
          <View style={styles.infoContainer}>
            <View style={styles.infoCard}>
              <Ionicons
                name="time-outline"
                size={24}
                color="#FF6B00"
              />

              <Text style={styles.infoText}>
                30 mins
              </Text>
            </View>

            <View style={styles.infoCard}>
              <Ionicons
                name="bicycle-outline"
                size={24}
                color="#FF6B00"
              />

              <Text style={styles.infoText}>
                Free Delivery
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => {
            addToCart(restaurant);

            navigation.navigate('Cart');
          }}
        >
          <Text style={styles.cartButtonText}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -45,
  },

  image: {
    width: '100%',
    height: 300,
    marginTop: -20,
  },

  content: {
    padding: 22,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#222',
    flex: 1,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fffbf7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },

  ratingText: {
    marginLeft: 5,
    fontWeight: '700',
    color: '#222',
  },

  cuisine: {
    marginTop: 10,
    fontSize: 17,
    color: '#666',
  },

  price: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '700',
    color: '#FF6B00',
  },

  sectionTitle: {
    marginTop: 28,
    fontSize: 22,
    fontWeight: '800',
    color: '#222',
  },

  description: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 26,
    color: '#666',
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },

  infoCard: {
    width: '48%',
    backgroundColor: '#F8F8F8',
    borderRadius: 18,
    paddingVertical: 22,
    alignItems: 'center',
  },

  infoText: {
    marginTop: 10,
    fontWeight: '700',
    color: '#333',
  },

  bottomContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },

  cartButton: {
    height: 58,
    backgroundColor: '#FF6B00',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});