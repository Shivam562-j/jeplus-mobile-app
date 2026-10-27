import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PageLayout from './PageLayout';

export default function WholesalePage({ onBack, onNavigate, onOrderNow }) {
  const [instName, setInstName] = useState('');
  const [instType, setInstType] = useState('Hospital / Nursing Home');
  const [phone, setPhone] = useState('');
  const [requirements, setRequirements] = useState('');

  const handleWholesaleSubmit = () => {
    if (!instName || !phone) {
      Alert.alert('Required Fields', 'Please enter Institution name and contact number.');
      return;
    }
    Alert.alert(
      'Wholesale Request Submitted',
      `Thank you, ${instName}. Our Institutional Supply Manager will prepare a customized wholesale PTR quote and reach out within 2 hours.`
    );
    setInstName('');
    setPhone('');
    setRequirements('');
  };

  return (
    <PageLayout
      title="Wholesale Supply"
      subtitle="Institutional bulk supply for Hospitals, Nursing Homes, Clinics, and Pharmacy Chains."
      badge="B2B & INSTITUTIONAL SUPPLY"
      onBack={onBack}
      onNavigate={onNavigate}
      onOrderNow={onOrderNow}
    >
      <View style={styles.benefitCard}>
        <Text style={styles.cardTitle}>Why Partner with Jeplus for Wholesale?</Text>
        <View style={styles.bulletRow}>
          <Ionicons name="checkmark-circle" size={16} color="#16a34a" />
          <Text style={styles.bulletText}>Maximum PTR margins & volume-based tiered discounts</Text>
        </View>
        <View style={styles.bulletRow}>
          <Ionicons name="checkmark-circle" size={16} color="#16a34a" />
          <Text style={styles.bulletText}>Consolidated invoicing with batch release documentation</Text>
        </View>
        <View style={styles.bulletRow}>
          <Ionicons name="checkmark-circle" size={16} color="#16a34a" />
          <Text style={styles.bulletText}>Dedicated Key Account Manager for rapid restock refills</Text>
        </View>
        <View style={styles.bulletRow}>
          <Ionicons name="checkmark-circle" size={16} color="#16a34a" />
          <Text style={styles.bulletText}>Flexible PDC and credit payment cycles for authorized institutions</Text>
        </View>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.cardTitle}>Request Wholesale Ratecard</Text>

        <Text style={styles.label}>Institution / Hospital / Pharmacy Chain Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. City Multi-Speciality Hospital"
          placeholderTextColor="#94a3b8"
          value={instName}
          onChangeText={setInstName}
        />

        <Text style={styles.label}>Mobile Phone Number *</Text>
        <TextInput
          style={styles.input}
          placeholder="10 digit mobile number"
          placeholderTextColor="#94a3b8"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Text style={styles.label}>Estimated Monthly Purchase Volume / Medicines Required</Text>
        <TextInput
          style={[styles.input, { height: 75, textAlignVertical: 'top' }]}
          placeholder="e.g. Antibiotics, IV Fluids, Critical Care injections (Est. ₹2-5 Lakh/month)"
          placeholderTextColor="#94a3b8"
          multiline={true}
          value={requirements}
          onChangeText={setRequirements}
        />

        <TouchableOpacity style={styles.submitBtn} onPress={handleWholesaleSubmit} activeOpacity={0.85}>
          <Text style={styles.submitBtnText}>Submit Wholesale Enquiry</Text>
          <Ionicons name="arrow-forward" size={16} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  benefitCard: {
    backgroundColor: '#eff6ff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#dbeafe',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 12,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  bulletText: {
    flex: 1,
    fontSize: 12,
    color: '#334155',
    lineHeight: 17,
  },
  formCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
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
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
    marginTop: 16,
  },
  submitBtnText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
});
