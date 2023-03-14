import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../todo";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})

export class EditTodoComponent implements OnInit {

  todo: Todo;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  todoForm: FormGroup;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(item => {
      const id = item.get('id')
      this.todoService.findById(id).subscribe(todo => {
        this.todo = todo;
      })
    })
    this.todoForm = new FormGroup({
      id: new FormControl(),
      content: new FormControl(),
      complete: new FormControl()
    });

    this.todo = {
      content: ''
    }
  }


  updateForm() {
    const todo = this.todoForm.value
    console.log(todo)
    this.todoService.editTodo(this.todo.id, todo).subscribe(() => {
      alert(' sửa thành công')
      this.router.navigateByUrl('/todo')
    })
  }
}
