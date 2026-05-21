import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function RestaurantCard({
  item,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <View>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
        <View style={styles.ratingBadge}>
          <Ionicons
            name="star"
            size={13}
            color="#FFD700"
          />

          <Text style={styles.ratingText}>
            {item.rating}
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          {item.name}
        </Text>

        <Text style={styles.cuisine}>
          {item.cuisine}
        </Text>

        <View style={styles.bottomRow}>
          <View style={styles.deliveryContainer}>
            <Ionicons
              name="time-outline"
              size={16}
              color="#FF6B00"
            />

            <Text style={styles.deliveryText}>
              25-30 mins
            </Text>
          </View>
          <View style={styles.distanceContainer}>
            <Ionicons
              name="location-outline"
              size={16}
              color="#FF6B00"
            />
            <Text style={styles.distanceText}>
              3.2 km
            </Text>
        </View>

          <Text style={styles.price}>
            ₹ {item.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 5,
  },

  image: {
    width: '100%',
    height: 180,
  },

  ratingBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },

  ratingText: {
    marginLeft: 4,
    fontWeight: '700',
    color: '#222',
  },

  content: {
    padding: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#222',
  },

  cuisine: {
    marginTop: 6,
    fontSize: 13,
    color: '#777',
  },

  bottomRow: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF4EC',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },

  deliveryText: {
    marginLeft: 5,
    fontSize: 13,
    fontWeight: '600',
    color: '#FF6B00',
  },
  distanceContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF4EC',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    marginLeft: -10,
  },
  distanceText: {
    marginLeft: 5,
    fontSize: 13,
    fontWeight: '600',
    color: '#FF6B00',
  },

  price: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FF6B00',
  },
});