import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HelpScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>
        Help & Support
      </Text>

      <Text style={styles.subHeading}>
        How can we help you today?
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="receipt-outline"
              size={24}
              color="#FF6B00"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>
              Order Issues
            </Text>

            <Text style={styles.description}>
              Problems related to orders,
              cancellations or refunds.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#999"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="wallet-outline"
              size={24}
              color="#FF6B00"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>
              Payment Support
            </Text>

            <Text style={styles.description}>
              Payment failed or money deducted
              related help.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#999"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="call-outline"
              size={24}
              color="#FF6B00"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>
              Contact Us
            </Text>

            <Text style={styles.description}>
              Reach out to our support team
              anytime.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#999"
          />
        </TouchableOpacity>

        <Text style={styles.faqHeading}>
          Frequently Asked Questions
        </Text>

        <View style={styles.faqCard}>
          <Text style={styles.question}>
            How to track my order?
          </Text>

          <Text style={styles.answer}>
            Go to Orders section to see the
            current delivery status.
          </Text>
        </View>

        <View style={styles.faqCard}>
          <Text style={styles.question}>
            Can I cancel an order?
          </Text>

          <Text style={styles.answer}>
            Yes, orders can be cancelled before
            preparation starts.
          </Text>
        </View>

        <View style={styles.faqCard}>
          <Text style={styles.question}>
            How do refunds work?
          </Text>

          <Text style={styles.answer}>
            Refunds are processed within 5-7
            business days.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingTop: -15,
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
    marginBottom: 28,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 16,
    backgroundColor: '#FFF4EC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flex: 1,
    marginLeft: 16,
  },

  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
  },

  description: {
    marginTop: 5,
    fontSize: 13,
    color: '#777',
    lineHeight: 20,
  },

  faqHeading: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 22,
    fontWeight: '800',
    color: '#222',
  },

  faqCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },

  question: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  answer: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
  },
});