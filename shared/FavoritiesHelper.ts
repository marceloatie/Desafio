import {
  getArrayAtLocalStorage,
  addArrayValueAtLocalStorage,
  removeArrayValueAtLocalStorage,
} from '../shared/LocalStorageHelper';

const favoritiesKey = 'favorities';

export function checkFavoriteAtLocalStorage(postId) {
  let fav = getArrayAtLocalStorage(favoritiesKey);
  return fav.includes(postId);
}

export function updateFavoriteAtLocalStorage(postId, isFavorited: boolean) {
  if (isFavorited) {
    addArrayValueAtLocalStorage(favoritiesKey, postId);
  } else {
    removeArrayValueAtLocalStorage(favoritiesKey, postId);
  }
}

export function getAllFavoriteAtLocalStorage() {
  return getArrayAtLocalStorage(favoritiesKey);
}
