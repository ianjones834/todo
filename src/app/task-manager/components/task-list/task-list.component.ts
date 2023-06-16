import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  @Input()
  tasks: Task[] = [];

  @Output()
  addTask = new EventEmitter<Task>();

  @Output()
  removeTask = new EventEmitter<Task>();

  handleAdd = (input: HTMLInputElement) => {

    this.addTask.emit({
      id: null,
      description: input.value
    })

    input.value = '';
  }

  handleRemove = (task: Task) => {
    this.removeTask.emit(task);
  }


}
