import {TodoItem} from '../types/todo-item';
import {Deserializable} from '../types/Deserializable';

export class TodoItemModel implements TodoItem, Deserializable {
  description: string;
  isDone: boolean;

  getDescription(): string {
    return this.description;
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
