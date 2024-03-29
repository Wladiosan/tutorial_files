import {NgModule} from '@angular/core'
import {PreloadAllModules, RouterModule, Routes} from '@angular/router'

import {HomePageComponent} from './home-page/home-page.component'

const routes: Routes = [
  // http://localhost:4200
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
