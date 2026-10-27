import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PageLayout from './PageLayout';

export default function TermsPage({ onBack, onNavigate, onOrderNow }) {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="Terms governing pharmaceutical distribution, chemist accounts, and payment settlements."
      badge="TERMS & CONDITIONS"
      onBack={onBack}
      onNavigate={onNavigate}
      onOrderNow={onOrderNow}
    >
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>1. Wholesale Eligibility</Text>
        <Text style={styles.paragraph}>
          Sale and supply of schedule H, H1, X, and general medicines is strictly restricted to licensed retailers, clinics, nursing homes, and hospitals possessing valid Form 20B/21B Drug Licenses and GST registration.
        </Text>

        <Text style={styles.sectionTitle}>2. Pricing & PTR Rates</Text>
        <Text style={styles.paragraph}>
          All prices displayed are wholesale Price to Retailer (PTR) inclusive of applicable Central & State GST. Manufacturer price revisions take immediate effect upon circular notification.
        </Text>

        <Text style={styles.sectionTitle}>3. Payment Terms & PDC</Text>
        <Text style={styles.paragraph}>
          Invoices are due as per agreed credit periods (typically 7, 15, or 21 days). Post-Dated Cheques (PDC) or RTGS/NEFT transfers must be settled on or before due date to maintain active delivery lines.
        </Text>

        <Text style={styles.sectionTitle}>4. Jurisdiction</Text>
        <Text style={styles.paragraph}>
          All contracts and disputes arising from supply transactions are subject exclusively to the jurisdiction of the competent courts in New Delhi.
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
});
