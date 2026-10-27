import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import { MOCK_ACTIONS } from '../data/mockData';

export default function DailyActionsGrid({
  onSelectAction,
  onTrackOrder,
  onSupport,
}) {
  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <View style={styles.actionIconContainer}>
            <Ionicons name="cart" size={16} color="#ffffff" />
          </View>
          <View>
            <Text style={styles.sectionTitle}>Daily pharmacy actions</Text>
            <Text style={styles.sectionSub}>Quick access to everything at your counter</Text>
          </View>
        </View>

        <View style={styles.trustedSupplyBadge}>
          <Ionicons name="sparkles" size={12} color="#e11d48" />
          <Text style={styles.trustedSupplyText}>Trusted Supply</Text>
        </View>
      </View>

      {/* 2x2 Action Cards Grid */}
      <View style={styles.grid}>
        {MOCK_ACTIONS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.card, { backgroundColor: item.bg }]}
            onPress={() => onSelectAction(item.id)}
            activeOpacity={0.8}
          >
            <View style={styles.cardTopRow}>
              <View style={styles.tagPill}>
                <Ionicons name={item.icon} size={13} color={item.color} style={{ marginRight: 4 }} />
                <Text style={[styles.cardTag, { color: item.color }]}>{item.tag}</Text>
              </View>
              <Ionicons name="chevron-forward" size={14} color="#94a3b8" />
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Mini Support & Track Order Strip */}
      <View style={styles.bottomStrips}>
        <TouchableOpacity
          style={styles.trackCard}
          onPress={onTrackOrder}
          activeOpacity={0.85}
        >
          <View style={styles.trackIconWrap}>
            <Ionicons name="cube-outline" size={16} color="#ffffff" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.trackTitle}>Track your order</Text>
            <Text style={styles.trackSub}>Live order status</Text>
          </View>
          <View style={styles.trackBadge}>
            <Text style={styles.trackBadgeText}>Delivery Under 3 Hrs</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.supportCard}
          onPress={onSupport}
          activeOpacity={0.85}
        >
          <Ionicons name="shield-checkmark" size={16} color="#0284c7" />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.supportTitle}>Reliable Support</Text>
            <Text style={styles.supportSub}>Here when you need us</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  actionIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e11d48',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0f172a',
  },
  sectionSub: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 1,
  },
  trustedSupplyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff1f2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffe4e6',
    gap: 4,
  },
  trustedSupplyText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#be123c',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 14,
  },
  card: {
    width: '48%',
    flexGrow: 1,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  tagPill: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTag: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 11,
    color: '#64748b',
    lineHeight: 16,
  },
  bottomStrips: {
    gap: 10,
  },
  trackCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 10,
  },
  trackIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackTitle: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  trackSub: {
    color: '#94a3b8',
    fontSize: 10,
  },
  trackBadge: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  trackBadgeText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  supportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  supportTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0f172a',
  },
  supportSub: {
    fontSize: 10,
    color: '#64748b',
  },
});
