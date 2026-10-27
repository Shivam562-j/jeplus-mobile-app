import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PageLayout from './PageLayout';

export default function MrLoginPage({ onBack, onNavigate, onOrderNow }) {
  const [mrCode, setMrCode] = useState('');
  const [password, setPassword] = useState('');

  const handleMrLogin = () => {
    if (!mrCode || !password) {
      Alert.alert('Login Required', 'Please enter your MR Code and Password.');
      return;
    }
    Alert.alert(
      'MR Portal Access',
      `Welcome MR ${mrCode}! Connecting to Jeplus Field Representative Secondary Sales System...`
    );
  };

  const handleOpenWebPortal = () => {
    Linking.openURL('https://customer.jeplus.in/').catch(() => {});
  };

  return (
    <PageLayout
      title="MR Portal Login"
      subtitle="Authorized access for Medical Representatives to track chemist secondary sales, stockist availability, and booking orders."
      badge="FIELD REPRESENTATIVE DESK"
      onBack={onBack}
      onNavigate={onNavigate}
      onOrderNow={onOrderNow}
    >
      <View style={styles.formCard}>
        <View style={styles.iconCircle}>
          <Ionicons name="briefcase" size={28} color="#0284c7" />
        </View>

        <Text style={styles.heading}>MR Secondary Sales Portal</Text>
        <Text style={styles.sub}>
          Enter your assigned MR code and security credentials.
        </Text>

        <Text style={styles.label}>MR Employee Code *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. MR-DEL-4029"
          placeholderTextColor="#94a3b8"
          value={mrCode}
          onChangeText={setMrCode}
          autoCapitalize="characters"
        />

        <Text style={styles.label}>Security Password / PIN *</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#94a3b8"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginBtn} onPress={handleMrLogin} activeOpacity={0.88}>
          <Text style={styles.loginBtnText}>Log In to MR Portal</Text>
          <Ionicons name="arrow-forward" size={16} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.webBtn} onPress={handleOpenWebPortal} activeOpacity={0.8}>
          <Ionicons name="globe-outline" size={16} color="#0284c7" />
          <Text style={styles.webBtnText}>Open Web MR Portal</Text>
        </TouchableOpacity>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  formCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 4,
  },
  sub: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 18,
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
    paddingVertical: 10,
    fontSize: 13,
    color: '#0f172a',
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    paddingVertical: 13,
    borderRadius: 12,
    gap: 8,
    marginTop: 18,
  },
  loginBtnText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
  webBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff6ff',
    paddingVertical: 11,
    borderRadius: 12,
    gap: 6,
    marginTop: 10,
  },
  webBtnText: {
    color: '#0284c7',
    fontSize: 12,
    fontWeight: '700',
  },
});
