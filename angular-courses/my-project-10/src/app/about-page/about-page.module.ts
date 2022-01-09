import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'

import {SharedModule} from '../shared/shared.module'

import {AboutPageComponent} from './about-page.component'
import {AboutExtraPageComponent} from './about-extra-page/about-extra-page.component'

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutExtraPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      // http://localhost:4200/about
      // default prefix: 'about'
      {
        path: '',
        component: AboutPageComponent,
        children: [
          // http://localhost:4200/about/extra
          {
            path: 'extra',
            component: AboutExtraPageComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AboutPageModule {

}
