import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo";
import {TodoComponent} from "./todo/todo.component";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.API)
  }

  save(todo: Todo): Observable<Todo> {
    console.log(todo)
    return this.httpClient.post<Todo>(this.API, {...todo})
  }

  findById(id: string) {
    return this.httpClient.get<Todo>(this.API + '/' + id)
  }

  deleteTodo(idDelete: number): Observable<Todo> {
    return this.httpClient.delete<Todo>(this.API + '/' + idDelete)
  }

  editTodo(id: number, todo: Todo): Observable<Todo> {

    return this.httpClient.put<Todo>(this.API + '/' + id, todo)
  }

}
