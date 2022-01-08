import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from '@angular/router'

import {PostsService} from '../posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  showIds: boolean = false

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      let isTrueSet: boolean = (<string>params['showIds'] === 'true')
      this.showIds = isTrueSet
    })
    this.route.fragment.subscribe(fragment => {
      // console.log(fragment)
    })
  }

  getPostsService = () => this.postsService.posts

  showIdsProgram() {
    this.router.navigate(['/posts'], {
      queryParams: {
        showIds: true
      },
      fragment: 'program-fragment'
    })
  }
}
