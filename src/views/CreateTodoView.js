export default class CreateTodoView {
  constructor(element) {
    this.element = element;
    this.onsubmitAddTodo = null;
  }

  renderCreateTodo() {
    this.element.innerHTML = `
        <div class="modal hidden">
          <div class="modal__background"></div>
          <div class="modal__card">
            <form method="post" class="form">
              <p class="mb-1">
                <input class="form__title" type="text" spellcheck="false" placeholder="Title" autofocus required />
              </p>
              <p class="mb-1">
                <textarea class="form__description" spellcheck="false" placeholder="Write a description.." required
                  rows="5"></textarea>
              </p>
              <p class="mb-2">
                <label class="form__label">Priority: </label>
                <select required name="priority" class="form__priority">
                  <option value="high" selected>High</option>
                  <option value="normal">Normal</option>
                  <option value="low">Low</option>
                </select>
              </p>
              <p class="form__buttons-box">
                <button type="submit" class="main-button main-button--dark main-button--large submit-btn">Save</button>
                <button type="button" class="main-button main-button--large cancel-btn">Cancel</button>
              </p>
            </form>
          </div>
        </div>
    `;

    const addTodoButtonEl = this.element.querySelector('.submit-btn');

    addTodoButtonEl.addEventListener('click', this.onsubmitAddTodo);
  }

  getTodoTitle() {
    return this.element.querySelector('.form__title').value;
  }

  getTodoDescription() {
    return this.element.querySelector('.form__description').value;
  }

  getTodoPriority() {
    const formPriorityEl = this.element.querySelector('.form__priority');
    return formPriorityEl.options[formPriorityEl.selectedIndex].value;
  }
}
