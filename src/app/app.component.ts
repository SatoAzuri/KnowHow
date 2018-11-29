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
  user: any;

  constructor(private ser: SigninService) {
    this.user = ser.getUser();
   
  }
  logout() {

    if (this.user) {

      this.user = null;
    }

  }
  ngOnInit(): void {
    
    
  }

}



