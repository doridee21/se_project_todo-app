import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (data) => {
    // TODO - move code from exisiting submission handler to here
    //console.log(evt.target.name.value);
    //console.log(evt.target.date.value);
    const name = data.name;
    const dateInput = data.date;

    // Create a date object and adjust for timezone
    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();
    const values = { name, date, id };
    //renderTodo(values); //use addItem method instead
    addItem(values); // check to see if correct
    //closeModal(addTodoPopupEl);
    addTodoPopup.close();
    newTodoValidator.resetValidation();
  },
});
addTodoPopup.setEventListeners();

// The logic in this function should all be handled in the Todo class.
function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

const addItem = (item) => {
  const todoElement = generateTodo(item);
  todoList.addItem(todoElement);
};

const todoList = new Section({
  items: initialTodos, // pass initial todos
  renderer: (item) => {
    const todo = generateTodo(item); // generate todo item
    todosList.append(todo); // add it to the todo list
    // check to see if correct // refer to the forEach loop in this file
  },
  containerSelector: ".todos__list",
});
// call section instance's renderItems method

todoList.renderItems();

//const openModal = (modal) => {
//  modal.classList.add("popup_visible");
//};

//const closeModal = (modal) => {
//  modal.classList.remove("popup_visible");
//};

const renderTodo = (item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
};

//function handleEscapeClose(evt) {
//  if (evt.key === "Escape") {
//    // find the currently opened modal
//    // and close it
//    addTodoPopup.close();
//  }
//}

addTodoButton.addEventListener("click", () => {
  //openModal(addTodoPopupEl);
  addTodoPopup.open();
});

//addTodoCloseBtn.addEventListener("click", () => {
//  //closeModal(addTodoPopupEl);
//    addTodoPopup.close();
//});

//addTodoForm.addEventListener("submit", (evt) => {
//  evt.preventDefault();
//  const name = evt.target.name.value;
//  const dateInput = evt.target.date.value;
//
//  // Create a date object and adjust for timezone
//  const date = new Date(dateInput);
//  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
//
//  const id = uuidv4();
//  const values = { name, date, id };
//  //renderTodo(values); //use addItem method instead
//  addItem(values); // check to see if correct
//  //closeModal(addTodoPopupEl);
//  addTodoPopup.close();
//  newTodoValidator.resetValidation();
//});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);

newTodoValidator.enableValidation();
