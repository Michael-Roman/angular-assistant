import {Component, Input} from "@angular/core";
import {StorageService} from "../storage.service";
import {TodoItem} from "../classes/todoItem";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent{
  @Input() todoItem: any;

  constructor(private storageService: StorageService) {}

  deleteTodoItem(todoItem: TodoItem): void {
    this.storageService.deleteItem(todoItem);
  }


}
