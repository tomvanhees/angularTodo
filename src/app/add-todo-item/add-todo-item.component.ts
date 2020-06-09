import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {TodoItem} from '../../assets/types/todo-item';
import {TodoItemModel} from '../../assets/models/TodoItemModel';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss']
})
export class AddTodoItemComponent implements OnInit {
  newTodo: TodoItem = {
    description: '',
    isDone: false,
  };

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.createNewTodo();
  }

  createNewTodo(): void {
    this.newTodo = new TodoItemModel();
  }

  update(value: string) {
    console.log(value);
    this.newTodo.description = value;
  }

  addTodoItem() {
    this.todoService.addTodoItem(this.newTodo);
    this.createNewTodo();
  }
}
