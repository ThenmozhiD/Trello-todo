import { Injectable } from '@angular/core';

import { Task } from './task'

@Injectable()

export class TaskDataService {

  id: number = 0;
  key: string = "TaskList";
  tasks: Task[] = [];
  title: string;
  child: object;

  constructor() {
   let tasks = this.getAllTasks();
   this.tasks = tasks;   
   
  }

  
  updateLocalStorage(tasks){ 
    localStorage.setItem(this.key,JSON.stringify(tasks)); 
  }

  getTasksFromLocalStorage(): Task[]{
    let tasks = localStorage.getItem(this.key);
    if(tasks){
      return JSON.parse(localStorage.getItem(this.key));
    }else{
      return [];
    } 
  }

  
  

  getAllTasks(): Task[]{    
    return this.getTasksFromLocalStorage();
  }

}
