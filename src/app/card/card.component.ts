import { Component, OnInit, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { TaskDataService } from '../data-service.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css',],
  providers: [TaskDataService]
})
export class CardComponent implements OnInit {
@Input ('x') x;
@Input ('obj') obj;
toggleClass = true;
addClass = false;
key: string = "TaskList"
 private sub: any;
  constructor(private taskDataService: TaskDataService) {
   
  }
  
  
  displayIn(){
      this.toggleClass = !this.toggleClass;
      this.addClass = !this.addClass;
      
    }
  
  addList(newTitle, event){
    this.displayIn();
    var obj_id = event.currentTarget.id;
    var Id = Date.now();
    var child_data = {id:Id, title: newTitle};
     for(var i=0;i<this.obj.length;i++) {   
      if(this.obj[i].id ==Number(obj_id)){
      this.obj[i]["child"].push(child_data);       
      }
     }       

   this.taskDataService.updateLocalStorage(this.obj);

  

       
  }

  editList(event){
    var obj_id = event.target.parentNode.id.replace(/[^0-9]+/, '');   
    var objClass= obj_id+'editTitle';    
    var inClass = obj_id+'childTitle';
    document.getElementById(objClass).style.display = "block";
    document.getElementById(inClass).style.display = "none";   


  }

  saveEdit(childTitle,event){
    console.log(event);
    var obj_id = event.target.parentNode.id.replace(/[^0-9]+/, '');      
    if(childTitle != ""){
      for (var i = 0; i < this.obj.length; i++) {
              var child_ln = this.obj[i].child.length;
              for (var j = 0; j < child_ln; j++) {
                  if (this.obj[i].child[j] != null && this.obj[i].child[j].id == Number(obj_id)) {                   
                      this.obj[i].child[j].title = childTitle;
                  }

              }
          }
      
    }
  
 this.taskDataService.updateLocalStorage(this.obj);
      var objClass= obj_id+'editTitle';    
      var inClass = obj_id+'childTitle';
      document.getElementById(objClass).style.display = "none";
      document.getElementById(inClass).style.display = "block";   
  }


     

    deleteList(event) {
      alert(event.target.parentNode.id);
        var obj_id = event.target.parentNode.id.replace(/[^0-9]+/, '');      
        for (var i = 0; i < this.obj.length; i++) {
            var child_ln = this.obj[i].child.length;
            for (var j = 0; j < child_ln; j++) {
              console.log(this.obj[i]);
                if (this.obj[i].child[j] != null && this.obj[i].child[j].id == Number(obj_id)) {                   
                    //delete this.obj[i]["child"][j];
                     this.obj[i]["child"].splice(j, 1);
                }

            }

          
        }      
        this.taskDataService.updateLocalStorage(this.obj); 
    }

 
  
  ngOnInit() {
  }

}
