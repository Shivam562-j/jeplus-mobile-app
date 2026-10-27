import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export default function ProductDetailModal({
  visible,
  product,
  onClose,
  onAddToCart,
}) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const ptr = product.Ptr ? Number(product.Ptr).toFixed(2) : (product.Srate ? Number(product.Srate).toFixed(2) : '0.00');
  const mrp = product.Mrp ? Number(product.Mrp).toFixed(2) : '0.00';
  const stock = product.Clqty || 0;
  const company = product.Compname || 'PHARMA';
  const pack = product.Pack || 'STRIP';
  const name = product.ItemName || 'MEDICINE';
  const salt = product.SaltName || 'Composition details on request';

  // Calculate approximate margin
  let marginPct = product.Margin;
  if (!marginPct && Number(mrp) > 0 && Number(ptr) > 0) {
    marginPct = (((Number(mrp) - Number(ptr)) / Number(mrp)) * 100).toFixed(0);
  }

  const handleIncrement = () => setQty((prev) => prev + 1);
  const handleDecrement = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(product, qty);
    }
    setQty(1);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.badgeWrap}>
              <Text style={styles.badgeText}>GENUINE RESTOCK ITEM</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={20} color="#64748b" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Image & Main Info */}
            <View style={styles.imageBox}>
              {product.PrimaryImage ? (
                <Image
                  source={{ uri: product.PrimaryImage }}
                  style={styles.img}
                  resizeMode="contain"
                />
              ) : (
                <View style={styles.placeholderImg}>
                  <Ionicons name="medkit" size={54} color="#94a3b8" />
                  <Text style={styles.placeholderText}>Jeplus Verified Supply</Text>
                </View>
              )}
            </View>

            <Text style={styles.companyText}>{company}</Text>
            <Text style={styles.titleText}>{name}</Text>
            <Text style={styles.saltText}>{salt}</Text>

            {/* Spec grid */}
            <View style={styles.specsGrid}>
              <View style={styles.specBox}>
                <Text style={styles.specLabel}>Packaging</Text>
                <Text style={styles.specValue}>{pack}</Text>
              </View>

              <View style={styles.specBox}>
                <Text style={styles.specLabel}>Stock Status</Text>
                <Text style={[styles.specValue, { color: '#16a34a' }]}>
                  {stock} in stock
                </Text>
              </View>

              {marginPct ? (
                <View style={styles.specBox}>
                  <Text style={styles.specLabel}>Chemist Margin</Text>
                  <Text style={[styles.specValue, { color: '#e11d48' }]}>
                    ~{marginPct}%
                  </Text>
                </View>
              ) : null}
            </View>

            {/* Price Box */}
            <View style={styles.priceCard}>
              <View>
                <Text style={styles.priceLabel}>Wholesale PTR (incl. GST)</Text>
                <Text style={styles.ptrBig}>₹{ptr}</Text>
              </View>
              {Number(mrp) > 0 && (
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.priceLabel}>Retail MRP</Text>
                  <Text style={styles.mrpBig}>₹{mrp}</Text>
                </View>
              )}
            </View>

            {/* Quantity Selector */}
            <View style={styles.qtyRow}>
              <Text style={styles.qtyLabel}>Select Quantity:</Text>
              <View style={styles.counter}>
                <TouchableOpacity onPress={handleDecrement} style={styles.countBtn}>
                  <Ionicons name="remove" size={16} color="#0f172a" />
                </TouchableOpacity>
                <Text style={styles.countText}>{qty}</Text>
                <TouchableOpacity onPress={handleIncrement} style={styles.countBtn}>
                  <Ionicons name="add" size={16} color="#0f172a" />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          {/* Bottom Action */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.addToCartBtn}
              onPress={handleAdd}
              activeOpacity={0.88}
            >
              <Ionicons name="cart" size={18} color="#ffffff" />
              <Text style={styles.addToCartText}>
                Add {qty} to Chemist Order • ₹{(Number(ptr) * qty).toFixed(2)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    maxHeight: '85%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  badgeWrap: {
    backgroundColor: '#eff6ff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dbeafe',
  },
  badgeText: {
    color: '#0284c7',
    fontSize: 10,
    fontWeight: '800',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    height: 140,
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  img: {
    width: '90%',
    height: '90%',
  },
  placeholderImg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 11,
    color: '#94a3b8',
    marginTop: 6,
    fontWeight: '600',
  },
  companyText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#64748b',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0f172a',
    marginTop: 2,
    letterSpacing: -0.3,
  },
  saltText: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
    marginBottom: 14,
  },
  specsGrid: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  specBox: {
    flex: 1,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  specLabel: {
    fontSize: 10,
    color: '#94a3b8',
    fontWeight: '600',
  },
  specValue: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0f172a',
    marginTop: 3,
  },
  priceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff1f2',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#ffe4e6',
    marginBottom: 16,
  },
  priceLabel: {
    fontSize: 10,
    color: '#be123c',
    fontWeight: '700',
  },
  ptrBig: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0f172a',
    marginTop: 2,
  },
  mrpBig: {
    fontSize: 16,
    color: '#94a3b8',
    textDecorationLine: 'line-through',
    marginTop: 2,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  qtyLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 4,
  },
  countBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0f172a',
    paddingHorizontal: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 12,
  },
  addToCartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    paddingVertical: 14,
    borderRadius: 14,
    gap: 8,
  },
  addToCartText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
});
