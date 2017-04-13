import { Component , Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TaskDataService } from './data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskDataService]
})
export class AppComponent {
  title = 'To-Do App!'; 
  key: string = "TaskList"

  constructor(public taskDataService: TaskDataService){
      var obj : Object[];     

  }
obj= this.taskDataService. getAllTasks();
  addCard(){
    var x= prompt('Add Card Title....');
    var Id =Date.now();
    if(x != ""){
    var new_data = {id:Id , title : x, "child": []};
    this.obj.push(new_data);   
    this.taskDataService.updateLocalStorage(this.obj);
    }
 
    
  }


}
