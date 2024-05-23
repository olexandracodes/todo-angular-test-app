import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task-item/task-item.component';

@Pipe({
  name: 'filterTasks'
})
export class FilterTasksPipe implements PipeTransform {
  transform(tasks: Task[], filter: string): Task[] {
    if (!tasks || !filter) {
      return tasks;
    }

    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    } else if (filter === 'incomplete') {
      return tasks.filter(task => !task.completed);
    } else {
      return tasks;
    }
  }
}
