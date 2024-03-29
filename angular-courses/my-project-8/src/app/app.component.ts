import {Component, OnInit} from '@angular/core'
import {delay} from 'rxjs/operators'

import {Todo, TodosService} from './todos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = []
  loading = false
  todoTitle = ''
  error = ''

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.fetchTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    }

    this.todosService.addTodo(newTodo)
      .subscribe(todo => {
        console.log('Todo: ', todo)
        this.todos.push(todo)
        this.todoTitle = ''
      })
  }

  fetchTodos() {
    this.loading = true
    this.todosService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      }, error => {
        this.error = error.message
        console.log(error.message)
      })
  }

  removeTodo(id?: number) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }

  completeTodo(id?: number) {
    this.todosService.completeTodo(id).subscribe(todo => {
      (this.todos.find(t => t.id === todo.id) as Todo).completed = true
    })
  }
}

