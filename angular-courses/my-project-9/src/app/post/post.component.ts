import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from '@angular/router'

import {Post} from '../posts.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post!: Post

  constructor(
    private route: ActivatedRoute,
    private router: Router
    /*private postsService: PostsService*/
  ) {
  }

  ngOnInit() {

    //this.post = this.route.snapshot.data['post']
    this.route.data.subscribe(data => {
      this.post = data['post']
    })

    // change of post.resolve.ts
    /* this.route.params.subscribe((params: Params) => {
        const paramsId: string = params['id']
        this.post = this.postsService.getById(<number>parseInt(paramsId))
    })*/
  }

  loadPost() {
    this.router.navigate(['/posts', 44])
  }
}
