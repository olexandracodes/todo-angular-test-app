import { Component } from '@angular/core';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = [];
  filter: string = 'all';

  addTask(text: string) {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.tasks = [...this.tasks, newTask];
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  toggleTask(id: number) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
  }

  setFilter(filter: string) {
    this.filter = filter;
  }
}
