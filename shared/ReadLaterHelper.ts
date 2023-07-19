import {
  getArrayAtLocalStorage,
  addArrayValueAtLocalStorage,
  removeArrayValueAtLocalStorage,
} from './LocalStorageHelper';

const readLaterKey = 'readLater';

export function checkReadLaterAtLocalStorage(postId) {
  let readLeaterList = getArrayAtLocalStorage(readLaterKey);
  return readLeaterList.includes(postId);
}

export function updateReadLaterAtLocalStorage(postId, isReadLater: boolean) {
  if (isReadLater) {
    addArrayValueAtLocalStorage(readLaterKey, postId);
  } else {
    removeArrayValueAtLocalStorage(readLaterKey, postId);
  }
}

export function getAllReadLaterAtLocalStorage() {
  return getArrayAtLocalStorage(readLaterKey);
}
