import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoItems: string[] = [];

  add = (input: HTMLInputElement) => {
    this.todoItems.push(input.value);
    console.log(this.todoItems);
    input.value = '';
  }

  remove = (index: number) => {
    this.todoItems = this.todoItems.filter((val, i) => {
      return i != index;
    })
  }

  up = (index: number) => {
    const todoItem = this.todoItems[index];
    this.todoItems[index] = this.todoItems[index - 1];
    this.todoItems[index - 1] = todoItem;
  }

  down = (index: number) => {
    const todoItem = this.todoItems[index];
    this.todoItems[index] = this.todoItems[index + 1];
    this.todoItems[index + 1] = todoItem;
  }
}
