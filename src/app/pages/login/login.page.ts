import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {
  LoginForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  get errorControl() {
    return this.LoginForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.LoginForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.LoginForm.value)
    }
    return;
  }
}