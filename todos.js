/* eslint-disable */

let todos = [
  {
    "id": 1,
    "title": "sunt aut facere",
    "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum",
    "done": true,
    "priority": "high"
  },
  {
    "id": 2,
    "title": "qui est esse",
    "description": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores",
    "done": false,
    "priority": "low"
  },
  {
    "id": 3,
    "title": "ea molestias quasi",
    "description": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi",
    "done": true,
    "priority": "high"
  },
  {
    "id": 4,
    "title": "eum et est occaecati",
    "description": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda",
    "done": false,
    "priority": "low"
  },
  {
    "id": 5,
    "title": "nesciunt quas odio",
    "description": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est",
    "done": true,
    "priority": "normal"
  },
  {
    "id": 6,
    "title": "dolorem eum magni",
    "description": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid",
    "done": false,
    "priority": "normal"
  },
  {
    "id": 7,
    "title": "magnam facilis autem",
    "description": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe",
    "done": false,
    "priority": "hign"
  },
  {
    "id": 8,
    "title": "dolorem dolore",
    "description": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint",
    "done": true,
    "priority": "normal"
  },
  {
    "id": 9,
    "title": "nesciunt iure omnis",
    "description": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis",
    "done": false,
    "priority": "low"
  },
  {
    "id": 10,
    "title": "optio molestias",
    "description": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    "done": false,
    "priority": "normal"
  }
]

// to change the value of todos variable outside the module
function setTodos(value) {
  todos = value;
}

export { todos, setTodos };