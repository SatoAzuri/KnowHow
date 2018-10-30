import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  grades: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  magazines_pic: string[][] = [["assets/1.1.jpg", "assets/1.2.jpg", "assets/1.3.jpg"], ["assets/2.1.jpg", "assets/2.2.jpg"]];
magazines: string[];
ifgradeclicked: boolean = false;
  ngOnInit() {
    
  }
  ChangeGrade(grade) {
    this.ifgradeclicked = true;
    if (grade == 1) {
      this.magazines = this.magazines_pic[0];
    }                      
    else {                 
      this.magazines = this.magazines_pic[1];
    }
  }

  OpenMagazine(id) {
    //redirect to the magazine page

    this.router.navigate(['magazine/', id]);
  }
}
