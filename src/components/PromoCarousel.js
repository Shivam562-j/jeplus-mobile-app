import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_PROMO_BANNERS } from '../data/mockData';

const { width } = Dimensions.get('window');
const CARD_WIDTH = Math.min(width - 40, 360);

export default function PromoCarousel({ onBannerPress }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    if (index !== activeIndex && index >= 0 && index < MOCK_PROMO_BANNERS.length) {
      setActiveIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        contentContainerStyle={styles.scrollContent}
      >
        {MOCK_PROMO_BANNERS.map((banner) => (
          <TouchableOpacity
            key={banner.id}
            activeOpacity={0.9}
            style={styles.cardContainer}
            onPress={() => onBannerPress && onBannerPress(banner)}
          >
            <LinearGradient
              colors={banner.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientCard}
            >
              <View style={styles.contentCol}>
                <View style={styles.tagWrap}>
                  <Text style={styles.tagText}>{banner.tag}</Text>
                </View>
                <Text style={styles.titleText}>{banner.title}</Text>
                <Text style={styles.subtitleText}>{banner.subtitle}</Text>
                
                <View style={styles.ctaButton}>
                  <Text style={styles.ctaText}>{banner.cta}</Text>
                  <Ionicons name="arrow-forward" size={14} color="#0f172a" />
                </View>
              </View>

              <View style={styles.iconCol}>
                <View style={styles.iconCircle}>
                  <Ionicons name={banner.icon} size={36} color="#ffffff" />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.dotsRow}>
        {MOCK_PROMO_BANNERS.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === activeIndex ? styles.dotActive : null]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  cardContainer: {
    width: CARD_WIDTH,
    borderRadius: 20,
    overflow: 'hidden',
  },
  gradientCard: {
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 150,
  },
  contentCol: {
    flex: 1,
    paddingRight: 10,
  },
  tagWrap: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginBottom: 8,
  },
  tagText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 23,
    marginBottom: 6,
  },
  subtitleText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 12,
  },
  ctaButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    gap: 6,
  },
  ctaText: {
    color: '#0f172a',
    fontSize: 12,
    fontWeight: '800',
  },
  iconCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#cbd5e1',
  },
  dotActive: {
    width: 20,
    backgroundColor: '#e11d48',
  },
});
