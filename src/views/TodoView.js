export default class TodoView {
  constructor(element) {
    this.element = element;
  }

  renderTodo(model) {
    const {
      title, description, done, priority
    } = model.todo;

    this.element.innerHTML = `
        <h2 class="todo-item__title">${title}</h2>
        <p class="todo-item__description">${description}</p>
        <div class="todo-item__wrapper">
          <span class="todo-item__priority">${priority}</span>
          <button type="button" class="todo-item__status">${done}</button>
        </div>
    `;
  }
}
