import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SigninService } from './../../signin.service';
//import { Observable } from 'rxjs/internal/Observable';
import { Observable } from 'rxjs/';
import { User, Class, Grade, Content, Magazine, School } from '../../Models/classes';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  user: any;
  magazines: Magazine[]=[];
  gatData: boolean = false;
  ifAddGradeClicked: boolean = false;
  submitted: boolean = false;
  curGrade: any;
  grades: any;
  admin: boolean = false;

  gradeForm = this.fb.group({
    name: ['', Validators.required]
  });
  magazineForm = this.fb.group({
    name: ['', Validators.required],
    pic: ['', Validators.required]

  });
  get fgrade() { return this.gradeForm.controls; }
  get fmagazine() { return this.magazineForm.controls; }

  constructor(private router: Router, private route: ActivatedRoute, private ser: SigninService, private fb: FormBuilder) {
    this.user = ser.user;
    
    if (!this.user)
      this.grades = ser.grades;
    else {
      if (this.user.auth == "Admin")
        this.admin = true;
      this.grades = this.user.grades
    }
  }

  //async getUser() {
  //  this.user = <User>await this.ser.getUser();

  //}
  //async getGrades() {
  //  if (this.user && this.user.auth != "Admin") {
  //    this.grades = <Grade[]>await this.ser.getGrades();
  //  }
  //}

  magazines_pic: string[][] = [["assets/1.1.jpg", "assets/1.2.jpg", "assets/1.3.jpg"], ["assets/2.1.jpg", "assets/2.2.jpg"]];
  ifgradeclicked: boolean = false;
  errorMessage: string = "";

  ngOnInit() {}
  
  ChangeGrade(grade) {
    this.curGrade = grade;
    this.ifgradeclicked = true;
    this.ifAddGradeClicked = false;
    this.ifaddMagazineClicked = false;
    this.magazines = [];
    var magazinesIds = this.ser.grades[grade - 1].magazines;
    for (var i = 0; i < magazinesIds.length; i++) {
      this.magazines.push(this.ser.magazines[magazinesIds[i]])
    }

    if (this.magazines.length==0) {
      this.errorMessage="Currently there are no magazines avaliable for this grade"
    }
  }

  AddGrade() {
    this.magazines = [];
    this.ifAddGradeClicked = true;
  }

  addNewGrade() {
    this.submitted = true;
    if (this.gradeForm.invalid) {
      return;
    }

    if (this.gradeForm.valid) {
      if (this.ifUnique(this.gradeForm.value.name, this.grades)) {
        this.errorMessage = '';
        if (this.ser.addGrade(this.gradeForm.value.name)) {
          this.user = this.ser.user;
          if (!this.user)
            this.grades = this.ser.grades;
          else
            this.grades = this.user.grades
         
          this.submitted = false;          
        }
      }
      else {
        this.errorMessage = "Please choose unique name.";
      }
    }

  }

  addNewMagazine() {
    this.submitted = true;
    if (this.magazineForm.invalid) {
      return;
    }

    if (this.magazineForm.valid) {
      if (this.ifUniqueMagazine(this.magazineForm.value.name, this.magazines)) {
        this.errorMessage = '';
        if (this.ser.addMagazine(this.curGrade, this.magazineForm.value.name, this.magazineForm.value.pic)) {          
          this.magazines = [];
          var magazinesIds = this.ser.grades[this.curGrade - 1].magazines;
          for (var i = 0; i < magazinesIds.length; i++) {
            this.magazines.push(this.ser.magazines[magazinesIds[i]])
          }
          this.user = this.ser.user;
          if (!this.user)
            this.grades = this.ser.grades;
          else
            this.grades = this.user.grades
          this.submitted = false;
        }
      }
      else {
        this.errorMessage = "Please choose unique name.";
      }
    }
  }

  ifUnique(name: string, element:any): boolean {
    var keepGoing = true;
    element.forEach(function (value) {
      if (keepGoing) {
        if (value.desc == name)
          keepGoing = false;
      }
    });
    if (keepGoing)
      return true;
    else
      return false;
  }
  ifUniqueMagazine(name: string, element: any): boolean {
    var keepGoing = true;
    element.forEach(function (value) {
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
  ifaddMagazineClicked: boolean = false;

  addMagazine() {
    this.ifaddMagazineClicked = true;
  }

  OpenMagazine(id) {
   
    this.ifaddMagazineClicked = false;
    if (this.user)
      this.router.navigate(['magazine/', id]);
    else
      this.errorMessage = "Please log in to view content.";
  }
}




