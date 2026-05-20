import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function OnboardingScreen({
  navigation,
}) {
  return (
    <LinearGradient
      colors={['#FF6B00', '#FF8E3C']}
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
      />

      <SafeAreaView style={styles.safeArea}>
        {/* Top Food Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
            }}
            style={styles.image}
          />
        </View>

        {/* Bottom Content */}
        <View style={styles.content}>
          <Text style={styles.title}>
            Zomato
          </Text>

          <Text style={styles.subtitle}>
            Discover top restaurants and enjoy
            your favorite meals delivered to your
            doorstep in minutes.
          </Text>

          {/* Features */}
          <View style={styles.featuresContainer}>
            <View style={styles.featureCard}>
              <Text style={styles.featureEmoji}>
                🚀
              </Text>

              <Text style={styles.featureText}>
                Fast         Delivery
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureEmoji}>
                🍕
              </Text>

              <Text style={styles.featureText}>
                Top Restaurants
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureEmoji}>
                💳
              </Text>

              <Text style={styles.featureText}>
                Easy       Payments
              </Text>
            </View>
          </View>

          {/* Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.9}
            onPress={() =>
              navigation.navigate('Login')
            }
          >
            <Text style={styles.buttonText}>
              Get Started
            </Text>
          </TouchableOpacity>

          {/* Footer */}
          <Text style={styles.footerText}>
            Experience food delivery like never
            before.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 90,
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 160,
    borderWidth: 6,
    borderColor: 'rgba(255,255,255,0.2)',
  },

  content: {
    backgroundColor: '#fff',

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    paddingHorizontal: 28,
    paddingTop: 35,
    paddingBottom: 40,
    marginBottom: -20,
  },

  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#222',
    lineHeight: 46,
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 28,
    color: '#666',
    textAlign: 'center',
  },

  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  featureCard: {
    width: '31%',
    backgroundColor: '#FFF4EC',
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },

  featureEmoji: {
    fontSize: 28,
  },

  featureText: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },

  button: {
    marginTop: 35,
    height: 60,

    backgroundColor: '#FF6B00',

    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#FF6B00',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },

  footerText: {
    marginTop: 18,
    textAlign: 'center',
    color: '#999',
    fontSize: 14,
  },
});