import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { SigninService } from './../../signin.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User, PeriodicElement, Grade, Magazine, Class } from '../../Models/classes';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'chapter', 'total'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //dataSource1 = new MatTableDataSource(ELEMENT_DATA);
  curClass: string;
  curMag: string;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;
  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  columnsToDisplay: string[] = ['name', 'score'];
  ScoreData: any;
  scorego: any;
  ngOnInit() {
   // this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    this.dataSource.paginator = this.paginator;
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    //Get something from service
    //this.ScoreData = [];
    //this.scorego = this.ser.scores;
    //for (let i in this.scorego) {
    //  this.ScoreData.push(
    //    {
    //      name: this.ser.chapters[this.scorego[i].chapterID].name,
    //      score: this.scorego[i].score
    //    });
    //}


    //this.haha = new MatTableDataSource(this.ScoreData);

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  accessStudents(id, mag) {
    this.curClass = id;
    this.curMag = mag.name;
    //get student list
  }



  classForm = this.fb.group({
    name: ['', Validators.required],
    grade: [null, Validators.required]
  });

  studentForm = this.fb.group({
    email: ['', Validators.required],
  });

  user: any;
  magazines: Magazine[]=[];
  chapters: any;
  magazineName: any;
  submitted: boolean = false;
  submitted1: boolean = false;
  classes: Class[]=[];
  grades: any;
  magazinesNames: MagazinesNames[]=[];


  constructor(private router: Router, private route: ActivatedRoute, private ser: SigninService,
    private _http: HttpClient, private fb: FormBuilder) {
    this.user = <User>ser.user;
    this.grades = ser.grades;
    if (this.user.auth == "Teacher") {
      this.classes = ser.classes; // for Teacher                
    }
    else if (this.user.auth == "Student") {
      var magIds = this.user.grades[0].magazines;
      var length=magIds.length
      //for (var i = 0; i < magIds.length;i++)
      
      for (var i = 0; i < 3; i++) {       
        this.magazines.push(ser.magazines[i]);//<Magazine[]>await this.ser.getMagazines(this.user.grade); //send id from router for Student}0
      }
    }
  }

  getMagazines(classID) {
    this.magazinesNames = [];
    var magIds = this.classes[classID].magazines;
    for (var i = 0; i < magIds.length; i++) {
      this.magazinesNames.push({ id: magIds[i], name:this.ser.magazines[magIds[i]].name})
    }
  }

  

  get classFunc() { return this.classForm.controls; }
  get studentFunc() { return this.studentForm.controls; }
  errorMessage: string;
  addClass() {
    this.submitted = true;
    if (this.classForm.invalid) {
      return;
    }
    
    if (this.classForm.valid) {      
      if (this.ifUnique(this.classForm.value.name)) {
        this.errorMessage = '';
        if (this.ser.addClass(this.classForm.value.name, this.classForm.value.grade)) {
          this.classes=this.ser.classes;
          this.submitted = false;
          this.submitted1 = true;
        }
      }
      else {
        this.errorMessage = "Please choose unique name.";
      }
    }
  }
  haha: any;
  scoreData: any;
  isScore: boolean = false;
  totalScore: number=0;
  changeMagazine(id) {
    this.magazineName = this.magazines[id].name;
    this.scoreData = [];
    this.totalScore = 0;
    //var scorego = this.ser.scores;
    for (var i = 0; i < this.ser.scores.length; i++) {
      this.scoreData.push({ name: this.ser.chapters[this.ser.scores[i].chapterID].name, score: this.ser.scores[i].score })
      this.totalScore = this.totalScore + this.ser.scores[i].score;
    }
    this.totalScore = this.totalScore / this.ser.scores.length
    this.haha = new MatTableDataSource(this.scoreData);
    this.isScore= true;

  }
  //changeMagazine(id) {

  //  this.chapters = this.chapters[id-1];
  //  //this.scores = this.ser.getGrades()
  //  this.magazineName = this.magazines.content[id].name;
  //  var scoreData = [];

  //  var scorego = this.ser.scores;
  //  for (let i in scorego) {
  //    scoreData.push(
  //      {
  //        name: this.ser.chapters[scorego[i].chapterID].name,
  //        score: scorego[i].score
  //      });
  //  }

  //  this.haha = new MatTableDataSource(scoreData);


  //  this.scoreData = [];
  //  //var scorego = this.ser.scores;
  //  for (var i = 0; i < this.ser.scores.length; i++) {
  //    this.scoreData.push({ name: this.ser.scores[i].chapterID, score: this.ser.scores[i].score })
  //  }
  //}

  ifUnique(name: string): boolean {
    var keepGoing=true;
    this.classes.forEach(function (value) {
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
}

export interface MagazinesNames {
  id: number;
  name: string;
}


export interface ScoreData {
  name: string;
  score: number;
}

/*
const SCORE_DATA: ScoreData[] = [
  { name: 'Chapter 1', score: 75},
  { name: 'Chapter 2', score: 100},
  { name: 'Chapter 3', score: 33}

];*/


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, firstName: 'Anna', lastName: 'Carenina', chapter: 75, total: 75 },
  { position: 2, firstName: 'Jin', lastName: 'Mattew', chapter: 75, total: 75 },
  { position: 3, firstName: 'Bob', lastName: 'Miller', chapter: 75, total: 75 },
  { position: 4, firstName: 'Keysha', lastName: 'Smith', chapter: 75, total: 75 },
  { position: 5, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 },
  { position: 6, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 },
  { position: 7, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 },
  { position: 8, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 },
  { position: 9, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 },
  { position: 10, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 },
  { position: 11, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 }
];
