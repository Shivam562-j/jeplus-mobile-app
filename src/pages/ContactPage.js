import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PageLayout from './PageLayout';
import { COLORS } from '../theme/colors';

export default function ContactPage({ onBack, onNavigate, onOrderNow }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleCall = () => {
    Linking.openURL('tel:01168130000').catch(() => {});
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@jeplus.in').catch(() => {});
  };

  const handleWhatsApp = () => {
    Linking.openURL('https://api.whatsapp.com/send/?phone=919582080649').catch(() => {});
  };

  const handleSendInquiry = () => {
    if (!name || !phone) {
      Alert.alert('Required Fields', 'Please enter your name and contact phone number.');
      return;
    }
    Alert.alert(
      'Message Received',
      `Thank you, ${name}. Our Chemist Support team will contact you at ${phone} shortly.`
    );
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <PageLayout
      title="Contact Us"
      subtitle="Reach our central dispatch, order helpline, and customer desk."
      badge="CONNECT WITH JEPLUS"
      onBack={onBack}
      onNavigate={onNavigate}
      onOrderNow={onOrderNow}
    >
      {/* Quick Dial & Action Tiles */}
      <View style={styles.actionTiles}>
        <TouchableOpacity style={styles.tile} onPress={handleCall} activeOpacity={0.8}>
          <View style={[styles.tileIcon, { backgroundColor: '#eff6ff' }]}>
            <Ionicons name="call" size={20} color="#0284c7" />
          </View>
          <Text style={styles.tileTitle}>Call Dispatch</Text>
          <Text style={styles.tileSub}>011-68130000</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={handleWhatsApp} activeOpacity={0.8}>
          <View style={[styles.tileIcon, { backgroundColor: '#dcfce7' }]}>
            <Ionicons name="logo-whatsapp" size={20} color="#16a34a" />
          </View>
          <Text style={styles.tileTitle}>WhatsApp</Text>
          <Text style={styles.tileSub}>+91 95820 80649</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={handleEmail} activeOpacity={0.8}>
          <View style={[styles.tileIcon, { backgroundColor: '#fff1f2' }]}>
            <Ionicons name="mail" size={20} color="#e11d48" />
          </View>
          <Text style={styles.tileTitle}>Email</Text>
          <Text style={styles.tileSub}>info@jeplus.in</Text>
        </TouchableOpacity>
      </View>

      {/* Warehouse / Office Location */}
      <View style={styles.card}>
        <View style={styles.locationHeader}>
          <Ionicons name="business" size={20} color="#0f172a" />
          <Text style={styles.cardTitle}>Head Office & Central Warehouse</Text>
        </View>
        <Text style={styles.addressText}>
          Jeplus Healthcare Pvt. Ltd.{'\n'}
          B-18, 1st Floor, Pocket B,{'\n'}
          Okhla Phase I, Okhla Industrial Area,{'\n'}
          New Delhi, Delhi - 110020
        </Text>
        <View style={styles.timingBadge}>
          <Ionicons name="time-outline" size={14} color="#0369a1" />
          <Text style={styles.timingText}>Mon - Sat: 9:00 AM - 8:00 PM</Text>
        </View>
      </View>

      {/* Quick Message Form */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Send Chemist Inquiry</Text>
        <Text style={styles.formSub}>
          Have a question about new brand onboarding, stock rates, or delivery routes?
        </Text>

        <Text style={styles.label}>Your Name / Pharmacy Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Apollo Pharmacy / Rajat Gupta"
          placeholderTextColor="#94a3b8"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Phone Number *</Text>
        <TextInput
          style={styles.input}
          placeholder="10 digit mobile number"
          placeholderTextColor="#94a3b8"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Text style={styles.label}>Your Message / Medicine Requirements</Text>
        <TextInput
          style={[styles.input, { height: 75, textAlignVertical: 'top' }]}
          placeholder="Write your requirement or questions here..."
          placeholderTextColor="#94a3b8"
          multiline={true}
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.sendBtn} onPress={handleSendInquiry} activeOpacity={0.85}>
          <Text style={styles.sendBtnText}>Submit Inquiry</Text>
          <Ionicons name="send" size={14} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  actionTiles: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  tile: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  tileIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  tileTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#0f172a',
  },
  tileSub: {
    fontSize: 10,
    color: '#64748b',
    marginTop: 2,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 16,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 6,
  },
  addressText: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
    marginBottom: 12,
  },
  timingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    gap: 6,
  },
  timingText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#0369a1',
  },
  formSub: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 12,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 4,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 13,
    color: '#0f172a',
  },
  sendBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
    marginTop: 14,
  },
  sendBtnText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
});
