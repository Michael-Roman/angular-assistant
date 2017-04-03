import { Component } from '@angular/core';
import {TodoItem} from "../todoItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Assistant';
  todos = [
    new TodoItem(1, "pet the cat", false),
    new TodoItem(2, "feed the cat", true),
    new TodoItem(3, "play with the cat", false)
  ];

  addTodoItem(item: string, status: boolean): void {
    this.todos.push(
      new TodoItem(this.todos[this.todos.length - 1].id + 1, item, status));
  }

  trackTodoItem(index, todoItem) {
    return todoItem.id;
  }
}
