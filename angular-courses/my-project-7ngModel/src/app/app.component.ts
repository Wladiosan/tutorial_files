import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appState: string = 'off'

  handleChange() {
    console.log(this.appState)
  }
}
