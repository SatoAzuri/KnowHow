import { Component, OnInit, Input } from '@angular/core';
import { SigninService } from './../../signin.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { User, PeriodicElement, Grade, Magazine, Class, School } from '../../Models/classes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(private ser: SigninService, private router: Router) {
   
  }
  @Input() user: any;

  logout() {
    if (this.user) {
      this.user = null;
      this.ser.user = null;
    }
  }
  ngOnInit() {
  }

}
