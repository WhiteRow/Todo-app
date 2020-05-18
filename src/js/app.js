import '../styles/app.scss';
import '../images/background-image.jpg'

import createElement from './components/createElement';

const Todo = (document => {
    const todoForm = document.querySelector('#todo-form');
    const addInput = document.querySelector('#add-input');
    const todoList = document.querySelector('#todo-list');
    const todoItems = document.querySelectorAll('.todo-item');
    const todoCounter = document.querySelector('.counter');

    function createTodoItem(title) {
        const checkbox = createElement('div', {
            class: 'material-icons checkbox'
        }, 'check_box_outline_blank');
        const label = createElement('label', {
            class: 'title'
        }, title);
        const editInput = createElement('input', {
            type: 'text',
            class: 'textfield'
        });
        const editButton = createElement('button', {
            class: 'edit material-icons'
        }, 'edit');
        const deleteButton = createElement('button', {
            class: 'delete material-icons'
        }, 'delete');
        const listItem = createElement('li', {
            class: 'todo-item'
        }, checkbox, label, editInput, editButton, deleteButton);

        bindEvents(listItem);
        
        return listItem;
    }

    function bindEvents(todoItem) {
        const checkbox = todoItem.querySelector('.checkbox');
        const editButton = todoItem.querySelector('.edit');
        const deleteButton = todoItem.querySelector('.delete');

        checkbox.addEventListener('click', toggleTodoItem);
        editButton.addEventListener('click', editTodoItem);
        deleteButton.addEventListener('click', deleteTodoItem);
    }

    function toggleTodoItem() {
        const checkbox = this;
        const listItem = checkbox.parentNode;

        listItem.classList.toggle('completed');

        if (checkbox.textContent == 'check_box') checkbox.innerText = 'check_box_outline_blank';
        else checkbox.innerText = 'check_box';
    }

    function editTodoItem() {
        const listItem = this.parentNode;
        const title = listItem.querySelector('.title');
        const editInput = listItem.querySelector('.textfield');
        const isEditing = listItem.classList.contains('editing');

        if (isEditing) {
            title.innerText = editInput.value;
            this.innerText = 'edit';
        } else {
            editInput.value = title.innerText;
            this.innerText = 'description';
        }

        listItem.classList.toggle('editing');
    }

    function deleteTodoItem() {
        this.parentNode.remove();
    }

    function addTodoItem(event) {
        event.preventDefault();

        if (addInput.value === '') return alert('Необходимо ввести название задачи');

        const listItem = createTodoItem(addInput.value);
        todoList.appendChild(listItem);
        addInput.value = '';
    }    
    
    function main() {
        todoForm.addEventListener('submit', addTodoItem);
        todoItems.forEach(item => bindEvents(item));
    }

    return main;
})(document)

Todo();