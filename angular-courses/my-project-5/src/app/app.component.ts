import { Component } from '@angular/core'

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  e: number = Math.E
  str = 'hello world'

  search = ''

  posts: Post[] = [
    {title: 'Beer', text: 'The best beer in the world'},
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'JavaScript', text: 'The best language in the world'}
  ]

  addPost() {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Vladyslav Angular 8 courses'
    })
  }
}
