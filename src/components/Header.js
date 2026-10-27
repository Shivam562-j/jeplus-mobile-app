import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export default function Header({
  onHome,
  onOpenSearch,
  onOpenOffers,
  onOpenCart,
  onOpenSignIn,
  cartCount = 0,
}) {
  return (
    <View style={styles.container}>
      {/* Top Bar with Brand & Location */}
      <View style={styles.topRow}>
        <TouchableOpacity
          style={styles.brandContainer}
          onPress={onHome}
          activeOpacity={0.8}
        >
          <View style={styles.logoRow}>
            <Text style={styles.logoTextMain}>Jep</Text>
            <Text style={styles.logoTextCyan}>lus</Text>
            <View style={styles.logoDot} />
          </View>
          <Text style={styles.brandSubtitle}>Healthcare</Text>
        </TouchableOpacity>

        {/* Location / Express Restock Badge */}
        <View style={styles.deliveryBadge}>
          <View style={styles.pulseDot} />
          <Ionicons name="location-sharp" size={13} color="#0284c7" />
          <Text style={styles.deliveryText} numberOfLines={1}>
            Delhi & NCR • <Text style={styles.deliveryBold}>3 Hrs</Text>
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsRow}>
          {/* Offers Pill */}
          <TouchableOpacity
            style={styles.offersBtn}
            onPress={onOpenOffers}
            activeOpacity={0.8}
          >
            <Ionicons name="gift-outline" size={15} color="#e11d48" />
            <Text style={styles.offersBtnText}>Offers</Text>
          </TouchableOpacity>

          {/* Cart Icon */}
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={onOpenCart}
            activeOpacity={0.8}
          >
            <Ionicons name="cart-outline" size={20} color={COLORS.primary} />
            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Sign In Button */}
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={onOpenSignIn}
            activeOpacity={0.85}
          >
            <Text style={styles.signInText}>Sign In</Text>
            <Ionicons name="arrow-forward" size={12} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modern Search Bar */}
      <TouchableOpacity
        style={styles.searchBar}
        onPress={onOpenSearch}
        activeOpacity={0.9}
      >
        <Ionicons name="search" size={18} color="#64748b" style={styles.searchIcon} />
        <Text style={styles.searchPlaceholder}>
          Search medicines, generics, brands (e.g. Combiflam, GSK)...
        </Text>
        <View style={styles.searchShortcut}>
          <Text style={styles.searchShortcutText}>Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  brandContainer: {
    flexDirection: 'column',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoTextMain: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: -0.5,
  },
  logoTextCyan: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0284c7',
    letterSpacing: -0.5,
  },
  logoDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e11d48',
    marginLeft: 2,
    marginTop: -8,
  },
  brandSubtitle: {
    fontSize: 10,
    fontWeight: '600',
    color: '#94a3b8',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginTop: -3,
  },
  deliveryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f9ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e0f2fe',
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#0284c7',
    marginRight: 4,
  },
  deliveryText: {
    fontSize: 11,
    color: '#0369a1',
    fontWeight: '500',
  },
  deliveryBold: {
    fontWeight: '700',
    color: '#e11d48',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  offersBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff1f2',
    borderWidth: 1,
    borderColor: '#ffe4e6',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 18,
    gap: 4,
  },
  offersBtnText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#e11d48',
  },
  iconBtn: {
    position: 'relative',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  badge: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: '#e11d48',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '800',
  },
  signInBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    gap: 4,
  },
  signInText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: 13,
    color: '#64748b',
  },
  searchShortcut: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  searchShortcutText: {
    fontSize: 11,
    color: '#64748b',
    fontWeight: '600',
  },
});
