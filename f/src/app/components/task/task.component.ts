import { Component, Input } from '@angular/core';
import { Task } from '../../models/Task';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [ MatCardModule, MatSlideToggleModule, FormsModule ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input()
  task : Task | undefined

  isComplete : boolean = false;
}
