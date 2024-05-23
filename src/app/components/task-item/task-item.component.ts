import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleTask = new EventEmitter<number>();

  onToggleTask() {
    this.toggleTask.emit(this.task.id);
  }

  onDeleteTask() {
    this.deleteTask.emit(this.task.id);
  }
}
