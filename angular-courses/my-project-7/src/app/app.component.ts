import {Component, OnInit} from '@angular/core'
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {MyValidators} from './my.validators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ], [MyValidators.uniqEmail]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value}
      this.form.reset()
      this.form.patchValue({address: {country: 'ua'}})
      console.log('FormData: ', formData)
    }
  }

  setCapital() {
    const cityMap: any = {
      ua: 'Kiev',
      by: 'Minsk',
      ru: 'Moscow'
    }
    const cityKey: string = this.form.get('address')?.get('country')?.value
    const city = cityMap[cityKey]

    this.form.patchValue({address: {city}})
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push()
    (this.form.get('skills') as FormArray).push(control)

    // console.log((<FormArray>this.form.get('skills')))
  }

  get refFormSkill() {
    return this.form.get('skills') as FormArray
  }
}
