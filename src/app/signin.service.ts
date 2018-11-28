import { Injectable } from '@angular/core';
//import { userAuthorization } from "./Models";
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SigninService {

  user: any;
  magazines = [
    {
      "grade": 1,
      "content":
        [{
          "id": 0,
          "name": "Magazine 1",
          "pic": "assets/1.1.jpg"
        },
        {
          "id": 1,
          "name": "Magazine 2",
          "pic": "assets/1.2.jpg"
        },
        {
          "id": 2,
          "name": "Magazine 3",
          "pic": "assets/1.3.jpg"
        }]
    },
    {
      "grade": 2,
      "content":
        [{
          "id": 0,
          "name": "Magazine 1",
          "pic": "assets/2.1.jpg"
        },
        {
          "id": 1,
          "name": "Magazine 2",
          "pic": "assets/2.2.jpg"
        }
        ]
    }
  ]
  chapters = [
    {
      id: 1,
      name: "Chapter1",
      type: "Math",
      content: [
        {
          id: 1,
          title: "1.1 What are number.",
          content: "A number is a basic unit of mathematics. Numbers are used for counting, measuring, and comparing amounts. A number system is a set of symbols, or numerals, that are used to represent numbers. The most common number system uses 10 symbols called digits—0, 1, 2, 3, 4, 5, 6, 7, 8, and 9—and combinations of these digits.",
          pic: "assets/numbers.png",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
        {
          id: 2,
          title: "1.2 How numbers help us.",
          content: "Numbers play an important role in our lives. Almost all the things we do involve numbers and Mathematics. Whether we like it or not, our life revolves in numbers since the day we were born. There are numerous numbers directly or indirectly connected to our lives. The following are some uses of numbers in our daily life: \n1.Calling a member of a family or a friend using mobile phone.\n2.Weighing fruits, vegetables, meat, chicken, and others in market.\n3.Using elevators to go places or floors in the building.\n4.Looking at the price of discounted items in a shopping mall.\n5.Telling time you spent on work or school.",
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
    },
    {
      id: 3,
      name: "Chapter3",
      type: "Math",
      content: [
        {
          id: 1,
          title: "1.1 What are number.",
          content: "A number is a basic unit of mathematics. Numbers are used for counting, measuring, and comparing amounts. A number system is a set of symbols, or numerals, that are used to represent numbers. The most common number system uses 10 symbols called digits—0, 1, 2, 3, 4, 5, 6, 7, 8, and 9—and combinations of these digits.",
          pic: "assets/numbers.png",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
        {
          id: 2,
          title: "1.2 How numbers help us.",
          content: "Numbers play an important role in our lives. Almost all the things we do involve numbers and Mathematics. Whether we like it or not, our life revolves in numbers since the day we were born. There are numerous numbers directly or indirectly connected to our lives. The following are some uses of numbers in our daily life: \n1.Calling a member of a family or a friend using mobile phone.\n2.Weighing fruits, vegetables, meat, chicken, and others in market.\n3.Using elevators to go places or floors in the building.\n4.Looking at the price of discounted items in a shopping mall.\n5.Telling time you spent on work or school.",
          pic: "assets/education.jpg",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        }
      ]
    },
    {
      id: 4,
      name: "Chapter4",
      type: "Math",
      content: [
        {
          id: 1,
          title: "1.1 What are number.",
          content: "A number is a basic unit of mathematics. Numbers are used for counting, measuring, and comparing amounts. A number system is a set of symbols, or numerals, that are used to represent numbers. The most common number system uses 10 symbols called digits—0, 1, 2, 3, 4, 5, 6, 7, 8, and 9—and combinations of these digits.",
          pic: "assets/numbers.png",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
        {
          id: 2,
          title: "1.2 How numbers help us.",
          content: "Numbers play an important role in our lives. Almost all the things we do involve numbers and Mathematics. Whether we like it or not, our life revolves in numbers since the day we were born. There are numerous numbers directly or indirectly connected to our lives. The following are some uses of numbers in our daily life: \n1.Calling a member of a family or a friend using mobile phone.\n2.Weighing fruits, vegetables, meat, chicken, and others in market.\n3.Using elevators to go places or floors in the building.\n4.Looking at the price of discounted items in a shopping mall.\n5.Telling time you spent on work or school.",
          pic: "assets/education.jpg",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        }
      ]
    },
  ];
  magazines_pic: string[][] = [["assets/1.1.jpg", "assets/1.2.jpg", "assets/1.3.jpg"], ["assets/2.1.jpg", "assets/2.2.jpg"]];

  

  getMagazines(grade) {
    return this.magazines[0];
  }
  getChapters(id) {
    return this.chapters;
  }
  getMagazine(id) {
    return this.magazines[0].content[0];
  }
  getGrades() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  getUser() {
    return this.user;
  }
  setUser(school, username, password) {
    var exist = true;
    if (exist) {
      this.user = {
        "id": 1,
        "auth": "Teacher",
        "name": "Tatiana",
        "grade": [1, 4],
        "readonly": false
      };
      return true;
    }
    else {
      this.user = null;
      return false;
    }


  }

//  word: String = "aardvark";
//  constructor(private _http: HttpClient) {
//    console.log("BlogHttpService is called");
//  }
//  private extractdata(res: Response) {
//    let body = res;
//    return body || {};
//  }
//  private handleError(err: HttpErrorResponse) {
//    console.log("Handle error Http calls")
//    console.log(err.message);
//    return Observable.throw(err.message);
//  }
//  getDictonaryData(name?): any {
//    if (name) {
//      this.word = name
//    }
//    let respon = this._http.get('/oxfordapi/' + this.word);
    

//    return respon;//maYBE
//  }
//  @Injectable({
//    providedIn: 'root'
//  })
//  //export class SigninService {
//  //signin: boolean;
//  //options;
//  //isSignin() { return this.signin; }
//  //setSignin(val) { this.signin = val; }
//  //getMagazine(id) { return "Cat" }
//  //word: String = "aardvark";
 

//  //private handleError(err: HttpErrorResponse) {
//  //  console.log("Handle error Http calls")
//  //  console.log(err.message);
//  //  return Observable.throw(err.message);
//  //}
//  //getDictonaryData(name?): any {
//  //  if (name) {
//  //    this.word = name
//  //  }
//  //  let respon = this._http.get('/oxfordapi/' + this.word)

//  //  return respon;
//  //}
//}


 
  signin: boolean;
  options;
  isSignin() { return this.signin; }
  setSignin(val) { this.signin = val; }
  //getMagazine(id) { return "Cat" }
  word: String = "aardvark";
  constructor(private _http: HttpClient) {
    console.log("BlogHttpService is called");
  }

  

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message);
  }
  getDictonaryData(name ?): any {
    if (name) {
      this.word = name
    }
    let respon = this._http.get('/oxfordapi/' + this.word)

    return respon;
  }


}

