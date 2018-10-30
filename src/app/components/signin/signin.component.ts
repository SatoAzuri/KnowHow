import { Component, OnInit } from '@angular/core';
import { SigninService } from './../../signin.service';
import { Router } from '@angular/router';
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
  
  constructor(private ser: SigninService, private router: Router) { }
  schools: School[] = [
    { value: '0', viewValue: 'PS-140' },
    { value: '1', viewValue: 'PS-245' },
    { value: '2', viewValue: 'PS-35' }
  ];
  ngOnInit() {

  }

  signin() {
    this.ser.setSignin(true);
    this.router.navigate(['/', ]);
  }
}
