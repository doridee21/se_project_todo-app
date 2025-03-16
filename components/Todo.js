class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  getView(data) {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = todoElement.querySelector(".todo__name");
    const todoCheckboxEl = todoElement.querySelector(".todo__completed");
    const todoLabel = todoElement.querySelector(".todo__label");
    const todoDate = todoElement.querySelector(".todo__date");
    const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");

    return todoElement;
  }

  _setEventListeners() {
    this._element.todoDeleteBtn.addEventListener("click", () => {
      this._handleMessageClick();
    });

    this._element.todoCheckboxEl.addEventListener("click", () => {
      todoElement.remove();
    });
  }
}
export default Todo;
