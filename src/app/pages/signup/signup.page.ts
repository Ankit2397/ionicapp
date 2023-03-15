import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  isSubmitted = false;
  SignupForm: FormGroup;
  constructor(public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.SignupForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(2)]],
      lname: ['', [Validators.required, Validators.minLength(2)]],
      uname: ['', [Validators.required, Validators.minLength(2)]],
      sabout: ['', [Validators.required, Validators.minLength(2)]],
      semail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      spassword: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  get errorControl() {
    return this.SignupForm.controls;
  }
  submitForm() {
    let data = (this.SignupForm.value);
    this.isSubmitted = true;
    if (!this.SignupForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      // console.log(this.SignupForm.value)
      console.log(data)
    }
    return;
  }

}
