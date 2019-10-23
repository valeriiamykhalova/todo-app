import TodoModel from './models/TodoModel';
import TodoListView from './views/TodoListView';
import CreateTodoView from './views/CreateTodoView';
import TodoListController from './controllers/TodoListController';
import CreateTodoController from './controllers/CreateTodoController';

require('./styles/main.styl');


const todosEl = document.querySelector('.todos');
const addTodoModelEl = document.querySelector('.add-todo-model');

const todoListView = new TodoListView(todosEl);
const createTodoView = new CreateTodoView(addTodoModelEl);
const todoModel = new TodoModel();
new TodoListController(todoListView, todoModel);
new CreateTodoController(createTodoView, todoListView, todoModel);
