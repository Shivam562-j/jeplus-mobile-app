import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PageLayout from './PageLayout';

const GALLERY_ITEMS = [
  {
    title: 'Central Logistics Hub',
    desc: 'Automated sorting and batch scanning facility located in Okhla Phase I.',
    icon: 'cube-outline',
    color: '#0284c7',
  },
  {
    title: 'Temperature Controlled Storage',
    desc: 'WHO-GDP compliant 2°C to 8°C cold room for biologicals and critical vaccines.',
    icon: 'snow-outline',
    color: '#0284c7',
  },
  {
    title: 'Express Dispatch Fleet',
    desc: 'GPS-enabled delivery runners ensuring sub-3 hour restock across Delhi & NCR.',
    icon: 'bicycle-outline',
    color: '#e11d48',
  },
  {
    title: 'Digital Quality Verification',
    desc: 'Barcode scanning and batch traceability preventing counterfeit circulation.',
    icon: 'scan-outline',
    color: '#16a34a',
  },
];

export default function GalleryPage({ onBack, onNavigate, onOrderNow }) {
  return (
    <PageLayout
      title="Warehouse & Infrastructure"
      subtitle="A glance into our pharma storage, cold-chain, and express transit infrastructure."
      badge="INFRASTRUCTURE"
      onBack={onBack}
      onNavigate={onNavigate}
      onOrderNow={onOrderNow}
    >
      <View style={styles.grid}>
        {GALLERY_ITEMS.map((item) => (
          <View key={item.title} style={styles.card}>
            <View style={[styles.iconWrap, { backgroundColor: '#eff6ff' }]}>
              <Ionicons name={item.icon} size={28} color={item.color} />
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>
        ))}
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  grid: {
    gap: 14,
  },
  card: {
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: '#64748b',
    lineHeight: 18,
  },
});
