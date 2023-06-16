import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerComponent } from './task-manager.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskCalendarComponent } from './components/task-calendar/task-calendar.component';



@NgModule({
  declarations: [
    TaskManagerComponent,
    TaskListComponent,
    TaskCalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskManagerComponent
  ]
})
export class TaskManagerModule { }
