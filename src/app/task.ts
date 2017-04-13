export class Task {
  title: string;  
  id: number;
  child: object;

  constructor(task: Object = {}){
    Object.assign(this,task);
  }
}