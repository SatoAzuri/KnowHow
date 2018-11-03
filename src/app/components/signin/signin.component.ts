import { Component, OnInit } from '@angular/core';
import { SigninService } from './../../signin.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

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
  profileForm = this.fb.group({
    name:['', Validators.required],
    password:['', [Validators.required, Validators.minLength(6)]]
  });
  constructor(private fb: FormBuilder) { }
  schools: School[] = [
    { value: '0', viewValue: 'PS-140' },
    { value: '1', viewValue: 'PS-245' },
    { value: '2', viewValue: 'PS-35' }
  ];



  ngOnInit() {

  }

  f() { return this.profileForm.controls; }

  onSubmit(){
    console.warn(this.profileForm.value);
  }

  //signin() {
  //this.ser.setSignin(true);
  //  this.router.navigate(['/', ]);
  }
}
