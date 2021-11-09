export default function () {
	const form = document.querySelector('#form-new-task');
	const inputNewTask= document.querySelector('.new-task');
	const listTasks = document.querySelector('.list__body');
	// const listTodo = document.querySelector('.list__body');

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		setNewTask(inputNewTask.value);

	});

	function setNewTask(newTask) {
		const newTaskItem = document.createElement('li');

		newTaskItem.setAttribute('class', 'list-item');
		newTaskItem.innerHTML = newTask;
		listTasks.appendChild(newTaskItem);

		setLocalStorage(newTask);


	}

	function setLocalStorage(inputValue) {
		var task = [];
    task = JSON.parse(localStorage.getItem('item')) || [];
    task.push(inputValue);
    localStorage.setItem('item', JSON.stringify(task));
	}
	
}