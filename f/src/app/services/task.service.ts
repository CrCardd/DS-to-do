import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Task } from '../models/Task';
import { map, Observable } from 'rxjs';

export interface TaskData {
  tasks : Task[],
  total : number
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  api : string = 'http://localhost:8080'
  constructor(private http : HttpClient) { }

  get(query : string, page : number, limit : number) : Observable<TaskData> {
    return this.http.get<TaskData>(this.api + `/task?query=${query}&page=${page}&limit=${limit}`)
  }
  
  post(task: Task) {
    return this.http.post<User>(this.api + '/task', task, {observe: 'response'})
      .pipe(map(res => {
          return res.ok
      }))
  }

  delete(id : string | undefined) {
    if(id === undefined)
      return;
    console.log(this.api + '/task/'+ id)
    return this.http.delete(this.api + '/task/'+ id, {observe: 'response'})
      .pipe(map(res => {
          return res.ok
      }))
  }


}
