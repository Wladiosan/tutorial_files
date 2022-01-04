import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Title1', text: 'Text1', id: 1},
    // {title: 'Title2', text: 'Text2', id: 2}
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('TimeOut')
      this.posts[0] = {
        title: 'changed1',
        text: 'changed2',
        id: 42
      }
    }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
    console.log(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
