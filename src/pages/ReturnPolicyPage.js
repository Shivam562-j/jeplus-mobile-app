import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PageLayout from './PageLayout';

export default function ReturnPolicyPage({ onBack, onNavigate, onOrderNow }) {
  return (
    <PageLayout
      title="Return & Expiry Policy"
      subtitle="Standard Operating Procedures for chemist returns, transit breakages, and near-expiry goods."
      badge="POLICIES & RETURNS"
      onBack={onBack}
      onNavigate={onNavigate}
      onOrderNow={onOrderNow}
    >
      <View style={styles.card}>
        <View style={styles.iconHeading}>
          <Ionicons name="alert-circle" size={20} color="#e11d48" />
          <Text style={styles.sectionTitle}>Transit Breakage & Shortage Claims</Text>
        </View>
        <Text style={styles.paragraph}>
          Any damaged packs, seal tampering, or shortages must be reported within 24 hours of delivery counter receipt with invoice details to our dispatch desk via WhatsApp or phone.
        </Text>

        <View style={styles.iconHeading}>
          <Ionicons name="calendar" size={20} color="#0284c7" />
          <Text style={styles.sectionTitle}>Expiry & Breakage Returns</Text>
        </View>
        <Text style={styles.paragraph}>
          Near-expiry items are accepted as per respective manufacturing company policies (generally within 3 to 6 months prior to expiry date). Credit notes are issued upon physical inspection at our Okhla hub.
        </Text>

        <View style={styles.iconHeading}>
          <Ionicons name="receipt" size={20} color="#16a34a" />
          <Text style={styles.sectionTitle}>Credit Note Issuance</Text>
        </View>
        <Text style={styles.paragraph}>
          Approved returns are credited against the chemist's account ledger within 5 business days and adjusted against future restock invoices.
        </Text>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  iconHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0f172a',
  },
  paragraph: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
    marginBottom: 12,
  },
});
