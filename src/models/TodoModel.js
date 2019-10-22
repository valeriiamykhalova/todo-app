import todos from '../../todos';

export default class TodoModel {
  constructor() {
    this.todos = todos;
    this.todo = null;
  }

  getTodo = (todoId, callback) => {
    this.todo = this.todos.find((todo) => todo.id === todoId);
    callback(null);
  }

  createTodo = (todo) => (
    [...this.todos, {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      status: false,
      priority: todo.priority
    }]
  )

  deleteTodo = (todo) => (
    [
      ...this.todos.slice(0, todo),
      ...this.todos.slice(todo + 1)
    ]
  )
}
