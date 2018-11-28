import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SigninService } from './../../signin.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {
  admin: boolean = false;
  chapters: any;
  user: any;
  name: any;
  dictData;
  jsonData: any;
  headers;
  results: any;
  constructor(private router: Router, private route: ActivatedRoute, private ser: SigninService,
    private _http: HttpClient) {
    this.user = ser.getUser();
    this.magazine = ser.getMagazine(0); //send id from router 
    this.chapters = ser.getChapters(this.magazine.id);
  }
  magazine: any;
  selectedId: any;

  panelOpenState = false;
  ngOnInit() {


    let id = this.route.snapshot.paramMap.get('id');

    this.magazine = this.ser.getMagazine(id);
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
