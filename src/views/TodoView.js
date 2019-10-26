export default class TodoView {
  constructor(element) {
    this.element = element;
    this.onclickDeleteTodo = null;
    this.onclickEditTodo = null;
    this.onclickDoneTodo = null;
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
          <div class="todo-dropdown">
            <button class="todo-dropdown__button">...</button>
            <div class="todo-dropdown__menu">
              <div class="todo-dropdown__content">
                <button type="button" class="todo-dropdown__item done-button todo-dropdown__item--active">done</li>
                <button type="button" class="todo-dropdown__item edit-button">edit</li>
                <button type="button" class="todo-dropdown__item delete-button">delete</li>
              </div>
            </div>
          </div>
        </div>
    `;

    if (model.todo.done) {
      this.element.classList.add('todo-item--done');
    }

    const deleteButtonEl = this.element.querySelector('.delete-button');
    deleteButtonEl.addEventListener('click', this.onclickDeleteTodo);

    const editButtonEl = this.element.querySelector('.edit-button');
    editButtonEl.addEventListener('click', this.onclickEditTodo);

    const doneButtonEl = this.element.querySelector('.done-button');
    doneButtonEl.addEventListener('click', this.onclickDoneTodo);

  }

  deleteTodo() {
    this.element.remove();
  }

  markAsDoneTodo() {
    this.element.classList.add('todo-item--done');
  }
}
