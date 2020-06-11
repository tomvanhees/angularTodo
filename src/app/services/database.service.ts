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
    return this.database.allDocs({
      include_docs: true,
      attachments: true
    });
  }

  fetch(id: string): any {
    return;
  }

  async post(document: TodoItem): Promise<any> {
    return this.database
      .post(document);
  }

  async delete(document: TodoItem): Promise<any> {
    console.log('before delete');
    return this.database.remove(document);
  }

}
