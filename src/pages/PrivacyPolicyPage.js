import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PageLayout from './PageLayout';

export default function PrivacyPolicyPage({ onBack, onNavigate, onOrderNow }) {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How Jeplus Healthcare Pvt. Ltd. handles and protects chemist and institutional data."
      badge="LEGAL & PRIVACY"
      onBack={onBack}
      onNavigate={onNavigate}
      onOrderNow={onOrderNow}
    >
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>1. Information We Collect</Text>
        <Text style={styles.paragraph}>
          We collect pharmacy store names, registered pharmacist contact details, Drug License (DL) numbers, GSTIN, and delivery addresses solely for verifiable pharmaceutical distribution and billing.
        </Text>

        <Text style={styles.sectionTitle}>2. Use of Chemist Records</Text>
        <Text style={styles.paragraph}>
          Collected information is strictly utilized to process chemist restock dispatches, issue statutory GST invoices, monitor credit/PDC facilities, and notify pharmacies regarding batch recalls and manufacturer schemes.
        </Text>

        <Text style={styles.sectionTitle}>3. Data Protection & Security</Text>
        <Text style={styles.paragraph}>
          All transactions and account credentials are encrypted following industry-standard SSL/TLS protocols and compliant with the Digital Personal Data Protection (DPDP) Act of India.
        </Text>

        <Text style={styles.sectionTitle}>4. Contact for Privacy Inquiries</Text>
        <Text style={styles.paragraph}>
          For data rectification or deletion inquiries, email us at <Text style={styles.bold}>info@jeplus.in</Text> or visit our Okhla Phase I central facility.
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
  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0f172a',
    marginTop: 10,
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
    marginBottom: 10,
  },
  bold: {
    fontWeight: '700',
    color: '#0f172a',
  },
});
