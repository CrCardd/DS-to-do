import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/Task';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  imports: [ MatCardModule, MatSlideToggleModule, FormsModule ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  constructor(
    private service : TaskService
  ) { }
  
  @Input()
  task : Task | undefined
  @Output()
  OnDelete = new EventEmitter()

  isComplete : boolean = false;

  delete(id : string | undefined) {
    console.log(id)
    this.service.delete(id);
    this.OnDelete.emit('')
  }
}
