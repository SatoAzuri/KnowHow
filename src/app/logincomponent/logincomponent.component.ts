import { Component,ViewChild, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;


  someMethod() {
    this.trigger.openMenu();
  }


}
