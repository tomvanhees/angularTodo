import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {TodoItemComponent} from './todo-item/todo-item.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { AddTodoItemComponent } from './add-todo-item/add-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoItemsComponent,
    AddTodoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
