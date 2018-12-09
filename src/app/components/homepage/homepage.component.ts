import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SigninService } from './../../signin.service';
//import { Observable } from 'rxjs/internal/Observable';
import { Observable } from 'rxjs/';
import { User, Class, Grade, Content, Magazine, School } from '../../Models/classes';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  user: any;
  magazines: Magazine[]=[];
  gatData: boolean = false;
  grades: any;//Observable<number[]>;
  //magazines: Observable<Magazine[]>;
  constructor(private router: Router, private route: ActivatedRoute, private ser: SigninService) {
    //this.getUser();
    this.user = ser.user;
   // this.magazines = new Magazine;

    //this.getGrades();
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
  ngOnInit() {
    
  }
  
  async ChangeGrade(grade) {

    var magazinesIds = this.ser.grades[grade - 1].magazines;
    for (var i = 0; i < magazinesIds.length; i++) {
      this.magazines.push(this.ser.magazines[magazinesIds[i]])
    }
    //magazinesIds.forEach(function (value) {
    //  this.magazines.append(this.ser.magazines[value])
    //})
    //this.magazines = this.ser.magazines[grade - 1];// < Magazine[] > await this.ser.getMagazines(grade);
    if (this.magazines) {
      this.ifgradeclicked = true;
    }
  }

  OpenMagazine(id) {
    //redirect to the magazine page
    if (this.user)
      this.router.navigate(['magazine/', id]);
    else
      this.errorMessage = "Please log in to view content.";
  }
}




