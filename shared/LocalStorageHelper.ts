export function getArrayAtLocalStorage(localStorageKey: string): string[] {
  let strJson = localStorage.getItem(localStorageKey);
  if (!strJson) {
    return [];
  }
  return JSON.parse(strJson) as string[];
}

export function removeArrayValueAtLocalStorage(localStorageKey, arrayValue) {
  let array = getArrayAtLocalStorage(localStorageKey);
  array = array.filter((element) => element !== arrayValue);
  localStorage.setItem(localStorageKey, JSON.stringify(array));
}

export function addArrayValueAtLocalStorage(localStorageKey, newValue) {
  let array = getArrayAtLocalStorage(localStorageKey);
  if (!array.includes(newValue)) {
    array.push(newValue);
    localStorage.setItem(localStorageKey, JSON.stringify(array));
  }
}

export function getDictAtLocalStorage(localStorageKey: string): Record<string, string> {
  let strJson = localStorage.getItem(localStorageKey);
  if (!strJson) {
    return {};
  }
  return JSON.parse(strJson) as Record<string, string>;
}

export function removeKeyAtLocalStorage(localStorageKey, key) {
  const dict = getDictAtLocalStorage(localStorageKey);
  delete dict[key];
  localStorage.setItem(localStorageKey, JSON.stringify(dict));
}

export function addOrUpdateValueAtLocalStorage(localStorageKey, Key, value) {
  const dict = getDictAtLocalStorage(localStorageKey);
  dict[Key] = value;
  localStorage.setItem(localStorageKey, JSON.stringify(dict));
}