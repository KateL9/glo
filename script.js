'use strict';
/*Сообщить пользователю (любым способом) что пустое дело добавить нельзя
3) Реализовать методы handler(), deleteItem(), completedItem()
*/
class Todo {
    constructor(form, input, todoList, todoCompleted) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
    }
    addToStorage() {
        localStorage.setItem('toDoList', JSON.stringify([...this.todoData]))
    }

    render() {
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.input.value = '';
        this.todoData.forEach(this.createItem, this);
        this.addToStorage();
    }

    createItem(todo) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.key = todo.key;
        li.insertAdjacentHTML('beforeend', `<span class="text-todo">${todo.value}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
        </div>`);

        if (todo.completed) {
            this.todoCompleted.append(li)
        } else {
            this.todoList.append(li);
        }
    }

    addTodo(e) {
        e.preventDefault();
        if (this.input.value.trim()) {
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey()
            }
            this.todoData.set(newTodo.key, newTodo);
            this.render();
        } else {
            alert('Пустой ввод!');
        }

    }
    generateKey() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    deleteItem(a) {
        this.todoData.delete(a);
        this.render();
    }

    completedItem(a) {
        //перебрать все элементы todoData и найти ключ на который нажали, поменять значение completed
        const todoData = this.todoData;
        let val = todoData.values()
        for (let el of val) {
            if (el.key == a) {
                el.completed ? el.completed = false : el.completed = true;
            }
        }
        this.render();
        // this.todoData.get(a).completed ? this.todoData.get(a).completed = false : this.todoData.get(a).completed = true;
        // this.render();
    }

    handler() {
        const todoContainer = document.querySelector('.todo-container');
        todoContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('todo-remove')) {
                this.deleteItem(event.target.closest('.todo-item').key)
            } else if (event.target.classList.contains('todo-complete')) {
                this.completedItem(event.target.closest('.todo-item').key)
            }
        })
    }

    init() {
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
        this.handler();
    }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();