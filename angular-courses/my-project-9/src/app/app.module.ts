import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {RouterModule} from '@angular/router'
import {AboutComponent} from './about/about.component'
import {PostsComponent} from './posts/posts.component'
import {PostComponent} from './post/post.component'
import {AboutExtraComponent} from './about-extra/about-extra.component'
import {HomeComponent} from './home/home.component'
import {AppRoutingModule} from './app.routing.module'
import {ErrorPageComponent} from './error-page/error-page.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostsComponent,
    PostComponent,
    AboutExtraComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
