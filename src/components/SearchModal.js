import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { searchMedicines } from '../services/api';
import { COLORS } from '../theme/colors';

const POPULAR_SEARCHES = [
  'Augmentin',
  'Combiflam',
  'Cetrizine',
  'Asthalin',
  'Paracetamol',
  'Systopic',
  'Cipla',
  'GSK',
];

export default function SearchModal({
  visible,
  onClose,
  onSelectProduct,
  onAddToCart,
}) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      const data = await searchMedicines(query);
      setResults(data);
      setLoading(false);
    }, 280);

    return () => clearTimeout(timer);
  }, [query]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Top Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.backBtn} activeOpacity={0.7}>
            <Ionicons name="arrow-back" size={24} color="#0f172a" />
          </TouchableOpacity>

          <View style={styles.searchInputWrap}>
            <Ionicons name="search" size={18} color="#64748b" style={{ marginRight: 8 }} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search medicines, salts, companies..."
              placeholderTextColor="#94a3b8"
              value={query}
              onChangeText={setQuery}
              autoFocus={true}
              returnKeyType="search"
            />
            {query.length > 0 && (
              <TouchableOpacity onPress={handleClear} style={{ padding: 4 }}>
                <Ionicons name="close-circle" size={18} color="#94a3b8" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Content Body */}
        {loading ? (
          <View style={styles.centerBox}>
            <ActivityIndicator size="large" color={COLORS.accent} />
            <Text style={styles.hintText}>Searching live catalogue...</Text>
          </View>
        ) : query.trim().length === 0 ? (
          <View style={styles.suggestionsContainer}>
            <Text style={styles.sectionTitle}>Popular Chemist Searches</Text>
            <View style={styles.tagsWrap}>
              {POPULAR_SEARCHES.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.tag}
                  onPress={() => setQuery(item)}
                  activeOpacity={0.7}
                >
                  <Ionicons name="trending-up" size={13} color="#0284c7" />
                  <Text style={styles.tagText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.infoBanner}>
              <Ionicons name="information-circle-outline" size={20} color="#0284c7" />
              <Text style={styles.infoBannerText}>
                Access 25,000+ medicines with wholesale PTR, GST, and real-time counter stock.
              </Text>
            </View>
          </View>
        ) : results.length === 0 ? (
          <View style={styles.centerBox}>
            <Ionicons name="alert-circle-outline" size={44} color="#94a3b8" />
            <Text style={styles.emptyTitle}>No medicines found for "{query}"</Text>
            <Text style={styles.emptySub}>
              Try searching by Salt name, generic formulation, or brand name.
            </Text>
          </View>
        ) : (
          <FlatList
            data={results}
            keyExtractor={(item, index) =>
              item.ItemCode ? `search-${item.ItemCode}-${index}` : `search-${index}`
            }
            contentContainerStyle={styles.resultsList}
            renderItem={({ item }) => {
              const ptr = item.Ptr || item.Srate || '0.00';
              const stock = item.Clqty || 0;
              return (
                <TouchableOpacity
                  style={styles.itemRow}
                  onPress={() => onSelectProduct && onSelectProduct(item)}
                  activeOpacity={0.7}
                >
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemComp}>{item.Compname || 'PHARMA'}</Text>
                    <Text style={styles.itemName}>{item.ItemName}</Text>
                    {item.SaltName ? (
                      <Text style={styles.itemSalt} numberOfLines={1}>
                        {item.SaltName}
                      </Text>
                    ) : null}
                    <View style={styles.itemMeta}>
                      <Text style={styles.itemPack}>{item.Pack}</Text>
                      <View style={styles.stockChip}>
                        <Text style={styles.stockChipText}>{stock} in stock</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.itemAction}>
                    <Text style={styles.itemPrice}>₹{Number(ptr).toFixed(2)}</Text>
                    <Text style={styles.itemPriceLabel}>PTR incl. GST</Text>
                    <TouchableOpacity
                      style={styles.addBtn}
                      onPress={() => onAddToCart && onAddToCart(item)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.addBtnText}>+ Add</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    gap: 12,
  },
  backBtn: {
    padding: 4,
  },
  searchInputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#0f172a',
    padding: 0,
  },
  centerBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  hintText: {
    marginTop: 12,
    fontSize: 13,
    color: '#64748b',
  },
  suggestionsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 12,
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 6,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#334155',
  },
  infoBanner: {
    flexDirection: 'row',
    backgroundColor: '#f0f9ff',
    borderRadius: 14,
    padding: 14,
    gap: 10,
    borderWidth: 1,
    borderColor: '#e0f2fe',
  },
  infoBannerText: {
    flex: 1,
    fontSize: 12,
    color: '#0369a1',
    lineHeight: 18,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0f172a',
    marginTop: 12,
    textAlign: 'center',
  },
  emptySub: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 6,
  },
  resultsList: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  itemInfo: {
    flex: 1,
    paddingRight: 12,
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
  itemSalt: {
    fontSize: 11,
    color: '#94a3b8',
    marginTop: 2,
  },
  itemMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
  },
  itemPack: {
    fontSize: 11,
    fontWeight: '600',
    color: '#475569',
  },
  stockChip: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  stockChipText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#15803d',
  },
  itemAction: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: '900',
    color: '#0f172a',
  },
  itemPriceLabel: {
    fontSize: 9,
    color: '#64748b',
    marginBottom: 6,
  },
  addBtn: {
    backgroundColor: '#0f172a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addBtnText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '800',
  },
});
