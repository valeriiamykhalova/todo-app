import CreateTodoView from '../views/CreateTodoView';
import EditTodoController from './EditTodoController';

export default class TodoController {
  constructor(view, model, todo) {
    this.todoView = view;
    this.todoModel = model;
    this.todo = todo;

    this.initialize();
  }

  initialize() {
    this.todoView.onclickDeleteTodo = () => {
      this.todoModel.deleteTodo(this.todo.id, () => {
        this.todoView.deleteTodo();
      });
    };

    this.todoView.onclickEditTodo = () => {
      const addTodoModelEl = document.querySelector('.add-todo-model');
      const createTodoView = new CreateTodoView(addTodoModelEl);

      new EditTodoController(
        createTodoView, this.todoView, this.todoModel, this.todo.id
      );

      createTodoView.toggleHiddenModal();

      createTodoView.setTodoTitle(this.todo.title);
      createTodoView.setTodoDescription(this.todo.description);
      createTodoView.setTodoPriority(this.todo.priority);
    };

    this.todoView.onclickDoneTodo = () => {
      this.todoModel.doneTodo(this.todo.id, () => {
        this.todoView.markAsDoneTodo();
      });
    };

    this.todoModel.getTodo(this.todo.id, () => {
      this.todoView.renderTodo(this.todoModel);
    });
  }
}
