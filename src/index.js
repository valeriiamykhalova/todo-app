import TodoModel from './models/TodoModel';
import TodoListView from './views/TodoListView';
import TodoListController from './controllers/TodoListController';
import NavigationView from './views/NavigationView';
import NavigationController from './controllers/NavigationController';

require('./styles/main.styl');


const todosEl = document.querySelector('.todos');
const addTodoModelEl = document.querySelector('.add-todo-model');
const navigationEl = document.querySelector('.navigation');

const todoListView = new TodoListView(todosEl);
const todoModel = new TodoModel();
new TodoListController(todoListView, todoModel);

const navigationView = new NavigationView(navigationEl);
new NavigationController(navigationView, todoListView);
