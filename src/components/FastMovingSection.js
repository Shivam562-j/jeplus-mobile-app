import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductCard from './ProductCard';
import { COLORS } from '../theme/colors';

export default function FastMovingSection({
  items = [],
  loading = false,
  onViewAll,
  onSelectProduct,
  onAddToCart,
}) {
  return (
    <View style={styles.container}>
      {/* Header with Badge & Red Accent Line */}
      <View style={styles.header}>
        <View>
          <View style={styles.badgeWrap}>
            <Text style={styles.badgeText}>POPULAR RESTOCKS</Text>
          </View>
          <Text style={styles.title}>Fast Moving Items</Text>
          <View style={styles.accentBar} />
        </View>

        <TouchableOpacity
          style={styles.viewAllBtn}
          onPress={onViewAll}
          activeOpacity={0.7}
        >
          <Text style={styles.viewAllText}>View all</Text>
          <Ionicons name="arrow-forward" size={14} color="#0284c7" />
        </TouchableOpacity>
      </View>

      {/* Items List */}
      {loading ? (
        <View style={styles.loaderWrap}>
          <ActivityIndicator size="small" color={COLORS.accent} />
          <Text style={styles.loaderText}>Loading popular medicines...</Text>
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollList}
        >
          {items.map((item, index) => (
            <ProductCard
              key={item.ItemCode ? `fast-${item.ItemCode}-${index}` : `fast-${index}`}
              product={item}
              badgeText="Fast Moving"
              onPress={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    backgroundColor: '#ffffff',
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
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
  },
  viewAllText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0284c7',
  },
  scrollList: {
    paddingHorizontal: 16,
  },
  loaderWrap: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  loaderText: {
    fontSize: 12,
    color: '#64748b',
  },
});
