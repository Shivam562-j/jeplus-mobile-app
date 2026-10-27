import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PageLayout from './PageLayout';

const FAQS = [
  {
    q: 'How fast is the chemist restock delivery in Delhi & NCR?',
    a: 'Regular orders placed before 2:00 PM are delivered the same day within 3 to 4 hours. Urgent emergency stock requests are routed through dedicated express riders.',
  },
  {
    q: 'What documents are required to register as a chemist?',
    a: 'You need a valid Drug License (Form 20B/21B), GST Registration Certificate, and basic store contact details. Verification is completed within 2 to 4 business hours.',
  },
  {
    q: 'Can I place bulk orders by uploading an Excel sheet or photo?',
    a: 'Yes! You can upload your handwritten shortage slip or Excel list directly via our WhatsApp desk (+91 95820 80649) or through the Bulk Order section in the app.',
  },
  {
    q: 'How are medicine prices and PTR calculated?',
    a: 'PTR is the wholesale Price to Retailer determined under DPCO guidelines. All prices on Jeplus reflect net PTR including GST, ensuring full price transparency and maximum margin visibility.',
  },
  {
    q: 'How do I handle returns for expired or damaged items?',
    a: 'Near-expiry and damaged medicines are collected during our bi-weekly return pickup routes and credit notes are issued directly into your chemist ledger upon verification.',
  },
];

export default function FaqPage({ onBack, onNavigate, onOrderNow }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <PageLayout
      title="Frequently Asked Questions"
      subtitle="Clear answers to common questions about orders, delivery, and payment terms."
      badge="CHEMIST HELP CENTER"
      onBack={onBack}
      onNavigate={onNavigate}
      onOrderNow={onOrderNow}
    >
      <View style={styles.list}>
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <TouchableOpacity
              key={faq.q}
              style={[styles.faqCard, isOpen && styles.faqCardOpen]}
              onPress={() => toggle(idx)}
              activeOpacity={0.8}
            >
              <View style={styles.qRow}>
                <Text style={styles.qText}>{faq.q}</Text>
                <Ionicons
                  name={isOpen ? 'chevron-up' : 'chevron-down'}
                  size={18}
                  color="#0f172a"
                />
              </View>
              {isOpen && <Text style={styles.aText}>{faq.a}</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 12,
  },
  faqCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  faqCardOpen: {
    backgroundColor: '#eff6ff',
    borderColor: '#bfdbfe',
  },
  qRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  qText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '800',
    color: '#0f172a',
    lineHeight: 18,
  },
  aText: {
    fontSize: 12,
    color: '#475569',
    marginTop: 10,
    lineHeight: 18,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 8,
  },
});
