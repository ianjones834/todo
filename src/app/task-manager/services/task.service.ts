import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import {v4 as uuidv4} from 'uuid';


export interface Task {
  id: string | null,
  description: string,
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  private tasks$: BehaviorSubject<Task[]> = new BehaviorSubject([] as Task[]);

  constructor() {}

  add = (task: Task) => {
    this.tasks.push({
      ...task,
      id: uuidv4()
    });

    this.tasks$.next(this.tasks);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  remove = (task: Task) => {
    this.tasks = this.tasks.filter( x => x.id != task.id);

    this.tasks$.next(this.tasks);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getAll = (): Observable<Task[]> => {
    this.tasks = JSON.parse(localStorage.getItem('tasks') ?? '[]');
    this.tasks$.next(this.tasks);

    return this.tasks$;
  }
}
