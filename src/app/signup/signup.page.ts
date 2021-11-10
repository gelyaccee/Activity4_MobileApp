import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    username: [''],
    password: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      province: [''],
      zip: ['']
    }),
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.profileForm.value)
  }

  update() {
    this.profileForm.patchValue({
      firstName: '',
      lastName: ''
    });
  }
}
