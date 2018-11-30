import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  @Input() assignment: any;
  constructor() { }

  ngOnInit() {
  }

}

