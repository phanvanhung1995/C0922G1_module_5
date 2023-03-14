import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {FormControl} from "@angular/forms";
import {TodoService} from "../todo.service";
import {Router} from "@angular/router";

// let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.loadTodo()
  }

  loadTodo() {
    this.todoService.findAll().subscribe(item => {
      this.todos = item;
    });
  }

  toggle(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  addTodo() {
    this.todoService.save({
      content: this.content.value
    }).subscribe(item => {
      this.loadTodo()
    })
  }

  deleteTodo(idDelete: number) {
    console.log(idDelete)
    this.todoService.deleteTodo(idDelete).subscribe(item => {
      this.loadTodo()
    })
  }
}
