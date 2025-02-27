import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output()
  onSendClick = new EventEmitter()
  
  title : string = ""
  description : string = ""

  addNew() {
    this.service.post({_id: '', idUser: '', title : this.title, description : this.description, complete : false}).subscribe(
      (ok : boolean) => {
        if(!ok)
          return  
      }
    )
    this.onSendClick.emit(1);
  }
}
