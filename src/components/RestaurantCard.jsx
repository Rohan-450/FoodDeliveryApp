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
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

        <View style={styles.ratingBadge}>
          <Ionicons name="star" size={12} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.cuisine}>{item.cuisine}</Text>

        <View style={styles.metaRow}>
          <View style={styles.leftMeta}>
            <View style={styles.metaItem}>
              <Ionicons
                name="time-outline"
                size={14}
                color="#FF6B00"
              />
              <Text style={styles.metaText}>
                25-30 mins
              </Text>
            </View>

            <View style={styles.metaItem}>
              <Ionicons
                name="location-outline"
                size={14}
                color="#FF6B00"
              />
              <Text style={styles.metaText}>
                3.2 km
              </Text>
            </View>
          </View>
          <View style={styles.metaDivider} />
          <Text style={styles.price}>₹{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
    marginHorizontal: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: 160,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  ratingBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 3,
  },

  ratingText: {
    fontWeight: '600',
    color: '#222',
    fontSize: 12,
  },

  content: {
    padding: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },

  cuisine: {
    fontSize: 12,
    color: '#999',
    fontWeight: '400',
    marginBottom: 10,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginRight: 14,
  },

  metaText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#FF6B00',
  },

  metaDivider: {
    width: 1,
    height: 14,
    backgroundColor: '#e0e0e0',
  },

  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF6B00',
  },
});