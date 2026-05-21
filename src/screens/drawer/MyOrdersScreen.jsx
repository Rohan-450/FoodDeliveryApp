import { useState } from 'react';

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

// Sample orders data
const restaurants = [
  {
    id: '1',
    name: 'Burger Hub',
    cuisine: 'Western',
    price: 250,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    date: '15 May 2024',
    time: '7:30 PM',
    status: 'Delivered',
    items: 3,
  },
  {
    id: '2',
    name: 'Pizza Heaven',
    cuisine: 'Italian',
    price: 450,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    date: '12 May 2024',
    time: '8:15 PM',
    status: 'Delivered',
    items: 2,
  },
  {
    id: '3',
    name: 'Spice Garden',
    cuisine: 'Indian',
    price: 320,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
    date: '10 May 2024',
    time: '6:45 PM',
    status: 'Delivered',
    items: 4,
  },
  {
    id: '4',
    name: 'Royal Biryani',
    cuisine: 'Indian',
    price: 380,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1633945274405-b6c8069047b0',
    date: '8 May 2024',
    time: '7:00 PM',
    status: 'Delivered',
    items: 2,
  },
  {
    id: '5',
    name: 'Italiano',
    cuisine: 'Italian',
    price: 299,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9',
    date: '5 May 2024',
    time: '9:00 PM',
    status: 'Delivered',
    items: 3,
  },
  {
    id: '6',
    name: 'Momo Street',
    cuisine: 'Chinese',
    price: 180,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    date: '2 May 2024',
    time: '7:30 PM',
    status: 'Delivered',
    items: 5,
  },
];

export default function MyOrdersScreen({ navigation }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return '#22c55e';
      case 'Cancelled':
        return '#ef4444';
      case 'Pending':
        return '#f59e0b';
      default:
        return '#FF6B00';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return 'checkmark-circle';
      case 'Cancelled':
        return 'close-circle';
      case 'Pending':
        return 'time';
      default:
        return 'help-circle';
    }
  };

  const filteredOrders =
    selectedFilter === 'all'
      ? restaurants
      : restaurants.filter(
          (order) =>
            order.status.toLowerCase() === selectedFilter.toLowerCase()
        );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>My Orders</Text>
        <Text style={styles.subheading}>
          {restaurants.length} orders placed
        </Text>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          {['all', 'Delivered', 'Pending'].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterTab,
                selectedFilter === filter && styles.filterTabActive,
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter && styles.filterTextActive,
                ]}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Orders List */}
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.orderCard}
            activeOpacity={0.7}
          >
            {/* Image */}
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />

              {/* Status Badge */}
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusColor(item.status) },
                ]}
              >
                <Ionicons
                  name={getStatusIcon(item.status)}
                  size={12}
                  color="#fff"
                />
                <Text style={styles.statusText}>{item.status}</Text>
              </View>

              {/* Rating */}
              <View style={styles.ratingBadge}>
                <Ionicons name="star" size={12} color="#FFD700" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>

            {/* Content */}
            <View style={styles.content}>
              {/* Title and Info */}
              <View style={styles.header1}>
                <View style={styles.titleSection}>
                  <Text style={styles.title} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={styles.cuisine}>{item.cuisine}</Text>
                </View>
              </View>

              {/* Date and Items */}
              <View style={styles.metaInfo}>
                <View style={styles.dateSection}>
                  <Ionicons name="calendar-outline" size={13} color="#999" />
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.itemsSection}>
                  <Ionicons name="bag-outline" size={13} color="#999" />
                  <Text style={styles.itemsText}>{item.items} items</Text>
                </View>
              </View>

              {/* Price and Reorder */}
              <View style={styles.footer}>
                <Text style={styles.price}>₹{item.price}</Text>
                <TouchableOpacity style={styles.reorderButton}>
                  <Text style={styles.reorderText}>Reorder</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const ScrollView = ({ children, ...props }) => (
  <View {...props}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: -40,
  },

  // Header
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  heading: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1a1a1a',
    marginBottom: 4,
  },

  subheading: {
    fontSize: 13,
    color: '#999',
    fontWeight: '600',
  },

  // Filter
  filterContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  filterScroll: {
    gap: 8,
  },

  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
  },

  filterTabActive: {
    backgroundColor: '#FF6B00',
  },

  filterText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#666',
  },

  filterTextActive: {
    color: '#fff',
  },

  // List
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },

  // Order Card
  orderCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },

  imageWrapper: {
    position: 'relative',
    width: 110,
    height: 140,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  statusBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 3,
  },

  statusText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },

  ratingBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 2,
  },

  ratingText: {
    fontWeight: '600',
    color: '#222',
    fontSize: 11,
  },

  // Content
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },

  header1: {
    marginBottom: 6,
  },

  titleSection: {
    gap: 2,
  },

  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a1a',
  },

  cuisine: {
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  },

  // Meta Info
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },

  dateSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  dateText: {
    fontSize: 11,
    color: '#999',
    fontWeight: '500',
  },

  divider: {
    width: 1,
    height: 12,
    backgroundColor: '#e0e0e0',
  },

  itemsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  itemsText: {
    fontSize: 11,
    color: '#999',
    fontWeight: '500',
  },

  // Footer
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FF6B00',
  },

  reorderButton: {
    backgroundColor: '#FFE8D6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  reorderText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FF6B00',
  },
});