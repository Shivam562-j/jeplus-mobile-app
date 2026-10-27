import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_FEATURES, MOCK_MILESTONES } from '../data/mockData';
import { COLORS } from '../theme/colors';

export default function FeaturesGridSection({ onStartOrder, onKnowMore }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.badgeWrap}>
          <Text style={styles.badgeText}>ABOUT JEPLUS</Text>
        </View>
        <Text style={styles.title}>Built for daily pharmacy supply</Text>
        <Text style={styles.subtitle}>
          Streamlined supply chain engineered exclusively for retail pharmacies, clinics, and healthcare institutions.
        </Text>

        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.startOrderBtn}
            onPress={onStartOrder}
            activeOpacity={0.85}
          >
            <Text style={styles.startOrderText}>Start Order</Text>
            <Ionicons name="arrow-forward" size={14} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.knowMoreBtn}
            onPress={onKnowMore}
            activeOpacity={0.8}
          >
            <Text style={styles.knowMoreText}>Know More</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 4 Cards Grid */}
      <View style={styles.cardsGrid}>
        {MOCK_FEATURES.map((feat) => (
          <View key={feat.id} style={styles.featCard}>
            <View style={[styles.featIconWrap, { backgroundColor: '#eff6ff' }]}>
              <Ionicons name={feat.icon} size={22} color={feat.color} />
            </View>
            <Text style={styles.featTitle}>{feat.title}</Text>
            <Text style={styles.featDesc}>{feat.desc}</Text>
          </View>
        ))}
      </View>

      {/* Milestones Strip */}
      <View style={styles.milestonesCard}>
        <View style={styles.milestonesGrid}>
          {MOCK_MILESTONES.map((m) => (
            <View key={m.label} style={styles.milestoneItem}>
              <Text style={styles.milestoneVal}>{m.value}</Text>
              <Text style={styles.milestoneLabel}>{m.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
  },
  badgeWrap: {
    alignSelf: 'flex-start',
    backgroundColor: '#eff6ff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dbeafe',
    marginBottom: 8,
  },
  badgeText: {
    color: '#0284c7',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: -0.6,
    lineHeight: 32,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 19,
    marginBottom: 16,
  },
  btnRow: {
    flexDirection: 'row',
    gap: 12,
  },
  startOrderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    gap: 6,
  },
  startOrderText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
  knowMoreBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  knowMoreText: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '700',
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 22,
  },
  featCard: {
    width: '48%',
    flexGrow: 1,
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  featIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  featTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 4,
  },
  featDesc: {
    fontSize: 11,
    color: '#64748b',
    lineHeight: 16,
  },
  milestonesCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  milestonesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },
  milestoneItem: {
    width: '30%',
    alignItems: 'center',
  },
  milestoneVal: {
    fontSize: 18,
    fontWeight: '900',
    color: '#e11d48',
    letterSpacing: -0.5,
  },
  milestoneLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#64748b',
    marginTop: 2,
    textAlign: 'center',
  },
});
