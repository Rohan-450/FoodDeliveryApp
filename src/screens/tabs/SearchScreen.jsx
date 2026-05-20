// src/screens/tabs/SearchScreen.jsx

import React, { useState } from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import RestaurantCard from '../../components/RestaurantCard';
import { restaurants } from '../../data/Restaurant';


export default function SearchScreen({
  navigation,
}) {
  const [search, setSearch] = useState('');

  const filteredRestaurants =
    restaurants.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.heading}>
        Search Restaurants
      </Text>

      <Text style={styles.subHeading}>
        Discover your favorite food places
      </Text>

      {/* Search Box */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={22}
          color="#999"
        />

        <TextInput
          placeholder="Search restaurants..."
          placeholderTextColor="#999"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Restaurant List */}
      <FlatList
        data={filteredRestaurants}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        renderItem={({ item }) => (
          <RestaurantCard
            item={item}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons
              name="search-outline"
              size={70}
              color="#CCC"
            />

            <Text style={styles.emptyText}>
              No restaurants found
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 12,
    paddingTop: 10,
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
    marginBottom: 24,
  },

  searchContainer: {
    height: 58,
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: '#222',
  },

  emptyContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '700',
    color: '#999',
  },
});