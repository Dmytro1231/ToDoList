import { Component } from '@angular/core';

export class Task {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Персональный органайзер';

  tasks: Task[] = [
    {id: 1, title: 'Important Task-1', completed: false, date: (new Date()).toLocaleString()},
    {id: 2, title: 'Important Task-2', completed: true, date: (new Date()).toLocaleString()},
    {id: 3, title: 'Important Task-3', completed: false, date: (new Date()).toLocaleString()},
    {id: 4, title: 'Important Task-4', completed: true, date: (new Date()).toLocaleString()},
    {id: 5, title: 'Important Task-5', completed: false, date: (new Date()).toLocaleString()}
  ];

}
