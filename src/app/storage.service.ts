
import {TodoItem} from "./classes/todoItem";
import {Injectable} from "@angular/core";

@Injectable()
export class StorageService {
  todos: TodoItem[] = [
    new TodoItem(1, "pet the cat", false),
    new TodoItem(2, "feed the cat", true),
    new TodoItem(3, "play with the cat", false)
  ];

  //Gets the locally stored Todos, if not exist, returns defaults
  getTodos(): TodoItem[] {
      return this.todos;
  }

  setTodos(todos: TodoItem[]): void {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Useless atm (need to take/set each time)
  deleteItem(item: TodoItem): void {
    let index: number = this.todos.indexOf(item);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
