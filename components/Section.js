class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      // call the renderer, and pass it the item as an argument
      this._renderer(item);
    });
  }

  addItem(todo /*element*/) {
    // add element to the container
    this._containerSelector.append(todo);
  }
}

export default Section;
