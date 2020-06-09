import {Component, Output, Input, OnInit, EventEmitter} from '@angular/core';
import {TodoItem} from '../../assets/types/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})

export class TodoItemComponent implements OnInit {
  @Input() todoItem: TodoItem;
  @Output() deleted = new EventEmitter<TodoItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  removeItem(todoItem: TodoItem) {
    this.deleted.emit(todoItem);
  }
}
