import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  taskNames: string[] = [];

  add = (taskInput: HTMLInputElement) => {
    this.taskNames.push(taskInput.value);
    console.log(this.taskNames);
    taskInput.value = '';
  }

  remove = (index: number) => {
    this.taskNames = this.taskNames.filter((value, i) => {
      return i != index;
    })
  }

  up = (index: number) => {
    const taskName = this.taskNames[index];
    this.taskNames[index] = this.taskNames[index - 1];
    this.taskNames[index - 1] = taskName;
  }

  down = (index: number) => {
    const taskName = this.taskNames[index];
    this.taskNames[index] = this.taskNames[index + 1];
    this.taskNames[index + 1] = taskName;
  }
}
