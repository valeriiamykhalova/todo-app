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

  deleteTodo = (todo) => (
    [
      ...todos.slice(0, todo),
      ...todos.slice(todo + 1)
    ]
  )
}
