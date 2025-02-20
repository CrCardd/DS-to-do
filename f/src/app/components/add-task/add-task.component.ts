import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  imports: [ FormsModule ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  constructor(
    private service : TaskService
  ) { }

  title : string = ""
  description : string = ""

  addNew() {
    this.service.post({title : this.title, description : this.description, complete : false})
  }
}
