import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit() {
  }

}
