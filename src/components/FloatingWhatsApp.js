import React from 'react';
import { TouchableOpacity, StyleSheet, Linking, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export default function FloatingWhatsApp() {
  const handleOpenWhatsApp = () => {
    const phone = '919582080649';
    const message = encodeURIComponent(
      'Hello Jeplus Healthcare! I would like to inquire about medicine stock and chemist order dispatch.'
    );
    const url = `https://api.whatsapp.com/send/?phone=${phone}&text=${message}`;
    Linking.openURL(url).catch(() => {});
  };

  return (
    <TouchableOpacity
      style={styles.floatingBtn}
      onPress={handleOpenWhatsApp}
      activeOpacity={0.85}
    >
      <Ionicons name="logo-whatsapp" size={28} color="#ffffff" />
      <View style={styles.onlineBadge} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatingBtn: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#25D366',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 999,
  },
  onlineBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#25D366',
  },
});
