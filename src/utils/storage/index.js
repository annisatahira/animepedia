class Storage {
  static isStorageExist = () => {
    if (typeof Storage === undefined) {
      alert("Your browser does not support web storage API");
      return false;
    }
    return true;
  };

  static setDataStorage({ type, key, value }) {
    if (this.isStorageExist()) {
      const parsed = JSON.stringify(value);
      type.setItem(key, parsed);
    }
  }

  static getDataStorage({ type, key }) {
    const serializedData = type.getItem(key);

    if (serializedData) {
      let data = JSON.parse(serializedData);

      if (data !== null) {
        return data;
      }
    }

    return [];
  }
}

export default Storage;
