import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export default function RegisterModal({
  visible,
  mode = 'register', // 'register' | 'signin'
  onClose,
  onSuccess,
}) {
  const [storeName, setStoreName] = useState('');
  const [personName, setPersonName] = useState('');
  const [phone, setPhone] = useState('');
  const [dlNumber, setDlNumber] = useState('');
  const [area, setArea] = useState('Delhi & NCR');

  const handleSubmit = () => {
    if (!phone || phone.trim().length < 10) {
      Alert.alert('Phone Required', 'Please enter a valid 10-digit mobile number.');
      return;
    }
    if (mode === 'register' && !storeName.trim()) {
      Alert.alert('Store Name Required', 'Please enter your Pharmacy or Chemist store name.');
      return;
    }

    Alert.alert(
      mode === 'register' ? 'Chemist Registration Received!' : 'Logged In Successfully!',
      mode === 'register'
        ? `Thank you, ${storeName}! Your verification will be processed by Jeplus Healthcare sales team within 2 hours.`
        : `Welcome back to Jeplus Chemist Portal!`
    );

    onSuccess && onSuccess({ storeName, phone });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.sheet}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>
                {mode === 'register' ? 'Register Chemist Account' : 'Chemist Sign In'}
              </Text>
              <Text style={styles.sub}>
                {mode === 'register'
                  ? 'Get wholesale pricing, fast delivery & credit facilities.'
                  : 'Enter your registered mobile number.'}
              </Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={20} color="#64748b" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} style={{ marginVertical: 12 }}>
            {mode === 'register' && (
              <>
                <Text style={styles.inputLabel}>Pharmacy / Chemist Name *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. Apollo Pharmacy, Sanjeevani Medicos"
                  placeholderTextColor="#94a3b8"
                  value={storeName}
                  onChangeText={setStoreName}
                />

                <Text style={styles.inputLabel}>Contact Person Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. Ramesh Kumar"
                  placeholderTextColor="#94a3b8"
                  value={personName}
                  onChangeText={setPersonName}
                />

                <Text style={styles.inputLabel}>Drug License No. (DL No.)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. DL-20B-12345 / 21B-12345"
                  placeholderTextColor="#94a3b8"
                  value={dlNumber}
                  onChangeText={setDlNumber}
                />
              </>
            )}

            <Text style={styles.inputLabel}>Mobile Phone Number *</Text>
            <View style={styles.phoneInputRow}>
              <View style={styles.countryCode}>
                <Text style={styles.countryCodeText}>+91</Text>
              </View>
              <TextInput
                style={[styles.input, { flex: 1, marginBottom: 0 }]}
                placeholder="10 digit mobile number"
                placeholderTextColor="#94a3b8"
                keyboardType="phone-pad"
                maxLength={10}
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            {mode === 'register' && (
              <>
                <Text style={styles.inputLabel}>Location / Area</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. Okhla Phase 1, South Delhi"
                  placeholderTextColor="#94a3b8"
                  value={area}
                  onChangeText={setArea}
                />
              </>
            )}

            <View style={styles.securityNote}>
              <Ionicons name="shield-checkmark" size={16} color="#16a34a" />
              <Text style={styles.securityText}>
                Authorized pharma distribution restricted to licensed chemists and healthcare professionals.
              </Text>
            </View>
          </ScrollView>

          <TouchableOpacity
            style={styles.submitBtn}
            onPress={handleSubmit}
            activeOpacity={0.88}
          >
            <Text style={styles.submitBtnText}>
              {mode === 'register' ? 'Submit Registration' : 'Continue with OTP'}
            </Text>
            <Ionicons name="arrow-forward" size={16} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0f172a',
  },
  sub: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
    lineHeight: 16,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#0f172a',
    marginBottom: 4,
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  countryCode: {
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  countryCodeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
  },
  securityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
    padding: 10,
    borderRadius: 10,
    gap: 8,
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#dcfce7',
  },
  securityText: {
    flex: 1,
    fontSize: 11,
    color: '#15803d',
    lineHeight: 16,
  },
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    paddingVertical: 14,
    borderRadius: 14,
    gap: 8,
    marginTop: 10,
  },
  submitBtnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
});
