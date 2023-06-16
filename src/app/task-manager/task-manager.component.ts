import { Component } from '@angular/core';
import { Task, TaskService } from './services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent {

  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getAll();
  }

  onAddTask = (task: Task) => {
    this.taskService.add(task);
  }

  onRemoveTask = (task: Task) => {
    this.taskService.remove(task);
  }
}
