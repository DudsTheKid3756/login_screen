const storeItem = (key: string, item: any, storageType: string) =>
  window[`${storageType}Storage`].setItem(key, JSON.stringify(item));

const getItem = (key: string, storageType: string) =>
  JSON.parse(window[`${storageType}Storage`].getItem(key));

const removeItem = (key: string, storageType: string) =>
  window[`${storageType}Storage`].removeItem(key);

const clearStorage = (storageType: string) => window[`${storageType}Storage`].clear();

export { storeItem, getItem, clearStorage, removeItem };
