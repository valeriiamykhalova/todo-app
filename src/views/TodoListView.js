import TodoModel from '../models/TodoModel';
import TodoView from './TodoView';
import TodoController from '../controllers/TodoController';
import { todos } from '../../todos';

export default class TodoListView {
  constructor(element) {
    this.element = element;
  }

  renderTodoList(model) {
    const todoListEl = document.querySelector('.todo-list');
    todoListEl.innerHTML = '';

    todos.forEach((el) => {
      const todo = document.createElement('li');
      todo.classList.add('todo-item');

      const todoView = new TodoView(todo);
      const todoModel = new TodoModel();
      new TodoController(todoView, todoModel, el);

      todoListEl.appendChild(todo);
    });
  }
}
