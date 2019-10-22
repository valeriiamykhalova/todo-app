export default class TodoController {
  constructor(view, model) {
    this.todoListView = view;
    this.todoListModel = model;

    this.initialize();
  }

  initialize() {
    this.todoListView.renderTodoList(this.todoListModel);
  }
}
