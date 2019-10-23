import { todos, setTodos } from '../../todos';

export default class TodoModel {
  constructor() {
    this.todo = null;
  }

  getTodo = (todoId, callback) => {
    this.todo = todos.find((todo) => todo.id === todoId);
    callback(null);
  }

  createTodo = (title, description, priority, callback) => {
    const todoList = [...todos, {
      id: Math.floor(Math.random() * Math.floor(1000)),
      done: false,
      title,
      description,
      priority
    }];

    setTodos(todoList);
    callback(null);
  }

  deleteTodo = (todoId, callback) => {
    const deletedTodo = todos.find((todo) => todo.id === todoId);
    const todoList = [
      ...todos.slice(0, deletedTodo),
      ...todos.slice(deletedTodo + 1)
    ];
    setTodos(todoList);
    callback(null);
  }
}
