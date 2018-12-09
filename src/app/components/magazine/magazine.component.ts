import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SigninService } from './../../signin.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User, PeriodicElement, Grade, Magazine, Class, School, Chapter, Assignment, Content } from '../../Models/classes';


@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {
  admin: boolean = false;
  chapters: Chapter[]=[];
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
  magazine: any;
  selectedId: any;
  chapter: any;
  assignment: any;
  magazinID: any;
  chapterID: any;
  magazineId: any;
  subjects: any;

  chapterForm1 = this.fb.group({
    chapterName: ['', Validators.required],
    chapterType: [null, Validators.required]
  });  

  constructor(private router: Router, private route: ActivatedRoute, private ser: SigninService,
    private _http: HttpClient, private fb: FormBuilder) {
    this.user = ser.user;
    this.subjects = ser.subjects;
  }

  get f() { return this.chapterForm1.controls; }

  addChapter() {
    this.submitted = true;
    if (this.chapterForm1.invalid) {
      return;
    }
    if (this.chapterForm1.valid) {
      if (this.ser.addChapter(this.magazine.id, this.chapterForm1.value.chapterName, this.chapterForm1.value.chapterType))
        this.updateMagazine();        
        this.submitted1 = true;
    }
  }

  ngOnInit() {
    this.magazineId = this.route.snapshot.paramMap.get('id');
    this.updateMagazine();
  }

  updateMagazine() {    
    this.magazine = this.ser.magazines[this.magazineId];
    var ser = this.ser;
    for (var i = 0; i < this.magazine.chapters.length; i++) {
      this.chapters.push(this.ser.chapters[this.magazine.chapters[i]])
    }
    //this.magazine.chapters.forEach(function (value) {
    //  this.chapters.append(ser.chapters[value])
    //})
    this.magazinID = this.magazine.id;
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



