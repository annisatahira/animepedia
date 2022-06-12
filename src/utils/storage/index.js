class Storage {
  constructor({ type, key, value }) {
    this.type = type;
    this.key = key;
    this.value = value;
  }

  isStorageExist = () => {
    if (typeof Storage === undefined) {
      alert("Your browser does not support web storage API");
      return false;
    }
    return true;
  };

  setDataStorage() {
    if (this.isStorageExist()) {
      const parsed = JSON.stringify(this.value);
      this.type.setItem(this.key, parsed);
    }
  }

  getDataStorage() {
    const serializedData = this.type.getItem(this.key);

    if (serializedData) {
      let data = JSON.parse(serializedData);

      if (data !== null) {
        return data;
      }
    }

    return false;
  }
}

export default Storage;
