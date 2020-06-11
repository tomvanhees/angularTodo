import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../assets/types/todo-item';
import {TodoService} from '../services/todo.service';


@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.sass']
})

export class TodoItemsComponent implements OnInit {

  constructor(public todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  toggleCompleted(todoItem: TodoItem): void {
    todoItem.isDone = !todoItem.isDone;
  }

  deleteItem(todoItem: TodoItem) {
    this.todoService.deleteTodoItem(todoItem);
  }
}
