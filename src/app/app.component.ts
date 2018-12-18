import { Component, Injectable, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { SigninService } from './signin.service';
import { User, Class, Grade, Content, Magazine, School, Mag } from './Models/classes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nata';
  constructor(private ser: SigninService, private router: Router) { }
 
  ngOnInit(): void { }

}



