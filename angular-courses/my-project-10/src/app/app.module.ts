import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from "@angular/forms"

import {AppRoutingModule} from './app-routing.module'
import {PageNamePipe} from './shared/page-name.pipe'
import {ColorDirective} from './shared/color.directive'

import {AppComponent} from './app.component'
import {HomePageComponent} from './home-page/home-page.component'
import {AboutPageComponent} from './about-page/about-page.component'
import {AboutExtraPageComponent} from './about-page/about-extra-page/about-extra-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    AboutExtraPageComponent,
    PageNamePipe,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
