import { Component, OnInit, Input } from '@angular/core';
import { SigninService } from './../../signin.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
//import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
//import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpErrorResponse } from '@angular/common/http';
//import { Observable, Subject, of } from 'rxjs';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapter, json-pipe',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  admin: boolean = false;
  fromDB: boolean = true;
  user: any;
  name: any;
  dictData;
  jsonData: any;
  headers;
  results: any;
  //chapters = [
  //  {
  //    id: 1,
  //    name: "Chapter1",
  //    type: "Math",
  //    content: [
  //      {
  //        id: 1,
  //        title: "1.1 What are number.",
  //        content: "A number is a basic unit of mathematics. Numbers are used for counting, measuring, and comparing amounts. A number system is a set of symbols, or numerals, that are used to represent numbers. The most common number system uses 10 symbols called digits—0, 1, 2, 3, 4, 5, 6, 7, 8, and 9—and combinations of these digits.",
  //        pic: "assets/numbers.png",
  //        video: "https://www.youtube.com/embed/yxAIBFsRpqU"
  //      },
  //      {
  //        id: 2,
  //        title: "1.2 How numbers help us.",
  //        content: "Numbers play an important role in our lives. Almost all the things we do involve numbers and Mathematics. Whether we like it or not, our life revolves in numbers since the day we were born. There are numerous numbers directly or indirectly connected to our lives. The following are some uses of numbers in our daily life: \n1.Calling a member of a family or a friend using mobile phone.\n2.Weighing fruits, vegetables, meat, chicken, and others in market.\n3.Using elevators to go places or floors in the building.\n4.Looking at the price of discounted items in a shopping mall.\n5.Telling time you spent on work or school.",
  //        pic: "assets/education.jpg",
  //        video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
  //      }
  //    ]
  //  },
  //  {
  //    id: 2,
  //    name: "Chapter2",
  //    type: "Music",
  //    content: [
  //      {
  //        id: 1,
  //        title: "Learn Notes",
  //        content: "Music is made up of a variety of symbols, the most basic of which are the staff,the clefs and the notes.All music contains these fundamental components, and in order to learn how to read music, you must first familiarize yourself with these basics.The staff consists of five lines and four spaces. Each of those lines and each of those spaces represents a different letter, which in turn represents a note. Those lines and spaces represent notes named A-G, and the note sequence moves alphabetically up the staff.There are two main clefs with which to familiarize yourself; the first is a treble clef. The treble clef has the ornamental letter G on the far left side. The G’s inner swoop encircles the “G” line on the staff. The treble clef notates the higher registers of music, so if your instrument has a higher pitch, such as a flute, violin or saxophone, your sheet music is written in the treble clef.  Higher notes on a keyboard also are notated on the treble clef.The line between the two bass clef dots is the “F” line on the bass clef staff, and it’s also referred to as the F clef. The bass clef notates the lower registers of music, so if your instrument has a lower pitch, such as a bassoon, tuba or cello, your sheet music is written in the bass clef. Lower notes on your keyboard also are notated in the bass clef.Notes placed on the staff tell us which note letter to play on our instrument and how long to play it. There are three parts of each note, the note head, the stem and the flag.",

  //        pic: "assets/Music.jpg",
  //        video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
  //      },
  //      {
  //        id: 2,
  //        title: "Learn Instruments",
  //        content: "Text4",
  //        pic: "assets/numbers.png",
  //        video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
  //      },
  //    ]
  //  }
  //];
  //  name: any;
  //  jsonData: any;
  //  constructor(private ser: SigninService, private _http: Http) {
  //    this.user = ser.getUser();
  //  }

  //  ngOnInit() {
  //  }
  //  getData() {
  //    this.ser.getDictonaryData(this.name).subscribe(data => {
  //      console.log(data);
  //      this.jsonData = data.json();
  //      //var obj = JSON.parse(this.jsonData.results);
  //      //var k = obj;

  //      //var obj = JSON.parse(data);
  //      var isValid = this.isValidJson(this.jsonData.comtent);
  //      this.jsonData = JSON.stringify(data);
  //      var u = this.jsonData;
  //      if (data.status >= 200 && data.status < 400) {
  //        data.forEach(movie => {
  //          console.log(movie.title);
  //        });
  //      } else {
  //        console.log('error');
  //      }
  //    });
  //  }
  //  isValidJson(json) {
  //  try {
  //    JSON.parse(json);
  //    return true;
  //  } catch (e) {
  //    return false;
  //  }
  //}
  //}



  //@Component({
  //  selector: 'app-chapter, json-pipe',
  //  templateUrl: './chapter.component.html',
  //  styleUrls: ['./chapter.component.css']
  //})
  //export class ChapterComponent implements OnInit {


  constructor(private ser: SigninService,
    private _http: HttpClient
  ) { this.user = ser.getUser(); }

  ngOnInit() {
  }
  @Input() chapter: any;


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
