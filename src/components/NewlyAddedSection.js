import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import ProductCard from './ProductCard';
import { COLORS } from '../theme/colors';

export default function NewlyAddedSection({
  items = [],
  loading = false,
  onSelectProduct,
  onAddToCart,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.badgeWrap}>
            <Text style={styles.badgeText}>FRESH ARRIVALS</Text>
          </View>
          <Text style={styles.title}>Newly Added Items</Text>
          <View style={styles.accentBar} />
        </View>
      </View>

      {loading ? (
        <View style={styles.loaderWrap}>
          <ActivityIndicator size="small" color={COLORS.brandCyan} />
          <Text style={styles.loaderText}>Fetching newly added medicines...</Text>
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollList}
        >
          {items.map((item, index) => (
            <ProductCard
              key={item.ItemCode ? `new-${item.ItemCode}-${index}` : `new-${index}`}
              product={item}
              badgeText="New"
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
    backgroundColor: '#f8fafc',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  header: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  badgeWrap: {
    alignSelf: 'flex-start',
    backgroundColor: '#eff6ff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dbeafe',
    marginBottom: 6,
  },
  badgeText: {
    color: '#0284c7',
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
    backgroundColor: '#0284c7',
    borderRadius: 2,
    marginTop: 4,
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
