import {Component, OnInit} from '@angular/core';
import {TodoItem} from "../classes/todoItem";
import {StorageService} from "../storage.service";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos: TodoItem[];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.todos = this.storageService.getTodos();
  }

  addTodoItem(item: string, status: boolean): void {
    let newId : number;
    newId = (this.todos.length > 0) ? this.todos[this.todos.length - 1].id + 1 : 1;
    this.todos.push(new TodoItem(newId, item, status));
    this.storageService.setTodos(this.todos);
  };

  deleteTodoItem(todoItem: TodoItem): void {
    let index: number = this.todos.indexOf(todoItem);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    this.storageService.setTodos(this.todos);
  };

  trackTodoItem(index, todoItem) {
    return todoItem.id;
  };
}
/* Still left to fix
* 1: Make task name require Characters.
* 2: HTML anc css reworks*/
