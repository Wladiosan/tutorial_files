import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'

import {HomePageComponent} from './home-page/home-page.component'

@NgModule({
  imports: [RouterModule.forRoot([
      // http://localhost:4200
      {path: '', component: HomePageComponent, pathMatch: 'full'},
      {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule)}
    ]
  )],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
