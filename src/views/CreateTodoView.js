export default class CreateTodoView {
  constructor(element) {
    this.element = element;
    this.onsubmitAddTodo = null;
    this.onsubmitEditTodo = null;
    this.oncancelCancelTodo = null;
  }

  renderCreateTodo() {
    this.element.innerHTML = `
        <div class="modal hidden">
          <div class="modal__background"></div>
          <div class="modal__card">
            <form method="post" class="form">
              <div class="mb-1">
                <input class="form__title" type="text" spellcheck="false" placeholder="Title" autofocus required />
              </div>
              <div class="mb-1">
                <textarea class="form__description" spellcheck="false" placeholder="Write a description.." required
                  rows="5"></textarea>
                <p class="is-required description-title-required hidden">Description and title are required!</p>
              </div>
              <p class="mb-2">
                <label class="form__label">Priority: </label>
                <select required name="priority" class="form__priority">
                  <option value="high" data-id="0">high</option>
                  <option value="normal" data-id="1">normal</option>
                  <option value="low" data-id="2">low</option>
                </select>
              </p>
              <p class="form__buttons-box">
                <button type="button" class="main-button main-button--dark main-button--large submit-btn">Save</button>
                <button type="button" class="main-button main-button--large cancel-btn">Cancel</button>
              </p>
            </form>
          </div>
        </div>
    `;

    const submitButtonEl = this.element.querySelector('.submit-btn');
    const cancelButtonEl = this.element.querySelector('.cancel-btn');

    submitButtonEl.addEventListener('click', this.onsubmitEditTodo);
    submitButtonEl.addEventListener('click', this.onsubmitAddTodo);
    cancelButtonEl.addEventListener('click', this.oncancelCancelTodo);
  }

  getTodoTitle() {
    return this.element.querySelector('.form__title').value;
  }

  setTodoTitle(value) {
    this.element.querySelector('.form__title').value = value;
  }

  getTodoDescription() {
    return this.element.querySelector('.form__description').value;
  }

  setTodoDescription(value) {
    this.element.querySelector('.form__description').value = value;
  }

  getTodoPriority() {
    const formPriorityEl = this.element.querySelector('.form__priority');
    return formPriorityEl.options[formPriorityEl.selectedIndex].value;
  }

  setTodoPriority(value) {
    const formPriorityEl = this.element.querySelector('.form__priority');
    formPriorityEl.options.selectedIndex = Array.from(formPriorityEl.options)
      .find((option) => option.value === value).dataset.id;
  }

  toggleHiddenModal() {
    const modalEl = this.element.querySelector('.modal');
    const body = document.querySelector('body');

    modalEl.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
  }

  showRequiredMessage() {
    const descriptionTitleRequiredEl = document.querySelector('.description-title-required');
    descriptionTitleRequiredEl.classList.remove('hidden');
  }
}
