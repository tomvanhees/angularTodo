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

  constructor(private databaseService: DatabaseService) {
    this.init();
  }

  init(): any {
    this.databaseService.get().then(response => {
      this.todoItems = response.rows.map(responseItem => new TodoItemModel().deserialize(responseItem.doc));
    });
  }

  addTodoItem(todoItem: TodoItem): void {
    this.databaseService.post(todoItem).then(response => {
      todoItem._id = response.id;
      todoItem._rev = response.rev;
      this.todoItems.push(todoItem);
    }).catch(error => {
      console.log(error);
    });
  }

  deleteTodoItem(todoItem: TodoItem): void {
    this.databaseService.delete(todoItem).then(() => {
      const index = this.todoItems.indexOf(todoItem);
      this.todoItems.splice(index, 1);
    }).catch(error => {
      console.log(error);
    });
  }
}
