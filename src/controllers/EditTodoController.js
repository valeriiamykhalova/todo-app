import CreateTodoView from '../views/CreateTodoView';

export default class EditTodoController {
  constructor(todoView, todoModel, todo) {
    this.todoView = todoView;
    this.todoModel = todoModel;
    this.todo = todo;

    this.initialize();
  }

  initialize() {
    this.todoView.onclickEditTodo = () => {
      console.log('hi');
      const addTodoModelEl = document.querySelector('.add-todo-model');
      const createTodoView = new CreateTodoView(addTodoModelEl);

      createTodoView.renderCreateTodo();
    };
  }
}
