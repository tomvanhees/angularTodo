import {Injectable} from '@angular/core';
import PouchDB from 'pouchdb';
import {TodoItem} from '../../assets/types/todo-item';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database;

  constructor() {
    this.database = new PouchDB('todo');

    this.database.info().then(info => {
      console.log(info);
    });
  }

  get(): any {
    return this.database.allDocs({include_docs: true,
      attachments: true});
  }

  fetch(id: string): any {
    return;
  }

  post(document: TodoItem): any {
    return this.database
      .post(document)
      .then(response => {
        return response;
      }).catch(error => {
        console.log(error);
        return error;
      });
  }

  delete(document: TodoItem){
    this.database.remove(document);
  }

}
