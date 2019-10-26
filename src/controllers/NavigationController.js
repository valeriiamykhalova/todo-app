import TodoModel from '../models/TodoModel';
import CreateTodoView from '../views/CreateTodoView';
import CreateTodoController from './CreateTodoController';

export default class TodoController {
  constructor(view, todoListView) {
    this.navigationView = view;
    this.todoListView = todoListView;

    this.initialize();
  }

  initialize() {
    this.navigationView.onclickCreateTodo = () => {
      const addTodoModelEl = document.querySelector('.add-todo-model');

      const createTodoView = new CreateTodoView(addTodoModelEl);
      const todoModel = new TodoModel();
      new CreateTodoController(createTodoView, this.todoListView, todoModel);
      createTodoView.toggleHiddenModal();
    };

    this.navigationView.renderNavigation();
  }
}
