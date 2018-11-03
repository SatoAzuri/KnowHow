import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  admin: boolean = false;
  fromDB: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
