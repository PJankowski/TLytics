class Storage {
  constructor() {
    this.localStorage = window.localStorage;
  }
  set(key, value) {
    this.localStorage.setItem(key, value);
  }

  get(key) {
    return this.localStorage.getItem(key);
  }

  remove(key) {
    this.localStorage.removeItem(key);
  }
}

export default Storage;
