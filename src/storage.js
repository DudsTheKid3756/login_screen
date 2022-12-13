const storeItem = (key, item, storageType) =>
  JSON.stringify(window[`${storageType}Storage`].setItem(key, item));

const getItem = (key, storageType) =>
  JSON.parse(window[`${storageType}Storage`].getItem(key));

const removeItem = (key, storageType) =>
  window[`${storageType}Storage`].removeItem(key);

const clearStorage = (storageType) => window[`${storageType}Storage`].clear();

export { storeItem, getItem, clearStorage, removeItem };
