import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export default function FooterSection({ onOrderNow, onOpenPolicy }) {
  const handleCall = () => {
    Linking.openURL('tel:01168130000').catch(() => {});
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@jeplus.in').catch(() => {});
  };

  const handleOpenSocial = (url) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <View style={styles.container}>
      {/* Brand & Description */}
      <View style={styles.brandRow}>
        <View style={styles.logoRow}>
          <Text style={styles.logoTextMain}>Jep</Text>
          <Text style={styles.logoTextCyan}>lus</Text>
          <View style={styles.logoDot} />
        </View>
        <Text style={styles.brandTagline}>Healthcare Pvt. Ltd.</Text>
      </View>

      <Text style={styles.aboutText}>
        Jeplus Healthcare Pvt. Ltd. is one of the oldest distribution groups for pharmaceutical goods in Delhi & NCR. We are one of the leading providers of pharmaceutical products to healthcare professionals including chemists, doctors, nursing homes, hospitals and private institutions.
      </Text>

      {/* CTA Button */}
      <TouchableOpacity
        style={styles.ctaOrderBtn}
        onPress={onOrderNow}
        activeOpacity={0.85}
      >
        <Text style={styles.ctaOrderText}>Order Now</Text>
        <Ionicons name="arrow-forward" size={16} color="#ffffff" />
      </TouchableOpacity>

      {/* Contact Cards */}
      <View style={styles.contactBlock}>
        <Text style={styles.sectionHeader}>Contact Us</Text>

        <TouchableOpacity style={styles.contactRow} onPress={handleCall} activeOpacity={0.7}>
          <View style={styles.contactIconWrap}>
            <Ionicons name="call-outline" size={16} color="#38bdf8" />
          </View>
          <Text style={styles.contactVal}>011-68130000</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactRow} onPress={handleEmail} activeOpacity={0.7}>
          <View style={styles.contactIconWrap}>
            <Ionicons name="mail-outline" size={16} color="#38bdf8" />
          </View>
          <Text style={styles.contactVal}>info@jeplus.in</Text>
        </TouchableOpacity>

        <View style={styles.contactRow}>
          <View style={styles.contactIconWrap}>
            <Ionicons name="location-outline" size={16} color="#38bdf8" />
          </View>
          <Text style={styles.contactValAddress}>
            B-18, 1st Floor, Pocket B, Okhla Phase I, Okhla, New Delhi, Delhi (110020)
          </Text>
        </View>
      </View>

      {/* Quick Links & Policies */}
      <View style={styles.linksColumns}>
        <View style={styles.col}>
          <Text style={styles.colHeader}>Quick Links</Text>
          {['Home', 'About Us', 'Contact Us', 'Gallery', 'Wholesale'].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => onOpenPolicy && onOpenPolicy(item)}
              style={styles.linkTouchable}
              activeOpacity={0.7}
            >
              <Text style={styles.linkText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.col}>
          <Text style={styles.colHeader}>Policies</Text>
          {['Privacy Policy', 'Return Policy', 'Terms of Service', 'FAQ', 'MR Login'].map(
            (item) => (
              <TouchableOpacity
                key={item}
                onPress={() => onOpenPolicy && onOpenPolicy(item)}
                style={styles.linkTouchable}
                activeOpacity={0.7}
              >
                <Text style={styles.linkText}>{item}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>

      {/* Social Icons Strip */}
      <View style={styles.socialStrip}>
        <TouchableOpacity
          style={styles.socialBtn}
          onPress={() => handleOpenSocial('https://www.instagram.com/jeplus.in/')}
        >
          <Ionicons name="logo-instagram" size={18} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialBtn}
          onPress={() => handleOpenSocial('https://www.facebook.com/Jeplus.co.in')}
        >
          <Ionicons name="logo-facebook" size={18} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialBtn}
          onPress={() => handleOpenSocial('https://x.com/Jeplusin')}
        >
          <Ionicons name="logo-twitter" size={18} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialBtn}
          onPress={() => handleOpenSocial('https://www.linkedin.com/company/jeplusin')}
        >
          <Ionicons name="logo-linkedin" size={18} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialBtn}
          onPress={() => handleOpenSocial('https://api.whatsapp.com/send/?phone=919582080649')}
        >
          <Ionicons name="logo-whatsapp" size={18} color="#25D366" />
        </TouchableOpacity>
      </View>

      {/* Copyright */}
      <View style={styles.copyrightRow}>
        <Text style={styles.copyrightText}>
          © {new Date().getFullYear()} Jeplus Healthcare Pvt. Ltd. All rights reserved.
        </Text>
        <Text style={styles.copyrightSub}>
          Pharma Distributor for Chemists • Delhi & NCR
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090d16',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  brandRow: {
    marginBottom: 12,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoTextMain: {
    fontSize: 26,
    fontWeight: '900',
    color: '#ffffff',
  },
  logoTextCyan: {
    fontSize: 26,
    fontWeight: '900',
    color: '#38bdf8',
  },
  logoDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e11d48',
    marginLeft: 3,
    marginTop: -8,
  },
  brandTagline: {
    fontSize: 11,
    color: '#94a3b8',
    marginTop: 2,
    fontWeight: '600',
  },
  aboutText: {
    fontSize: 12,
    color: '#94a3b8',
    lineHeight: 18,
    marginBottom: 20,
  },
  ctaOrderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e11d48',
    paddingVertical: 12,
    borderRadius: 14,
    gap: 8,
    marginBottom: 24,
  },
  ctaOrderText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
  contactBlock: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '800',
    color: '#f8fafc',
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 10,
  },
  contactIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactVal: {
    fontSize: 13,
    color: '#e2e8f0',
    fontWeight: '600',
    paddingTop: 3,
  },
  contactValAddress: {
    flex: 1,
    fontSize: 12,
    color: '#94a3b8',
    lineHeight: 17,
  },
  linksColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  col: {
    flex: 1,
  },
  colHeader: {
    fontSize: 13,
    fontWeight: '800',
    color: '#f8fafc',
    marginBottom: 10,
  },
  linkTouchable: {
    paddingVertical: 5,
  },
  linkText: {
    fontSize: 12,
    color: '#94a3b8',
  },
  socialStrip: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#1f2937',
  },
  socialBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyrightRow: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1f2937',
    paddingTop: 16,
  },
  copyrightText: {
    fontSize: 11,
    color: '#64748b',
    textAlign: 'center',
  },
  copyrightSub: {
    fontSize: 10,
    color: '#475569',
    marginTop: 4,
    textAlign: 'center',
  },
});
