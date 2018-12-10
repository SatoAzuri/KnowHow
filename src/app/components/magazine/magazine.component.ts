import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SigninService } from './../../signin.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User, PeriodicElement, Grade, Magazine, Class, School, Chapter, Assignment, Content } from '../../Models/classes';
import { MatStepper } from '@angular/material';


@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {
  type = true;
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

  isLinear = false;
  chapterForm = this.fb.group({
    chapterName: ['', Validators.required],
    chapterType: [null, Validators.required]
  });
  //chapterForm1 = this.fb.group({
  //  chapterName: ['', Validators.required],
  //  chapterType: [null, Validators.required]
  //});  

  constructor(private router: Router, private route: ActivatedRoute, private ser: SigninService,
    private _http: HttpClient, private fb: FormBuilder) {
    this.user = ser.user;
    this.subjects = ser.subjects;
  }

  get f() { return this.chapterForm.controls; }
  //get f() { return this.chapterForm1.controls; }
  newChapterID: number;
  addChapter(stepper: MatStepper) {    
    if (this.chapterForm.invalid) {
      return;
    }
    if (this.chapterForm.valid) {
      if (this.ifUnique(this.chapterForm.value.chapterName, this.chapters)) {
        this.chapterUnique = true;
        this.newChapterID = this.ser.addChapter(this.magazine.id, this.chapterForm.value.chapterName, this.chapterForm.value.chapterType);
        this.updateMagazine();
        this.errorMessage = "";
        stepper.next();
      }
      else {
        this.chapterUnique = false;
        this.errorMessage = "Name should be unique";
      }
    }
  }
  //Second step: Content Form
  addAnother = false;
  contentForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    img: ['']
  });
  get f2() { return this.contentForm.controls; }

  errorMessage: string;
  chapterUnique: boolean = false;

  addContent(v: boolean, stepper: MatStepper) {
    this.addAnother = v;      

    if (this.contentForm.valid) {
      if (this.ifUnique(this.contentForm.value.title, this.chapters[this.newChapterID].content)) {
        this.errorMessage = "";
        if (this.ser.addContent(this.newChapterID, this.contentForm.value.title, this.contentForm.value.content, "", "")) {
          this.updateMagazine();
          if(!v)
            stepper.next();
        }
      }
      else {
        this.errorMessage = "Name should be unique.";
        this.contentForm.value.title = "";
      }
    }

      if (this.addAnother) {
        this.contentForm.reset();
      }
    
    
  }
  //Third step: Add Assignment
  //This is for correct answer drop down
  questionForm = this.fb.group({
    question: ['', Validators.required],
    option1: ['', Validators.required],
    option2: ['', Validators.required],
    option3: ['', Validators.required],
    correctAnswer: ['', Validators.required]
  });
  get f3() { return this.questionForm.controls; }
  addQuestion(v: boolean, stepper: MatStepper) {
    this.addAnother = v;      

    if (this.questionForm.valid) {
      if (this.ifUniqueAssignment(this.questionForm.value.question, this.chapters[this.newChapterID].assignment)) {
        this.errorMessage = "";
        if (this.ser.addAssignment(this.newChapterID, this.questionForm.value.question, this.questionForm.value.option1, this.questionForm.value.option2, this.questionForm.value.option3, this.questionForm.value.correctAnswer, "")) {
          this.updateMagazine();
          if(!v)
            stepper.next();
        }
      }
      else {
        this.errorMessage = "Question should be unique.";
        this.questionForm.value.question = "";
      }
    }

      if (this.addAnother) {
        this.questionForm.reset();
      }
    
  }
  addAnotherQuestion() {
    this.questionForm.reset();
  }

  ngOnInit() {
    this.magazineId = this.route.snapshot.paramMap.get('id');
    this.updateMagazine();
  }
  ifUnique(name: string, elements: any): boolean {
    var keepGoing = true;
    elements.forEach(function (value) {
      if (keepGoing) {
        if (value.name == name)
          keepGoing = false;
      }
    });
    if (keepGoing)
      return true;
    else
      return false;
  }
  ifUniqueAssignment(question: string, elements: any): boolean {
    var keepGoing = true;
    elements.forEach(function (value) {
      if (keepGoing) {
        if (value.question == question)
          keepGoing = false;
      }
    });
    if (keepGoing)
      return true;
    else
      return false;
  }


  updateMagazine() {
    this.chapters = [];
    this.magazine = this.ser.magazines[this.magazineId];
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



