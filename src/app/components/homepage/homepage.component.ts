import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SigninService } from './../../signin.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  user: any;
  grades: any;
  constructor(private router: Router, private route: ActivatedRoute, private ser: SigninService) {
    this.user = ser.getUser();
    if (this.user) {
      this.grades = this.user.grade;
    }
    else {
      this.grades = ser.getGrades();
    }
  }
  magazines_pic: string[][] = [["assets/1.1.jpg", "assets/1.2.jpg", "assets/1.3.jpg"], ["assets/2.1.jpg", "assets/2.2.jpg"]];
  magazines: any;
  ifgradeclicked: boolean = false;
  ngOnInit() {
    
  }
  ChangeGrade(grade) {
    this.ifgradeclicked = true;
    this.magazines = this.ser.getMagazines(0);
  }

  OpenMagazine(id) {
    //redirect to the magazine page
    this.router.navigate(['magazine/', 0]);
  }
}
