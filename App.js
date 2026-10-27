import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
  StatusBar,
  Alert,
  Platform,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Theme & API
import { COLORS } from './src/theme/colors';
import {
  getFastMovingItems,
  getNewlyAddedItems,
} from './src/services/api';

// Components
import Header from './src/components/Header';
import HeroSection from './src/components/HeroSection';
import DailyActionsGrid from './src/components/DailyActionsGrid';
import PromoCarousel from './src/components/PromoCarousel';
import FastMovingSection from './src/components/FastMovingSection';
import NewlyAddedSection from './src/components/NewlyAddedSection';
import CategoriesSection from './src/components/CategoriesSection';
import FeaturedBrandsSection from './src/components/FeaturedBrandsSection';
import AppHighlightSection from './src/components/AppHighlightSection';
import FeaturesGridSection from './src/components/FeaturesGridSection';
import FooterSection from './src/components/FooterSection';
import FloatingWhatsApp from './src/components/FloatingWhatsApp';

// Sub-Pages
import AboutPage from './src/pages/AboutPage';
import ContactPage from './src/pages/ContactPage';
import GalleryPage from './src/pages/GalleryPage';
import WholesalePage from './src/pages/WholesalePage';
import PrivacyPolicyPage from './src/pages/PrivacyPolicyPage';
import ReturnPolicyPage from './src/pages/ReturnPolicyPage';
import TermsPage from './src/pages/TermsPage';
import FaqPage from './src/pages/FaqPage';
import MrLoginPage from './src/pages/MrLoginPage';

// Modals
import SearchModal from './src/components/SearchModal';
import ProductDetailModal from './src/components/ProductDetailModal';
import CartModal from './src/components/CartModal';
import RegisterModal from './src/components/RegisterModal';

export default function App() {
  // Page Routing State
  const [currentPage, setCurrentPage] = useState('home');
  const scrollRef = useRef(null);

  // State for products data
  const [fastMoving, setFastMoving] = useState([]);
  const [newlyAdded, setNewlyAdded] = useState([]);
  const [loadingFastMoving, setLoadingFastMoving] = useState(true);
  const [loadingNewlyAdded, setLoadingNewlyAdded] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Modals state
  const [searchVisible, setSearchVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);
  const [authModal, setAuthModal] = useState({ visible: false, mode: 'register' });
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Load initial data from Jeplus API
  const loadData = useCallback(async () => {
    try {
      setLoadingFastMoving(true);
      setLoadingNewlyAdded(true);

      const [fastData, newData] = await Promise.all([
        getFastMovingItems(),
        getNewlyAddedItems(),
      ]);

      setFastMoving(fastData);
      setNewlyAdded(newData);
    } catch (e) {
      console.log('Error loading data:', e);
    } finally {
      setLoadingFastMoving(false);
      setLoadingNewlyAdded(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  // Central Navigation Router
  const handleNavigate = (pageName) => {
    if (!pageName) return;
    const lower = pageName.toLowerCase().trim();

    if (lower === 'home') {
      setCurrentPage('home');
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ y: 0, animated: true });
      }
    } else if (lower.includes('about')) {
      setCurrentPage('about');
    } else if (lower.includes('contact')) {
      setCurrentPage('contact');
    } else if (lower.includes('gallery')) {
      setCurrentPage('gallery');
    } else if (lower.includes('wholesale')) {
      setCurrentPage('wholesale');
    } else if (lower.includes('privacy')) {
      setCurrentPage('privacy');
    } else if (lower.includes('return')) {
      setCurrentPage('returns');
    } else if (lower.includes('term')) {
      setCurrentPage('terms');
    } else if (lower.includes('faq')) {
      setCurrentPage('faq');
    } else if (lower.includes('mr') || lower.includes('portal')) {
      setCurrentPage('mr-login');
    } else {
      setCurrentPage('home');
    }
  };

  // Cart operations
  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const pId = product.ItemCode || product.ItemName;
      const existing = prev.find((i) => (i.ItemCode || i.ItemName) === pId);
      if (existing) {
        return prev.map((i) =>
          (i.ItemCode || i.ItemName) === pId
            ? { ...i, qty: i.qty + quantity }
            : i
        );
      }
      return [...prev, { ...product, qty: quantity }];
    });
  };

  const handleUpdateCartQty = (product, newQty) => {
    const pId = product.ItemCode || product.ItemName;
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((i) => (i.ItemCode || i.ItemName) !== pId));
    } else {
      setCartItems((prev) =>
        prev.map((i) =>
          (i.ItemCode || i.ItemName) === pId ? { ...i, qty: newQty } : i
        )
      );
    }
  };

  const handleOpenProductDetail = (product) => {
    setSelectedProduct(product);
    setDetailVisible(true);
  };

  const handleActionSelect = (actionId) => {
    if (actionId === 'find') {
      setSearchVisible(true);
    } else if (actionId === 'bulk') {
      handleNavigate('wholesale');
    } else if (actionId === 'fast') {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ y: 500, animated: true });
      }
    } else if (actionId === 'categories') {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ y: 880, animated: true });
      }
    }
  };

  const handleTrackOrder = () => {
    Alert.alert(
      'Live Order Tracking',
      'Enter your Chemist Invoice No. or Registered Mobile Number to check real-time dispatch status.\n\nAverage Delivery: Under 3 Hours across Delhi & NCR.'
    );
  };

  const handleSupport = () => {
    handleNavigate('contact');
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.qty, 0);

  // Render subpage content if not on home
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <AboutPage
            onBack={() => setCurrentPage('home')}
            onNavigate={handleNavigate}
            onOrderNow={() => {
              setCurrentPage('home');
              setSearchVisible(true);
            }}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onBack={() => setCurrentPage('home')}
            onNavigate={handleNavigate}
            onOrderNow={() => {
              setCurrentPage('home');
              setSearchVisible(true);
            }}
          />
        );
      case 'gallery':
        return (
          <GalleryPage
            onBack={() => setCurrentPage('home')}
            onNavigate={handleNavigate}
            onOrderNow={() => {
              setCurrentPage('home');
              setSearchVisible(true);
            }}
          />
        );
      case 'wholesale':
        return (
          <WholesalePage
            onBack={() => setCurrentPage('home')}
            onNavigate={handleNavigate}
            onOrderNow={() => {
              setCurrentPage('home');
              setSearchVisible(true);
            }}
          />
        );
      case 'privacy':
        return (
          <PrivacyPolicyPage
            onBack={() => setCurrentPage('home')}
            onNavigate={handleNavigate}
            onOrderNow={() => {
              setCurrentPage('home');
              setSearchVisible(true);
            }}
          />
        );
      case 'returns':
        return (
          <ReturnPolicyPage
            onBack={() => setCurrentPage('home')}
            onNavigate={handleNavigate}
            onOrderNow={() => {
              setCurrentPage('home');
              setSearchVisible(true);
            }}
          />
        );
      case 'terms':
        return (
          <TermsPage
            onBack={() => setCurrentPage('home')}
            onNavigate={handleNavigate}
            onOrderNow={() => {
              setCurrentPage('home');
              setSearchVisible(true);
            }}
          />
        );
      case 'faq':
        return (
          <FaqPage
            onBack={() => setCurrentPage('home')}
            onNavigate={handleNavigate}
            onOrderNow={() => {
              setCurrentPage('home');
              setSearchVisible(true);
            }}
          />
        );
      case 'mr-login':
        return (
          <MrLoginPage
            onBack={() => setCurrentPage('home')}
            onNavigate={handleNavigate}
            onOrderNow={() => {
              setCurrentPage('home');
              setSearchVisible(true);
            }}
          />
        );
      case 'home':
      default:
        return (
          <>
            {/* Sticky Header */}
            <Header
              onHome={() => handleNavigate('home')}
              onOpenSearch={() => setSearchVisible(true)}
              onOpenOffers={() =>
                Alert.alert(
                  "Today's Chemist Offers",
                  'Special bulk discounts and manufacturer schemes are active on Antibiotics, Analgesics, and OTC products.'
                )
              }
              onOpenCart={() => setCartVisible(true)}
              onOpenSignIn={() => setAuthModal({ visible: true, mode: 'signin' })}
              cartCount={totalCartCount}
            />

            {/* Main Scrollable Body */}
            <ScrollView
              ref={scrollRef}
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  colors={[COLORS.accent]}
                  tintColor={COLORS.accent}
                />
              }
            >
              {/* 1. Hero Section */}
              <HeroSection
                onPlaceOrder={() => setSearchVisible(true)}
                onRegisterChemist={() =>
                  setAuthModal({ visible: true, mode: 'register' })
                }
              />

              {/* 2. Daily Pharmacy Actions Grid */}
              <DailyActionsGrid
                onSelectAction={handleActionSelect}
                onTrackOrder={handleTrackOrder}
                onSupport={handleSupport}
              />

              {/* 3. Promotional Banners Slider */}
              <PromoCarousel
                onBannerPress={(banner) => {
                  if (banner.id === 'b2') {
                    Alert.alert(
                      'Chemist Schemes',
                      'Check 12+1 and 10+2 bonus schemes available on selected brands.'
                    );
                  } else {
                    setSearchVisible(true);
                  }
                }}
              />

              {/* 4. Fast Moving Items */}
              <FastMovingSection
                items={fastMoving}
                loading={loadingFastMoving}
                onViewAll={() => setSearchVisible(true)}
                onSelectProduct={handleOpenProductDetail}
                onAddToCart={handleAddToCart}
              />

              {/* 5. Newly Added Items */}
              <NewlyAddedSection
                items={newlyAdded}
                loading={loadingNewlyAdded}
                onSelectProduct={handleOpenProductDetail}
                onAddToCart={handleAddToCart}
              />

              {/* 6. Shop by Category */}
              <CategoriesSection
                selectedCategory={selectedCategory}
                onSelectCategory={(catId) => {
                  setSelectedCategory(catId);
                  setSearchVisible(true);
                }}
              />

              {/* 7. Featured Brands */}
              <FeaturedBrandsSection
                onSelectBrand={(brand) => {
                  Alert.alert(
                    brand.name,
                    `Certified distribution of ${brand.name} medicines. Tap search to explore items.`
                  );
                }}
              />

              {/* 8. App Highlight & Google Play */}
              <AppHighlightSection />

              {/* 9. Features & Milestones Grid */}
              <FeaturesGridSection
                onStartOrder={() => setSearchVisible(true)}
                onKnowMore={() => handleNavigate('about')}
              />

              {/* 10. Footer Section with Live Page Routing */}
              <FooterSection
                onOrderNow={() => setSearchVisible(true)}
                onOpenPolicy={handleNavigate}
              />
            </ScrollView>
          </>
        );
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.rootWrapper}>
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

          {/* Render Active Page */}
          {renderCurrentPage()}

          {/* Floating WhatsApp Quick Help */}
          <FloatingWhatsApp />

          {/* Search Modal */}
          <SearchModal
            visible={searchVisible}
            onClose={() => setSearchVisible(false)}
            onSelectProduct={(p) => {
              setSearchVisible(false);
              handleOpenProductDetail(p);
            }}
            onAddToCart={(p) => handleAddToCart(p, 1)}
          />

          {/* Product Details Sheet */}
          <ProductDetailModal
            visible={detailVisible}
            product={selectedProduct}
            onClose={() => setDetailVisible(false)}
            onAddToCart={handleAddToCart}
          />

          {/* Chemist Cart Modal */}
          <CartModal
            visible={cartVisible}
            items={cartItems}
            onClose={() => setCartVisible(false)}
            onUpdateQty={handleUpdateCartQty}
            onClearCart={() => setCartItems([])}
          />

          {/* Chemist Register / Sign In Modal */}
          <RegisterModal
            visible={authModal.visible}
            mode={authModal.mode}
            onClose={() => setAuthModal({ visible: false, mode: 'register' })}
          />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootWrapper: {
    flex: 1,
    backgroundColor: Platform.OS === 'web' ? '#0f172a' : '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: Platform.OS === 'web' ? 480 : undefined,
    backgroundColor: '#ffffff',
    ...(Platform.OS === 'web'
      ? {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.35,
          shadowRadius: 25,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderColor: '#1e293b',
          overflow: 'hidden',
        }
      : {}),
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    paddingBottom: 40,
  },
});
