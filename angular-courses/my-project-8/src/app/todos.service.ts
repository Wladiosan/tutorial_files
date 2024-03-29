import {Injectable} from '@angular/core'
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http'
import {catchError, map, Observable, tap, throwError} from 'rxjs'
import {delay} from 'rxjs/operators'

export interface Todo {
  completed: boolean
  title: string
  id?: number
}

@Injectable({providedIn: 'root'})

export class TodosService {

  constructor(private http: HttpClient) {
  }

  addTodo(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({
      'MyCustomHeader': Math.random().toString()
    })
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {headers})
  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams()
    params = params.append('_limit', '5')
    params = params.append('customer', 'anything')

    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      // params: new HttpParams().set('_limit', '3')
      params,
      observe: 'body'
    })
      // delay = setTimeout(1500ms)
      .pipe(
        delay(500),
        catchError(err => {
          console.log('Error: ', err.message)
          return throwError(err)
        })
      )
  }

  removeTodo(id?: number): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {observe: 'events'}).pipe(
      tap(event => {
        // console.log('Event: ', event)
        if (event.type === HttpEventType.Sent) {
          // console.log('Sent: ', event)
        }
        if (event.type === HttpEventType.Response) {
          // console.log('Response: ', event)
        }
      })
    )
  }

  completeTodo(id?: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed: true}, {
      // default value
      responseType: 'json'
    })
  }
}
