import TodoModel from '../models/TodoModel';
import TodoView from './TodoView';
import TodoController from '../controllers/TodoController';

export default class TodoListView {
  constructor(element) {
    this.element = element;
  }

  renderTodoList(model) {
    const todoList = model.todos;
    const todoListEl = document.querySelector('.todo-list');

    todoList.forEach((el) => {
      const todo = document.createElement('li');
      todo.classList.add('todo-item');

      const todoView = new TodoView(todo);
      const todoModel = new TodoModel();
      new TodoController(todoView, todoModel, el.id);

      todoListEl.appendChild(todo);
    });
  }
}
