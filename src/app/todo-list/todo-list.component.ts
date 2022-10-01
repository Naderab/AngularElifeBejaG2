import { Component, OnInit } from '@angular/core';
import { todo } from '../core/todo';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist:todo[]=[];
  number:Number=0;
  constructor(private calculService:CalculService) { }

  ngOnInit(): void {
    this.todolist=[
      {"userId": 1, "id": 1, "title": "delectus aut autem","completed": false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis etofficia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniamminus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam utab", "completed": true}];     
      this.number = this.calculService.getNumberOf(this.todolist,"completed",true);
      console.log(this.number);
    }
    bilan(){
      alert("le nombre de todo completed "+this.number+"par rapport au nombre total "+this.todolist.length);
    }
}
