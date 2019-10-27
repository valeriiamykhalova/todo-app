import TodoModel from '../models/TodoModel';
import CreateTodoView from '../views/CreateTodoView';
import TodoListView from '../views/TodoListView';
import CreateTodoController from './CreateTodoController';
import TodoListController from './TodoListController';
import { todos, setTodos } from '../../todos';

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

    const todoList = [...todos];
    const todosEl = document.querySelector('.todos');
    const todoListView = new TodoListView(todosEl);
    const todoModel = new TodoModel();

    this.navigationView.oninputSearchTodos = (evt) => {
      if (evt.target.value) {
        let foundTodos = todos.filter(
          (todo) => todo.title.toLowerCase().includes(evt.target.value)
        );
        setTodos(foundTodos);
      } else {
        setTodos(todoList);
      }

      new TodoListController(todoListView, todoModel);
    };

    this.navigationView.onchangeFilterDoneTodos = (evt) => {
      let foundTodos = [];

      if (evt.target.value === 'done') {
        foundTodos = todos.filter((todo) => todo.done === true);
      } else if (evt.target.value === 'open') {
        foundTodos = todos.filter((todo) => todo.done === false);
      } else {
        foundTodos = todoList;
      }
      setTodos(foundTodos);
      new TodoListController(todoListView, todoModel);
    };

    this.navigationView.onchangeFilterPriorityTodos = (evt) => {
      let foundTodos = [];
      if (evt.target.value === 'all') {
        foundTodos = todoList;
      } else {
        foundTodos = todos.filter((todo) => todo.priority === evt.target.value);
      }
      setTodos(foundTodos);
      new TodoListController(todoListView, todoModel);
    };
    this.navigationView.renderNavigation();
  }
}
