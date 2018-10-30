import { Component, Injectable, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { SigninService } from './signin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nata';
  signin: boolean=false;
  constructor(private ser: SigninService) { }

  ngOnInit(): void {
    this.signin = this.ser.isSignin();
    
  }

}



