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
  chapters = [
    {
      id: 1,
      name: "Chapter1",
      type: "Math",
      content: [
        {
          id: 1,
          title: "Learn Numbers",
          content: "Text",
          pic: "assets/numbers.png",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
        {
          id: 2,
          title: "Add numbers",
          content: "Text2",
          pic: "assets/education.jpg",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        }
      ]
    },
    {
      id: 2,
      name: "Chapter2",
      type: "Music",
      content: [
        {
          id: 1,
          title: "Learn Notes",
          content: "Text3",
          pic: "assets/numbers.png",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
        {
          id: 2,
          title: "Learn Instruments",
          content: "Text4",
          pic: "assets/numbers.png",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
      ]
    }
  ];
  
  constructor(private router: Router, private route: ActivatedRoute, private ser: SigninService) { }
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
  magazines: string[] = [ '1', '2', '3'];

  back() {
    this.router.navigate(['/']);
  }
}
