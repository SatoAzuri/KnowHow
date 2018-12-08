import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SigninService } from './../../signin.service';
//import { Observable } from 'rxjs/internal/Observable';
import { Observable } from 'rxjs/';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  user: any;
  //grades: any;
  magazines: any;
  gatData: boolean = false;
  grades: any;//Observable<number[]>;
  //magazines: Observable<Magazine[]>;
  constructor(private router: Router, private route: ActivatedRoute, private ser: SigninService) {
    this.user = this.ser.getUser();
    //this.grades = this.getGrades();
    this.user = this.ser.getUser();
    if (this.user && this.user.auth != "Admin") {
      this.grades = this.user.grade;
    }
    else {
      this.grades = this.ser.getGrades();
    }
  }

  async getGrades() {
    var gr:number[];
    if (this.user) {
      gr = this.user.grade;
      while (!gr) {
        if (gr)
          this.gatData = true;
      }
    }
    else {
      gr = await this.ser.getGrades();
    }
    if (gr.length>0)
      this.gatData = true;
    return gr;
  }

  magazines_pic: string[][] = [["assets/1.1.jpg", "assets/1.2.jpg", "assets/1.3.jpg"], ["assets/2.1.jpg", "assets/2.2.jpg"]];
  ifgradeclicked: boolean = false;
  errorMessage: string = "";
  ngOnInit() {
    //this.getGrades().then(() =>
      //console.log(this.grades)
    //);
    //this.grades = this.getGrades();
    
  }
  ngAfterViewInit() {
    //this.user = this.ser.getUser();
    //if (this.user) {
    //  this.grades = this.user.grade;
    //}
    //else {
    //  this.grades = this.ser.getGrades();
    //}

  }
  ChangeGrade(grade) {
    this.ifgradeclicked = true;
    this.magazines = this.ser.getMagazines(0);
    this.gatData = true;
  }

  OpenMagazine(id) {
    //redirect to the magazine page
    if (this.user)
      this.router.navigate(['magazine/', 0]);
    else
      this.errorMessage = "Please log in to view content.";
  }
}

export interface Magazine {
  grade: number,
  content: Content[]
}

export interface Content {
    id: number,
    name: string,
    pic: string
}
