import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleTask = new EventEmitter<number>();
  filter: string = 'all';

  get filteredTasks(): Task[] {
    if (this.filter === 'completed') {
      return this.tasks.filter((task) => task.completed);
    } else if (this.filter === 'incomplete') {
      return this.tasks.filter((task) => !task.completed);
    }
    return this.tasks;
  }

  setFilter(filter: string) {
    this.filter = filter;
  }
}
