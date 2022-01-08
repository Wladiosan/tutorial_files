import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router'
import {Injectable} from '@angular/core'
import {delay, Observable, of} from "rxjs"

import {Post, PostsService} from './posts.service'


@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<Post> {

  constructor(private postService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
    return of(this.postService.getById(+route.params['id'])).pipe(delay(1500))
  }

}
