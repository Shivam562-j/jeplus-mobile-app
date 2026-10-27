import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export default function CartModal({
  visible,
  items = [],
  onClose,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onPlaceOrder,
}) {
  const totalAmount = items.reduce((sum, item) => {
    const ptr = item.Ptr || item.Srate || 0;
    return sum + Number(ptr) * item.qty;
  }, 0);

  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;
    if (onPlaceOrder) {
      onPlaceOrder(items, totalAmount);
    } else {
      Alert.alert(
        'Order Placed Successfully!',
        `Your order of ${totalQty} units (Total: ₹${totalAmount.toFixed(2)}) has been submitted to Jeplus Restock Dispatch.\n\nEstimated Delivery: Under 3 Hours.`
      );
      onClearCart && onClearCart();
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.sheetTitle}>Chemist Restock Cart</Text>
              <Text style={styles.sheetSub}>
                {items.length} {items.length === 1 ? 'item' : 'items'} • Delivery under 3 Hrs
              </Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={20} color="#64748b" />
            </TouchableOpacity>
          </View>

          {items.length === 0 ? (
            <View style={styles.emptyWrap}>
              <Ionicons name="cart-outline" size={54} color="#cbd5e1" />
              <Text style={styles.emptyTitle}>Your Restock Cart is Empty</Text>
              <Text style={styles.emptySub}>
                Browse Fast Moving Items or search catalog to add medicines to your pharmacy order.
              </Text>
            </View>
          ) : (
            <>
              {/* Items List */}
              <FlatList
                data={items}
                keyExtractor={(item) => String(item.ItemCode || item.ItemName)}
                style={styles.itemsList}
                renderItem={({ item }) => {
                  const ptr = item.Ptr || item.Srate || 0;
                  const itemTotal = (Number(ptr) * item.qty).toFixed(2);
                  return (
                    <View style={styles.cartItem}>
                      <View style={{ flex: 1, paddingRight: 10 }}>
                        <Text style={styles.itemComp}>{item.Compname}</Text>
                        <Text style={styles.itemName}>{item.ItemName}</Text>
                        <Text style={styles.itemMeta}>
                          {item.Pack} • ₹{Number(ptr).toFixed(2)}/unit
                        </Text>
                      </View>

                      {/* Counter & Total */}
                      <View style={styles.qtyTotalCol}>
                        <View style={styles.counter}>
                          <TouchableOpacity
                            onPress={() => onUpdateQty(item, item.qty - 1)}
                            style={styles.countBtn}
                          >
                            <Ionicons name="remove" size={14} color="#0f172a" />
                          </TouchableOpacity>
                          <Text style={styles.countText}>{item.qty}</Text>
                          <TouchableOpacity
                            onPress={() => onUpdateQty(item, item.qty + 1)}
                            style={styles.countBtn}
                          >
                            <Ionicons name="add" size={14} color="#0f172a" />
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.itemTotalPrice}>₹{itemTotal}</Text>
                      </View>
                    </View>
                  );
                }}
              />

              {/* Express delivery note */}
              <View style={styles.expressBanner}>
                <Ionicons name="flash" size={16} color="#0284c7" />
                <Text style={styles.expressText}>
                  Express Pharmacy Restock • Direct Dispatch to your store
                </Text>
              </View>

              {/* Bill Details */}
              <View style={styles.billCard}>
                <View style={styles.billRow}>
                  <Text style={styles.billLabel}>Subtotal (PTR)</Text>
                  <Text style={styles.billVal}>₹{totalAmount.toFixed(2)}</Text>
                </View>
                <View style={styles.billRow}>
                  <Text style={styles.billLabel}>GST & Delivery</Text>
                  <Text style={[styles.billVal, { color: '#16a34a' }]}>Included</Text>
                </View>
                <View style={[styles.billRow, styles.totalRow]}>
                  <Text style={styles.totalLabel}>Total Payable</Text>
                  <Text style={styles.totalVal}>₹{totalAmount.toFixed(2)}</Text>
                </View>
              </View>

              {/* Place Order Button */}
              <TouchableOpacity
                style={styles.checkoutBtn}
                onPress={handleCheckout}
                activeOpacity={0.88}
              >
                <Text style={styles.checkoutBtnText}>
                  Place Chemist Order • ₹{totalAmount.toFixed(2)}
                </Text>
                <Ionicons name="arrow-forward" size={18} color="#ffffff" />
              </TouchableOpacity>
            </>
          )}
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
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0f172a',
  },
  sheetSub: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0f172a',
    marginTop: 14,
  },
  emptySub: {
    fontSize: 13,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 18,
  },
  itemsList: {
    maxHeight: 260,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  itemComp: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748b',
    textTransform: 'uppercase',
  },
  itemName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0f172a',
    marginTop: 2,
  },
  itemMeta: {
    fontSize: 11,
    color: '#94a3b8',
    marginTop: 2,
  },
  qtyTotalCol: {
    alignItems: 'flex-end',
    gap: 6,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 10,
    padding: 3,
  },
  countBtn: {
    width: 26,
    height: 26,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0f172a',
    paddingHorizontal: 10,
  },
  itemTotalPrice: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0f172a',
  },
  expressBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    padding: 10,
    borderRadius: 10,
    gap: 8,
    marginVertical: 12,
  },
  expressText: {
    fontSize: 11,
    color: '#0369a1',
    fontWeight: '600',
  },
  billCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 14,
    padding: 12,
    gap: 6,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  billLabel: {
    fontSize: 12,
    color: '#64748b',
  },
  billVal: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0f172a',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 8,
    marginTop: 4,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0f172a',
  },
  totalVal: {
    fontSize: 16,
    fontWeight: '900',
    color: '#e11d48',
  },
  checkoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    paddingVertical: 14,
    borderRadius: 14,
    gap: 8,
  },
  checkoutBtnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
});
