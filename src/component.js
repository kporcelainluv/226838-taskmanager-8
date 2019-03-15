class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
    this._element = null;
  }
  get element() {
    return this._element;
  }
  get template() {
    throw new Error(`You have to define template.`);
  }
  render() {
    const boardContainer = document.querySelector(`.board__tasks`);
    this._element = this.template;
    this.addEventListeners();
    boardContainer.appendChild(this._element);
  }
  unrender() {
    this.removeEventListeners();
    this._element = null;
  }
  addEventListeners() {}
  removeEventListeners() {}
}
export { Component };
