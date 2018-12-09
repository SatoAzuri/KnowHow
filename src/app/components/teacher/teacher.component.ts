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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;

  }
  accessStudents(id, mag) {
    this.curClass = id;
    this.curMag = mag;
  }


  classForm = this.fb.group({
    name: ['', Validators.required],
    grade: [null, Validators.required]
  });



  studentForm = this.fb.group({
    email: ['', Validators.required],
  });

  user: any;
  magazines: any;
  chapters: any;
  magazineName: any;
  submitted: boolean = false;
  submitted1: boolean = false;
  classes: any;
  grades: any;


  constructor(private router: Router, private route: ActivatedRoute, private ser: SigninService,
    private _http: HttpClient, private fb: FormBuilder) {
    this.user = ser.user;
    if (this.user.auth == "Teacher") {
      this.classes = ser.classes; // for Teacher
      this.classes.forEach(function (value) {
        value["magazines"] = ser.magazines[value.grade-1]
      });          
    }
    else if (this.user.auth == "Student")
      this.magazines = ser.magazines[this.user.grade-1];//<Magazine[]>await this.ser.getMagazines(this.user.grade); //send id from router for Student
  }
  //async setValues() {
  //  this.user = this.ser.getUser();
  //  if (this.user.auth == "Teacher") {
  //    this.getClasses();
  //    this.getGrades();
  //  }
  //  else if (this.user.auth == "Student")
  //    this.magazines = <Magazine[]>await this.ser.getMagazines(this.user.grade); //send id from router for Student
  //}
  //async getGrades() {
  //  this.grades = <Grade[]>await this.ser.getGrades();
  //}
  //async getClasses() {
  //  var ser = this.ser;
  //  this.classes = <Class[]>await this.ser.getClasses(); // for Teacher
  //  this.classes.forEach(function (value) {
  //    value["magazines"] = ser.getMagazines(value.grade)
  //  });
  //}
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
  

  changeMagazine(id) {
    this.chapters = this.chapters[id-1];
    //this.scores = this.ser.getGrades()
    this.magazineName = this.magazines.content[id].name;
  }

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
