import TodoModel from './models/TodoModel';
import TodoListView from './views/TodoListView';
import TodoListController from './controllers/TodoListController';

require('./styles/main.styl');

const todosEl = document.querySelector('.todos');

const todoListView = new TodoListView(todosEl);
const todoModel = new TodoModel();
new TodoListController(todoListView, todoModel);
