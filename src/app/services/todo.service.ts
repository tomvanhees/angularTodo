import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';


import {TodoItem} from '../../assets/types/todo-item';
import {TODOITEMS} from '../todo-items/TodoItems-stub';
import {TodoItemModel} from '../../assets/models/TodoItemModel';
import {DatabaseService} from './database.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoItems: TodoItem[] = [];
  databaseService;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.init();

    // this.init().subscribe(todoitems => this.todoItems = todoitems.map(item => new TodoItemModel().deserialize(item)));
  }

  init(): any {
    this.databaseService.get().then(response => {
      this.todoItems = response.rows.map(responseItem => new TodoItemModel().deserialize(responseItem.doc));
    });
  }

  addTodoItem(todoItem: TodoItem) {
    this.databaseService.post(todoItem);
    this.todoItems.push(todoItem);


  }

  deleteTodoItem(todoItem: TodoItem): void {
    this.databaseService.delete(todoItem);

    const index = this.todoItems.indexOf(todoItem);
    this.todoItems.splice(index, 1);


  }

}
