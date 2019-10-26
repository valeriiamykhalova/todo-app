export default class CreateTodoController {
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

      if (this.createTodoView.getTodoTitle() === '' || this.createTodoView.getTodoDescription() === '') {
        this.createTodoView.showRequiredMessage();
        return;
      }

      this.todoModel.createTodo(
        this.createTodoView.getTodoTitle(),
        this.createTodoView.getTodoDescription(),
        this.createTodoView.getTodoPriority(),
        func
      );

      this.createTodoView.toggleHiddenModal();
    };

    this.createTodoView.oncancelCancelTodo = () => {
      this.createTodoView.toggleHiddenModal();

      this.createTodoView.setTodoTitle('');
      this.createTodoView.getTodoDescription('');
      this.createTodoView.getTodoPriority('high');
    };

    this.createTodoView.renderCreateTodo();
  }
}
