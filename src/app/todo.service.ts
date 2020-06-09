import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';


import {TodoItem} from '../assets/types/todo-item';
import {TODOITEMS} from './todo-items/TodoItems-stub';
import {TodoItemModel} from '../assets/models/TodoItemModel';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoItems: TodoItem[] = [];

  constructor() {
    this.init().subscribe(todoitems => this.todoItems = todoitems.map(item => new TodoItemModel().deserialize(item)));
  }

  init(): Observable<TodoItem[]> {
    return of(TODOITEMS);
  }

  addTodoItem(todoItem: TodoItem) {
    this.todoItems.push(todoItem);
  }

  deleteTodoItem(todoItem: TodoItem): void {
    const index = this.todoItems.indexOf(todoItem);
    this.todoItems.splice(index, 1);
  }

}
