import { Component, OnInit } from '@angular/core';
import { SigninService } from './../../signin.service';
import { Router } from '@angular/router';

import { FormBuilder, Validators } from '@angular/forms';
import { User, PeriodicElement, Grade, Magazine, Class, School } from '../../Models/classes';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

export interface School {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  submitted = false;
  errorMessage: string;

  profileForm = this.fb.group({
    schoolChoose: [null, Validators.required],
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });
  constructor(private ser: SigninService, private router: Router, private fb: FormBuilder) { }

  schools: School[] = [
    { value: '0', viewValue: 'PS-140' },
    { value: '1', viewValue: 'PS-245' },
    { value: '2', viewValue: 'PS-35' }
  ];
  get f() { return this.profileForm.controls; }
  check: any;
  async onSubmit() {
    this.submitted = true;

    console.warn(this.profileForm.value);

    if (this.profileForm.invalid) {
      return;
    }


    if (this.profileForm.valid) {
      if (await this.ser.setUser(this.schools[0], this.profileForm.value.name, this.profileForm.value.password)) {
        console.log("check is: ", this.check)
        this.router.navigate(['/',]);
      }
      else {
        this.errorMessage= "Username or Password are incorrect"
      }     
    }
  }

  ngOnInit() {

  }

  //username: string;
  //password: string;
  //signin() {
  //  if (this.ser.setUser(this.schools[0], this.username, this.password)) {
  //    this.router.navigate(['home/',]);
  //  }

  //}
  
  username: string;
  password: string;

  get f() { return this.profileForm.controls; }

  onSubmit(){
    this.submitted = true;

    console.warn(this.profileForm.value);

    if (this.profileForm.invalid) {
            return;
        }

    if(this.profileForm.valid){
      this.router.navigate(['home/', ]);
    }

  }
  /*signin() {
    if (this.ser.setUser(this.schools[0],this.username,this.password)) {
      this.router.navigate(['home/',]);
    }
  }*/
}
