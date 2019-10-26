export default class EditTodoController {
  constructor(createTodoView, todoView, todoModel, todoId) {
    this.createTodoView = createTodoView;
    this.todoView = todoView;
    this.todoModel = todoModel;
    this.todoId = todoId;

    this.initialize();
  }

  initialize() {
    this.createTodoView.onsubmitEditTodo = (evt) => {
      evt.preventDefault();

      const func = () => {
        this.todoView.renderTodo(this.todoModel);
      };

      if (this.createTodoView.getTodoTitle() === '' || this.createTodoView.getTodoDescription() === '') {
        this.createTodoView.showRequiredMessage();
        return;
      }

      this.todoModel.editTodo(
        this.todoId,
        this.createTodoView.getTodoTitle(),
        this.createTodoView.getTodoDescription(),
        this.createTodoView.getTodoPriority(),
        func
      );

      this.createTodoView.toggleHiddenModal();
    };

    this.createTodoView.oncancelCancelTodo = () => {
      this.createTodoView.toggleHiddenModal();
    };

    this.createTodoView.renderCreateTodo();
  }
}
