import {AbstractControl, FormControl} from '@angular/forms'
import {Observable} from 'rxjs'


export class MyValidators {

  static restrictedEmails(control: FormControl): { [key: string]: boolean } {
    if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
      return {restrictedEmails: true}
    }

    // @ts-ignore
    return null
  }

  static uniqEmail(control: AbstractControl): Promise<any|null> | Observable<any|null> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({uniqEmail: true})
        } else {
          resolve(null)
        }
      }, 1000)
    })
  }
}


