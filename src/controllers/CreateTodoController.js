export default class TodoController {
  constructor(createTodoView, todoListView, todoModel) {
    this.createTodoView = createTodoView;
    this.todoListView = todoListView;
    this.todoModel = todoModel;

    this.initialize();
  }

  initialize() {
    this.createTodoView.onsubmitAddTodo = (evt) => {
      evt.preventDefault();

      const func = () => {
        this.todoListView.renderTodoList(this.todoModel);
      };

      this.todoModel.createTodo(
        this.createTodoView.getTodoTitle(),
        this.createTodoView.getTodoDescription(),
        this.createTodoView.getTodoPriority(),
        func
      );
    };

    this.createTodoView.renderCreateTodo();
  }
}
