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

  attachCompleteOnClick(todoWrapper);
  attachDeleteSpan(todoWrapper);

  return todoWrapper;
}

function attachCompleteOnClick(todo) {
  todo.addEventListener('click', () => {
    todo.classList.toggle('completed');
  });
}

function attachDeleteSpan(todo) {
  const deleteSpan = document.createElement('span');
  deleteSpan.textContent = '🗑️';
  deleteSpan.addEventListener('click', () => {
    todo.remove();
  });

  todo.appendChild(deleteSpan);
}
