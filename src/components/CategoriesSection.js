import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_CATEGORIES } from '../data/mockData';
import { COLORS } from '../theme/colors';

export default function CategoriesSection({
  selectedCategory = 'all',
  onSelectCategory,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.badgeWrap}>
          <Text style={styles.badgeText}>BROWSE CATALOG</Text>
        </View>
        <Text style={styles.title}>Shop by Category</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollList}
      >
        {MOCK_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <TouchableOpacity
              key={cat.id}
              style={[
                styles.categoryChip,
                isSelected ? styles.categoryChipActive : null,
              ]}
              onPress={() => onSelectCategory && onSelectCategory(cat.id)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.iconWrap,
                  isSelected ? styles.iconWrapActive : null,
                ]}
              >
                <Ionicons
                  name={cat.icon}
                  size={16}
                  color={isSelected ? '#ffffff' : '#0284c7'}
                />
              </View>
              <Text
                style={[
                  styles.chipText,
                  isSelected ? styles.chipTextActive : null,
                ]}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  badgeWrap: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0fdf4',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dcfce7',
    marginBottom: 4,
  },
  badgeText: {
    color: '#16a34a',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: -0.4,
  },
  scrollList: {
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 8,
  },
  categoryChipActive: {
    backgroundColor: '#0f172a',
    borderColor: '#0f172a',
  },
  iconWrap: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapActive: {
    backgroundColor: '#334155',
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },
  chipTextActive: {
    color: '#ffffff',
    fontWeight: '700',
  },
});
