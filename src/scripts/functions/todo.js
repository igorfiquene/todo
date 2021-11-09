export default function () {
	const form = document.querySelector('#form-new-task');
	const inputNewTask= document.querySelector('.new-task');
	const listTasks = document.querySelector('.list__body');
	// const listTodo = document.querySelector('.list__body');

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		var allTasks = JSON.parse(localStorage.getItem('item'));
		console.log(allTasks);
		
		if (inputNewTask.value == (null || "")) {
			alert("Task can´t be empty!");
		} else {
			setNewTask(inputNewTask.value);
		}
		
	});

	function setNewTask(newTask) {
		createLi('list-item', newTask);
		setLocalStorage(newTask);
	}

	const createLi = (className, newTask) => {
		const newTaskItem = document.createElement('li');
		newTaskItem.setAttribute('class', className);
		newTaskItem.innerHTML = newTask;
		listTasks.appendChild(newTaskItem);
	};

	

	function setLocalStorage(inputValue) {
		var task = [];
		task = JSON.parse(localStorage.getItem('item')) || [];
		task.push(inputValue);
		localStorage.setItem('item', JSON.stringify(task));
	}
	
}