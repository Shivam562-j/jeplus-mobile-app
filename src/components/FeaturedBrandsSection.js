import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_BRANDS } from '../data/mockData';

export default function FeaturedBrandsSection({ onSelectBrand }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <View style={styles.badgeWrap}>
            <Text style={styles.badgeText}>TRUSTED MANUFACTURERS</Text>
          </View>
          <Text style={styles.title}>Featured Brands</Text>
          <View style={styles.accentBar} />
        </View>

        <View style={styles.brandCountBadge}>
          <Text style={styles.brandCountText}>350+ Brands</Text>
        </View>
      </View>

      {/* Brands List */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollList}
      >
        {MOCK_BRANDS.map((brand) => (
          <TouchableOpacity
            key={brand.id}
            style={styles.brandCard}
            onPress={() => onSelectBrand && onSelectBrand(brand)}
            activeOpacity={0.8}
          >
            <View style={styles.brandLogoWrap}>
              <Ionicons name="business-outline" size={24} color="#0284c7" />
            </View>
            <Text style={styles.brandName}>{brand.name}</Text>
            <Text style={styles.brandSub}>{brand.subtitle}</Text>
            <View style={styles.originPill}>
              <Text style={styles.originText}>{brand.origin}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  badgeWrap: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff1f2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffe4e6',
    marginBottom: 6,
  },
  badgeText: {
    color: '#e11d48',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: -0.5,
  },
  accentBar: {
    width: 50,
    height: 3,
    backgroundColor: '#e11d48',
    borderRadius: 2,
    marginTop: 4,
  },
  brandCountBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  brandCountText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#475569',
  },
  scrollList: {
    paddingHorizontal: 16,
    gap: 12,
  },
  brandCard: {
    width: 150,
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandLogoWrap: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  brandName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 2,
  },
  brandSub: {
    fontSize: 10,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 8,
  },
  originPill: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  originText: {
    fontSize: 9,
    color: '#64748b',
    fontWeight: '600',
  },
});
