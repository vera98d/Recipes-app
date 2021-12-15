class Store {
  constructor(initialState = {}) {
    this.eventListeners = [];
    this.state = initialState;
  }

  onChange(func) {
    this.eventListeners.push(func);
  }

  dispatch(func) {
    this.state = func(this.state);
    this.eventListeners.forEach((fn) => fn(this.state));
  }
}

export default Store;
