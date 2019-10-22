export default class TodoController {
  constructor(view, model, todoId) {
    this.todoView = view;
    this.todoModel = model;
    this.todoId = todoId;

    this.initialize();
  }

  initialize() {
    this.todoModel.getTodo(this.todoId, () => {
      this.todoView.renderTodo(this.todoModel);
    });
  }
}
