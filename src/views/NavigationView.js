export default class TodoView {
  constructor(element) {
    this.element = element;
    this.onclickCreateTodo = null;
    this.oninputSearchTodos = null;
  }

  renderNavigation() {
    this.element.innerHTML = `
        <div class="search">
          <input class="search__input" spellCheck="false" type="text" placeholder="Search by title" />
        </div>
        <div>
          <select name="filterDone" class="navigation__filter">
            <option value="high">all</option>
            <option value="normal">open</option>
            <option value="low">done</option>
          </select>
        </div>
        <div>
          <select name="filterPriority" class="navigation__filter">
            <option value="all">all</option>
            <option value="high">high</option>
            <option value="normal">normal</option>
            <option value="low">low</option>
          </select>
        </div>
        <button type="button" class="main-button create-button">Create</button>
    `;

    const createButtonEl = this.element.querySelector('.create-button');
    createButtonEl.addEventListener('click', this.onclickCreateTodo);

    const searchInputEl = this.element.querySelector('.search__input');
    searchInputEl.addEventListener('input', this.oninputSearchTodos);
  }
}
