import React from 'react';

import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import RestaurantCard from '../../components/RestaurantCard';
import { restaurants } from '../../data/Restaurant';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />


      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>
            Welcome, Rohan
          </Text>

          <View style={styles.locationRow}>
            <MaterialCommunityIcons
              name="map-marker"
              size={18}
              color="#FF6B00"
            />

            <Text style={styles.locationText}>
              Kolkata, West Bengal
            </Text>
          </View>
        </View>

        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/a7/4a/7a/a74a7ac388624bfbc7ae863fe3a9b4b2.jpg',
          }}
          style={styles.profileImage}
        />
      </View>

      {/* Promo Banner */}
      <View style={styles.banner}>
        <View style={{ flex: 1 }}>
          <Text style={styles.bannerTitle}>
            Free Delivery 🍔
          </Text>

          <Text style={styles.bannerSubtitle}>
            On all orders above ₹299
          </Text>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {[
            '🍕 Pizza',
            '🍔 Burger',
            '🍜 Noodles',
            '🌮 Snacks',
            '🥗 Healthy',
          ].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.categoryChip}
            >
              <Text style={styles.categoryText}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Popular Restaurants
        </Text>

        <TouchableOpacity>
          <Text style={styles.seeAllText}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* Restaurant Cards */}
        {restaurants.map((item) => (
          <RestaurantCard
            key={item.id}
            item={item}
            onPress={() =>
              navigation.navigate('RestaurantDetails', {
                restaurant: item,
              })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    marginTop: -30,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#FF6B00',
  },

  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  welcomeText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#222',
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  locationText: {
    marginLeft: 4,
    color: '#666',
    fontSize: 15,
    fontWeight: '500',
  },

  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6B00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
  marginTop: 25,
  backgroundColor: '#FF6B00',
  borderRadius: 28,
  padding: 22,
  flexDirection: 'row',
  alignItems: 'center',
  overflow: 'hidden',
},

bannerTitle: {
  color: '#fff',
  fontSize: 28,
  fontWeight: '800',
},

bannerSubtitle: {
  color: 'rgba(255,255,255,0.9)',
  marginTop: 8,
  fontSize: 15,
},

orderButton: {
  marginTop: 18,
  backgroundColor: '#fff',
  paddingVertical: 10,
  paddingHorizontal: 18,
  borderRadius: 14,
  alignSelf: 'flex-start',
},

orderButtonText: {
  color: '#FF6B00',
  fontWeight: '700',
},

bannerImage: {
  width: 120,
  height: 120,
  borderRadius: 60,
  marginLeft: 10,
},

categoriesContainer: {
  marginTop: 22,
},

categoryChip: {
  backgroundColor: '#fff',
  paddingVertical: 12,
  paddingHorizontal: 18,
  borderRadius: 16,
  marginRight: 12,
},

categoryText: {
  fontSize: 14,
  fontWeight: '700',
  color: '#333',
},

  searchBar: {
    marginTop: 25,
    height: 58,
    backgroundColor: '#fff',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: -10,
  },

  searchText: {
    marginLeft: 10,
    color: '#999',
    fontSize: 15,
  },

  banner: {
    backgroundColor: '#FF6B00',
    borderRadius: 24,
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },

  bannerTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '800',
  },

  bannerSubtitle: {
    color: '#fff',
    marginTop: 6,
    fontSize: 15,
  },

  orderButton: {
    marginTop: 18,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },

  orderButtonText: {
    color: '#FF6B00',
    fontWeight: '700',
  },

  sectionHeader: {
    marginTop: 30,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#222',
  },

  seeAllText: {
    color: '#FF6B00',
    fontWeight: '700',
  },
});