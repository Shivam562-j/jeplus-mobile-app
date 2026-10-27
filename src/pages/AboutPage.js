import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PageLayout from './PageLayout';
import { COLORS } from '../theme/colors';

export default function AboutPage({ onBack, onNavigate, onOrderNow }) {
  return (
    <PageLayout
      title="About Jeplus"
      subtitle="One of the leading pharmaceutical distribution networks across Delhi & NCR."
      badge="ESTABLISHED 2018"
      onBack={onBack}
      onNavigate={onNavigate}
      onOrderNow={onOrderNow}
    >
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Who We Are</Text>
        <Text style={styles.paragraph}>
          Jeplus Healthcare Pvt. Ltd. is one of the premier distribution groups for pharmaceutical goods in Delhi & NCR. We provide genuine, temperature-controlled medicines and healthcare essentials to retail chemists, doctors, nursing homes, hospitals, and medical institutions.
        </Text>
        <Text style={styles.paragraph}>
          With over 25,000+ SKUs and partnerships with 350+ certified manufacturers, our goal is to empower pharmacy counters with rapid 3-hour dispatch, transparent wholesale PTR rates, and digital ordering convenience.
        </Text>
      </View>

      <View style={styles.metricsRow}>
        <View style={styles.metricBox}>
          <Text style={styles.metricVal}>25,000+</Text>
          <Text style={styles.metricLabel}>Active SKUs</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricVal}>1,000+</Text>
          <Text style={styles.metricLabel}>Partner Chemists</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricVal}>350+</Text>
          <Text style={styles.metricLabel}>Pharma Brands</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Our Distribution Strengths</Text>

        <View style={styles.strengthItem}>
          <Ionicons name="shield-checkmark" size={20} color="#0284c7" />
          <View style={{ flex: 1 }}>
            <Text style={styles.strengthTitle}>100% Genuine Pharma Supply</Text>
            <Text style={styles.strengthDesc}>
              All medicines are directly sourced from certified manufacturing lines with batch testing and verifiable GST invoices.
            </Text>
          </View>
        </View>

        <View style={styles.strengthItem}>
          <Ionicons name="snow" size={20} color="#0284c7" />
          <View style={{ flex: 1 }}>
            <Text style={styles.strengthTitle}>Cold Chain Logistics</Text>
            <Text style={styles.strengthDesc}>
              Insulins, vaccines, and biologics are preserved in validated 2°C - 8°C cold boxes during urban transit.
            </Text>
          </View>
        </View>

        <View style={styles.strengthItem}>
          <Ionicons name="speedometer" size={20} color="#0284c7" />
          <View style={{ flex: 1 }}>
            <Text style={styles.strengthTitle}>Express 3-Hour Restock</Text>
            <Text style={styles.strengthDesc}>
              Urgent prescription restocks dispatched swiftly across South Delhi, Noida, Gurgaon, and NCR.
            </Text>
          </View>
        </View>
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
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
    marginBottom: 10,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  metricBox: {
    flex: 1,
    backgroundColor: '#fff1f2',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffe4e6',
  },
  metricVal: {
    fontSize: 16,
    fontWeight: '900',
    color: '#e11d48',
  },
  metricLabel: {
    fontSize: 10,
    color: '#64748b',
    fontWeight: '600',
    marginTop: 2,
    textAlign: 'center',
  },
  strengthItem: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  strengthTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 2,
  },
  strengthDesc: {
    fontSize: 12,
    color: '#64748b',
    lineHeight: 17,
  },
});
