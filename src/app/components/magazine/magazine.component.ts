import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SigninService } from './../../signin.service';


@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {
  admin: boolean = false;
  chapters: any;
  user: any;
  constructor(private router: Router, private route: ActivatedRoute, private ser: SigninService) {
    this.user = ser.getUser();
    this.magazine = ser.getMagazine(0); //send id from router 
    this.chapters = ser.getChapters(this.magazine.id);
  }
  magazine: any;
  selectedId: any;
  panelOpenState = false;
  ngOnInit() {
    //this.magazine = this.route.paramMap.pipe(
      //switchMap((params: ParamMap) =>
      //  this.ser.getMagazine(params.get('id')))
    //);
    //this.magazine = this.route.paramMap.pipe(
      //switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        //this.selectedId = +params.get('id');
        //return this.ser.getMagazine(this.selectedId);
      //})
    //);
    //let b = this.magazine;

      let id = this.route.snapshot.paramMap.get('id');

    this.magazine = this.ser.getMagazine(id);
  }
  //magazines: string[] = [ '1', '2', '3'];

  back() {
    this.router.navigate(['/']);
  }
}
