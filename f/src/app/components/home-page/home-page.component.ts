import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AddTaskComponent } from "../add-task/add-task.component";
import { TaskData, TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'app-home-page',
  imports: [AddTaskComponent, CommonModule, TaskComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  constructor(
    private service : TaskService
  ) { }
  
  tasks : Observable<TaskData> | undefined
  ngOnInit(): void {
    this.updateTasks()
  }

  updateTasks() {
    this.tasks = this.service.get("", 0, 0)
  }
}
