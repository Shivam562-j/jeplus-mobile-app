import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export default function AppHighlightSection() {
  const handleOpenPlayStore = () => {
    Linking.openURL(
      'https://play.google.com/store/apps/details?id=com.medicine.medical.Jepluse'
    ).catch(() => {});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Restock from your counter</Text>
      <Text style={styles.subheading}>
        Empower your pharmacy counter with instantaneous digital orders, margin calculator, and direct dispatch.
      </Text>

      {/* 3 Metric Pills */}
      <View style={styles.metricsRow}>
        <View style={styles.metricCard}>
          <View style={[styles.metricIconWrap, { backgroundColor: '#fee2e2' }]}>
            <Ionicons name="cube" size={16} color="#dc2626" />
          </View>
          <Text style={styles.metricVal}>25k+</Text>
          <Text style={styles.metricLabel}>SKUS</Text>
        </View>

        <View style={styles.metricCard}>
          <View style={[styles.metricIconWrap, { backgroundColor: '#fef3c7' }]}>
            <Ionicons name="repeat" size={16} color="#d97706" />
          </View>
          <Text style={styles.metricVal}>Fast</Text>
          <Text style={styles.metricLabel}>REPEAT ORDERS</Text>
        </View>

        <View style={styles.metricCard}>
          <View style={[styles.metricIconWrap, { backgroundColor: '#fce7f3' }]}>
            <Ionicons name="radio" size={16} color="#db2777" />
          </View>
          <Text style={styles.metricVal}>Live</Text>
          <Text style={styles.metricLabel}>ORDER STATUS</Text>
        </View>
      </View>

      {/* Checklist items */}
      <View style={styles.checklistGrid}>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={18} color="#0284c7" />
          <Text style={styles.checkText}>Search by item name & salt</Text>
        </View>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={18} color="#0284c7" />
          <Text style={styles.checkText}>Reorder regular chemist stock</Text>
        </View>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={18} color="#0284c7" />
          <Text style={styles.checkText}>Check fast moving restocks</Text>
        </View>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={18} color="#0284c7" />
          <Text style={styles.checkText}>Track bills, PDC & invoice history</Text>
        </View>
      </View>

      {/* Google Play Download Button */}
      <TouchableOpacity
        style={styles.downloadBtn}
        onPress={handleOpenPlayStore}
        activeOpacity={0.85}
      >
        <Ionicons name="logo-google-playstore" size={22} color="#ffffff" />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.btnSub}>GET IT ON</Text>
          <Text style={styles.btnTitle}>Google Play</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff7ed',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ffedd5',
  },
  heading: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subheading: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
    marginBottom: 18,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  metricCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fed7aa',
  },
  metricIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  metricVal: {
    fontSize: 15,
    fontWeight: '900',
    color: '#0f172a',
  },
  metricLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 2,
  },
  checklistGrid: {
    gap: 10,
    marginBottom: 20,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },
  downloadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  btnSub: {
    color: '#94a3b8',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  btnTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
  },
});
