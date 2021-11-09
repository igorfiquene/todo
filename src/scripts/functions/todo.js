export default function () {
	const form = document.querySelector('#form-new-task');
	const inputNewTask= document.querySelector('.new-task');
	const listTasks = document.querySelector('.list__body');
	let todos = [];

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		let value = inputNewTask.value;

		if (value) {
			addTask(value);			
		}

	});

	function addTask(task) {
		
		// get current timmed
		const str = new Date().toLocaleString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true
		});

		const todo = {
			id: Math.random().toString(36),
			date: str,
			name: task
		};

		todos.push(todo);
		addToLocalStorage(todos);

		inputNewTask.value = '';

	}

	function addToLocalStorage(todos) {
		localStorage.setItem('todos', JSON.stringify(todos));

		renderTodos(todos);
	}
	
	function renderTodos(todos) {
		listTasks.innerHTML = '';

		const updateAttributes = (element, attributes) => {
			for (let key in attributes) {
				element.setAttribute(key, attributes[key]);
			}
		};

		todos.forEach(item => {
			const li = document.createElement('li');

			updateAttributes(li, {
				"data-id": item.id,
				"class": "list-item"
			});

			li.innerHTML = `
				<input class="btn" type="checkbox">

				<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 29 28">
					<path class="checkmark__check" fill="#D76A03" d="M27.235 1.636a3.626 3.626 0 00-5.713.034L10.25 16.264l-3.707-4.44A3.679 3.679 0 00.87 16.509l9.38 11.492L27.255 6.112a3.626 3.626 0 00-.02-4.476z"/>
				</svg>

				<div class="list-item__content">
					<label>${item.name}</label>
					<small>${item.date}</small>
				</div>
			`;

			listTasks.appendChild(li);
		});
		


	}

	function getFromLocalStorage() {
		const reference = localStorage.getItem('todos');

		if (reference) {
			todos = JSON.parse(reference);
			renderTodos(todos);
		}
	}

	getFromLocalStorage();

	function deleteTodo(id) {

		todos = todos.filter(function(item) {
			return item.id != id;
		});

		addToLocalStorage(todos);
	}

	listTasks.addEventListener('click', (e) => {
		if (e.target.type == "checkbox") {
			deleteTodo(e.target.parentNode.dataset.id);
		}
	});
}