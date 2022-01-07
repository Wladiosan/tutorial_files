import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import {FormsModule} from '@angular/forms';
import { SwitchComponent } from './switch/switch.component'

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
