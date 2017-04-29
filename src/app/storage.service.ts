
import {TodoItem} from "./classes/todoItem";
import {Injectable} from "@angular/core";

@Injectable()
export class StorageService {
  todos = [
    new TodoItem(1, "pet the cat", false),
    new TodoItem(2, "feed the cat", true),
    new TodoItem(3, "play with the cat", false)
  ];

  //Gets the locally stored Todos, if not exist, returns defaults
  getTodos(): TodoItem[] {
    try {
      let localString = localStorage.getItem("todos");
      console.log(JSON.parse(localStorage.getItem("todos")));
      return (localString ? JSON.parse(localStorage.getItem("todos")) : this.todos);
    } catch (e) {
      console.log("Something went wrong with loading");
      return this.todos;
    }

  }

  setTodos(todos: TodoItem[]): void {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Useless atm (need to take/set each time)
  deleteItem(item: TodoItem): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
