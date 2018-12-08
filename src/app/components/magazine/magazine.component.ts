import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SigninService } from './../../signin.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {
  admin: boolean = false;
  chapters: any;
  user: any;
  name: any;
  dictData;
  jsonData: any;
  headers;
  results: any;
  panelOpenState = false;
  isAssignment = false;
  submitted1 = false;
  submitted = false;

  //private chapterForm1: FormGroup;
  chapterForm1 = this.fb.group({
    chapterName: ['', Validators.required],
    chapterType: [null, Validators.required]
  });
  subjects: Subject[] = [
    { value: 'Math', viewValue: 'Math' },
    { value: 'Music', viewValue: 'Music' },
    { value: 'Science', viewValue: 'Science' }
  ];

  constructor(private router: Router, private route: ActivatedRoute, private ser: SigninService,
    private _http: HttpClient, private fb: FormBuilder) {
    this.user = ser.getUser();
    this.magazine = ser.getMagazine(0); //send id from router 
    this.chapters = ser.getChapters(this.magazine.id);
    this.magazinID = this.magazine.id;
  }
  magazine: any;
  selectedId: any;
  chapter: any;
  assignment: any;
  magazinID: any;
  chapterID: any;

  get f() { return this.chapterForm1.controls; }

  addChapter() {
    this.submitted = true;

    //console.warn(this.chapterForm1.value);

    if (this.chapterForm1.invalid) {
      return;
    }

    if (this.chapterForm1.valid) {
      if (this.ser.addChapter(this.magazine.id, this.chapterForm1.value.chapterName, this.chapterForm1.value.chapterType))
        this.chapters = this.ser.getChapters(this.magazine.id);
        this.submitted1 = true;
    }

  }


  ngOnInit() {


    let id = this.route.snapshot.paramMap.get('id');

    this.magazine = this.ser.getMagazine(id);
  }

  changeChapter(id) {
    this.chapter = this.chapters[id];
    this.isAssignment = false;
    this.chapterID = id;
  }
  changeAssignment(id) {
    this.isAssignment = true;
    this.assignment = this.chapters[id].assignment;
  }
  getData() {
    this.ser.getDictonaryData(this.name)
      .subscribe(data => {
        console.log(data);
        this.jsonData = data;
        var objJsonString = JSON.stringify(data);
        var objParsed = JSON.parse(objJsonString);
        this.results = objParsed.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];

      });

  }
}

export interface Subject {
  value: string;
  viewValue: string;
}

