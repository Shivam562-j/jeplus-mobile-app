import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import { MOCK_STATS, MOCK_TRUST_PILLS } from '../data/mockData';

export default function HeroSection({ onPlaceOrder, onRegisterChemist }) {
  return (
    <View style={styles.container}>
      {/* Background subtle mesh decoration */}
      <View style={styles.badgeRow}>
        <View style={styles.pillBadge}>
          <View style={styles.pillDot} />
          <Text style={styles.pillText}>PHARMA DISTRIBUTOR FOR CHEMISTS</Text>
        </View>
      </View>

      {/* Main Hero Heading */}
      <Text style={styles.mainTitle}>
        Order faster.{'\n'}
        <Text style={styles.highlightText}>Restock smarter.</Text>
      </Text>

      {/* Subheading */}
      <Text style={styles.subtitle}>
        Medicines, generics, surgical, ayurvedic and speciality items for your pharmacy.
      </Text>

      {/* Primary Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={onPlaceOrder}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryBtnText}>Place Order</Text>
          <Ionicons name="arrow-forward" size={16} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={onRegisterChemist}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryBtnText}>Register Chemist</Text>
          <Ionicons name="add" size={16} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {/* Key Statistics Strip */}
      <View style={styles.statsCard}>
        {MOCK_STATS.map((stat, idx) => (
          <React.Fragment key={stat.label}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
            {idx < MOCK_STATS.length - 1 && <View style={styles.statDivider} />}
          </React.Fragment>
        ))}
      </View>

      {/* Trust Micro Badges */}
      <View style={styles.trustBadgesRow}>
        {MOCK_TRUST_PILLS.map((pill) => (
          <View key={pill.text} style={styles.trustPill}>
            <Ionicons
              name={
                pill.icon === 'sparkles'
                  ? 'sparkles'
                  : pill.icon === 'checkmark'
                  ? 'checkmark-circle'
                  : 'add-circle'
              }
              size={12}
              color={COLORS.accent}
            />
            <Text style={styles.trustPillText}>{pill.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
  },
  badgeRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  pillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#dbeafe',
  },
  pillDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e11d48',
    marginRight: 6,
  },
  pillText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1e40af',
    letterSpacing: 0.5,
  },
  mainTitle: {
    fontSize: 34,
    fontWeight: '900',
    color: '#0f172a',
    lineHeight: 40,
    letterSpacing: -0.8,
    marginBottom: 10,
  },
  highlightText: {
    color: '#e11d48',
  },
  subtitle: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 21,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 22,
  },
  primaryBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    paddingVertical: 13,
    borderRadius: 14,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  primaryBtnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  secondaryBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    paddingVertical: 13,
    borderRadius: 14,
    gap: 6,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  secondaryBtnText: {
    color: '#0f172a',
    fontSize: 14,
    fontWeight: '700',
  },
  statsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 14,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 19,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: -0.3,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748b',
    marginTop: 2,
    letterSpacing: 0.5,
  },
  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: '#e2e8f0',
  },
  trustBadgesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  trustPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 5,
  },
  trustPillText: {
    fontSize: 11,
    color: '#475569',
    fontWeight: '600',
  },
});
