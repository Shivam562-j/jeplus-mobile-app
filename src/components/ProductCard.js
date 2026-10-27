import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export default function ProductCard({
  product,
  onPress,
  onAddToCart,
  badgeText = 'Fast Moving',
}) {
  const [imageError, setImageError] = useState(false);

  const ptr = product.Ptr ? Number(product.Ptr).toFixed(2) : (product.Srate ? Number(product.Srate).toFixed(2) : '0.00');
  const mrp = product.Mrp ? Number(product.Mrp).toFixed(2) : null;
  const stock = product.Clqty || 0;
  const company = product.Compname || 'PHARMA';
  const pack = product.Pack || 'STRIP';
  const name = product.ItemName || 'MEDICINE';

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.88}
      onPress={() => onPress && onPress(product)}
    >
      {/* Top Badge */}
      <View style={styles.topBadgeRow}>
        <View style={styles.badgeWrap}>
          <Text style={styles.badgeText}>{badgeText}</Text>
        </View>
      </View>

      {/* Product Image Area */}
      <View style={styles.imageBox}>
        {product.PrimaryImage && !imageError ? (
          <Image
            source={{ uri: product.PrimaryImage }}
            style={styles.productImg}
            resizeMode="contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <View style={styles.placeholderImg}>
            <Ionicons name="medkit-outline" size={38} color="#94a3b8" />
            <Text style={styles.placeholderText}>{company.slice(0, 12)}</Text>
          </View>
        )}
      </View>

      {/* Company Name */}
      <Text style={styles.companyName} numberOfLines={1}>
        {company}
      </Text>

      {/* Product Name */}
      <Text style={styles.productName} numberOfLines={2}>
        {name}
      </Text>

      {/* Sub details: Comp • Pack */}
      <Text style={styles.subDetail} numberOfLines={1}>
        {company} • {pack}
      </Text>

      {/* Stock pill */}
      <View style={styles.stockWrap}>
        <View style={styles.stockPill}>
          <Text style={styles.stockText}>{stock} in stock</Text>
        </View>
      </View>

      {/* Price section */}
      <View style={styles.priceRow}>
        <View>
          <View style={styles.priceFlex}>
            <Text style={styles.ptrPrice}>₹{ptr}</Text>
            {mrp && <Text style={styles.mrpPrice}>₹{mrp}</Text>}
          </View>
          <Text style={styles.taxSub}>PTR incl. GST</Text>
        </View>

        {/* View / Add Button */}
        <TouchableOpacity
          style={styles.viewBtn}
          onPress={() => (onAddToCart ? onAddToCart(product) : onPress(product))}
          activeOpacity={0.8}
        >
          <Text style={styles.viewBtnText}>Add</Text>
          <Ionicons name="cart-outline" size={12} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginRight: 14,
  },
  topBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 6,
  },
  badgeWrap: {
    backgroundColor: '#f0f9ff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  badgeText: {
    color: '#0284c7',
    fontSize: 10,
    fontWeight: '700',
  },
  imageBox: {
    height: 105,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
  },
  productImg: {
    width: '90%',
    height: '90%',
  },
  placeholderImg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 10,
    color: '#94a3b8',
    fontWeight: '600',
    marginTop: 4,
  },
  companyName: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748b',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  productName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0f172a',
    height: 38,
    lineHeight: 18,
  },
  subDetail: {
    fontSize: 11,
    color: '#94a3b8',
    marginBottom: 8,
  },
  stockWrap: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  stockPill: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  stockText: {
    color: '#15803d',
    fontSize: 10,
    fontWeight: '700',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 10,
  },
  priceFlex: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 5,
  },
  ptrPrice: {
    fontSize: 15,
    fontWeight: '900',
    color: '#0f172a',
  },
  mrpPrice: {
    fontSize: 11,
    color: '#94a3b8',
    textDecorationLine: 'line-through',
  },
  taxSub: {
    fontSize: 9,
    color: '#64748b',
  },
  viewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
    gap: 4,
  },
  viewBtnText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
  },
});
