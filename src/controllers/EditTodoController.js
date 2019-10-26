export default class EditTodoController {
  constructor(createTodoView, todoView, todoModel) {
    this.createTodoView = createTodoView;
    this.todoView = todoView;
    this.todoModel = todoModel;

    this.initialize();
  }

  initialize() {
    this.createTodoView.onsubmitEditTodo = (evt) => {
      evt.preventDefault();

      const func = () => {
        this.todoView.renderTodo(this.todoModel);
      };

      this.todoModel.editTodo(
        this.todo.id,
        this.createTodoView.getTodoTitle(),
        this.createTodoView.getTodoDescription(),
        this.createTodoView.getTodoPriority(),
        func
      );

      this.createTodoView.toggleHiddenModal();
    };
  }
}
