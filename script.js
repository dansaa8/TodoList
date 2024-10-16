const form = document.querySelector('form');
const outputSection = document.querySelector('#output-section');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const textInput = formData.get('input-field');

  const todo = createTodo(textInput);

  outputSection.appendChild(todo);

  e.target.reset();

  console.log(textInput);
});

function createTodo(todoText) {
  const todoWrapper = document.createElement('div');
  todoWrapper.className = 'todo-wrapper';

  const textElement = document.createElement('p');
  textElement.textContent = todoText;
  todoWrapper.appendChild(textElement);

  createCompleteBtn(todoWrapper);
  createDeleteBtn(todoWrapper);

  return todoWrapper;
}

function createCompleteBtn(todo) {
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';

  completeBtn.addEventListener('click', () => {
    todo.classList.toggle('completed');
  });

  todo.appendChild(completeBtn);
}

function createDeleteBtn(todo) {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    todo.remove();
  });

  todo.appendChild(deleteBtn);
}
