import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import FooterSection from '../components/FooterSection';

export default function PageLayout({
  title,
  subtitle,
  badge = 'JEPLUS HEALTHCARE',
  onBack,
  onNavigate,
  onOrderNow,
  children,
}) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Top Page Navigation Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={onBack} activeOpacity={0.8}>
          <Ionicons name="arrow-back" size={20} color="#0f172a" />
          <Text style={styles.backBtnText}>Back to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onBack} activeOpacity={0.8} style={styles.brandRow}>
          <Text style={styles.brandText}>Jep<Text style={{ color: '#0284c7' }}>lus</Text></Text>
        </TouchableOpacity>
      </View>

      {/* Hero Header for Page */}
      <View style={styles.pageHeader}>
        {badge ? (
          <View style={styles.badgeWrap}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        ) : null}
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        <View style={styles.accentBar} />
      </View>

      {/* Page Body */}
      <View style={styles.pageBody}>{children}</View>

      {/* Footer on every page */}
      <FooterSection
        onOrderNow={onOrderNow || onBack}
        onOpenPolicy={onNavigate}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    paddingBottom: 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    backgroundColor: '#ffffff',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 4,
  },
  backBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0f172a',
  },
  brandRow: {
    paddingHorizontal: 8,
  },
  brandText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0f172a',
  },
  pageHeader: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
    backgroundColor: '#f8fafc',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  badgeWrap: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff1f2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffe4e6',
    marginBottom: 8,
  },
  badgeText: {
    color: '#e11d48',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: -0.6,
  },
  subtitle: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
    lineHeight: 18,
  },
  accentBar: {
    width: 48,
    height: 3,
    backgroundColor: '#e11d48',
    borderRadius: 2,
    marginTop: 10,
  },
  pageBody: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});
