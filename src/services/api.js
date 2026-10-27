import { MOCK_FAST_MOVING, MOCK_NEW_ITEMS, MOCK_CATEGORIES } from '../data/mockData';

const BASE_URL = 'https://api.jeplus.tech/api/v1/jeplus';

async function fetchWithTimeout(url, options = {}, timeoutMs = 6000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export async function getFastMovingItems() {
  try {
    const res = await fetchWithTimeout(`${BASE_URL}/fast-moving-item`);
    if (res.ok) {
      const json = await res.json();
      if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
        return json.data;
      }
    }
  } catch (e) {
    console.log('Falling back to local fast moving items:', e.message);
  }
  return MOCK_FAST_MOVING;
}

export async function getNewlyAddedItems() {
  try {
    const res = await fetchWithTimeout(`${BASE_URL}/newly-added-item`);
    if (res.ok) {
      const json = await res.json();
      if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
        return json.data;
      }
    }
  } catch (e) {
    console.log('Falling back to local new items:', e.message);
  }
  return MOCK_NEW_ITEMS;
}

export async function searchMedicines(query) {
  if (!query || query.trim().length === 0) return [];
  try {
    const res = await fetchWithTimeout(
      `${BASE_URL}/items/searchv2?search=${encodeURIComponent(query.trim())}&page=1&limit=15`
    );
    if (res.ok) {
      const json = await res.json();
      if (json && json.data && Array.isArray(json.data)) {
        return json.data;
      }
    }
  } catch (e) {
    console.log('Search API failed, fallback to local search:', e.message);
  }
  
  // Local fallback search
  const q = query.toLowerCase();
  const pool = [...MOCK_FAST_MOVING, ...MOCK_NEW_ITEMS];
  return pool.filter(
    (item) =>
      item.ItemName?.toLowerCase().includes(q) ||
      item.Compname?.toLowerCase().includes(q) ||
      item.SaltName?.toLowerCase().includes(q) ||
      item.ItemCatName?.toLowerCase().includes(q)
  );
}

export async function getAllCategories() {
  try {
    const res = await fetchWithTimeout(`${BASE_URL}/get-all-category`);
    if (res.ok) {
      const json = await res.json();
      if (json && json.data && Array.isArray(json.data)) {
        return json.data;
      }
    }
  } catch (e) {
    console.log('Categories API fallback:', e.message);
  }
  return MOCK_CATEGORIES;
}
