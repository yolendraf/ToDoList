// Mengambil form elemen
const formElement = document.querySelector('form-todo');

// Menambahkan form event listener
formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    // Mengambil input elemen di html
    const inputElemen = document.querySelector('.input-todo');
    console.log(inputElement.value);

    // Mengambil wrapper todo element sebagai entry point todo item
    const wrapperTodoElement = document.querySelector('.wrapper-todo');

    // Membuat todo item di js
    // const todoItem = `<li class="todo-item">${inputElement.value}</li>`;
    const todoItem = document.createElement('li');
    todoItem.innerHTML = inputElemen.value;

    // Menambahkan todo item kedalam wrapper todo
    // wrapperTodoElement.innerHTML = todoItem;
    wrapperTodoElement.append(todoItem);

    // Menghapus input value setelah submit
    inputElemen.value = '';
});