const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addButton = document.getElementById('addButton');

const createTask = () => {
    const text = taskInput.value;
    const newElement = document.createElement('li');
    newElement.textContent = text;
    taskList.append(newElement);
    taskInput.value = '';
};

const checkTask = (evt) => {
    if (evt.target.tagName === "LI") {
        evt.target.classList.toggle("completed");
    }
};

addButton.addEventListener("click", createTask);
taskList.addEventListener("click", checkTask);