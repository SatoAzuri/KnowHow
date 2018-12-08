import { Injectable } from '@angular/core';
//import { userAuthorization } from "./Models";
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { map } from 'rxjs/operators';


export interface User {
  id: number;
  auth: string;
  name: string;
  grade: number[];
  readonly: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class SigninService {

  user: User = {
    "id": 1,
    "auth": "Teacher",
    "name": "Tatiana",
    "grade": [],
    "readonly": false
  };
  classes = [
    {

      "name": "Class 1",
      "grade":1,
      "ID": 0,
      "magazines": []
    },
    {

      "name": "Class 2",
      "grade": 2,
      "ID": 1,
      "magazines": []
    },
    {

      "name": "Class 3",
      "grade":2,
      "ID": 2,
      "magazines": []
    }
  ]
  magazines = [
    {
      "grade": 1,
      "content":
        [{
          "id": 0,
          "name": "Magazine 1",
          "pic": "assets/Mag.2.png"
        },
        {
          "id": 1,
          "name": "Magazine 2",
          "pic": "assets/Mag.1.png"
        },
        {
          "id": 2,
          "name": "Magazine 3",
          "pic": "assets/Mag.3.png"
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
      id: 0,
      name: "Chapter1",
      type: "Math",
      content: [
        {
          id: 1,
          title: "1.1 What are number.",
          content: "A number is a basic unit of mathematics. Numbers are used for counting, measuring, and comparing amounts. A number system is a set of symbols, or numerals, that are used to represent numbers. The most common number system uses 10 symbols called digits—0, 1, 2, 3, 4, 5, 6, 7, 8, and 9—and combinations of these digits.",
          pic: "assets/num.png",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
        {
          id: 2,
          title: "1.2 How numbers help us.",
          content: "Numbers play an important role in our lives. Almost all the things we do involve numbers and Mathematics. Whether we like it or not, our life revolves in numbers since the day we were born. There are numerous numbers directly or indirectly connected to our lives. The following are some uses of numbers in our daily life: \n1.Calling a member of a family or a friend using mobile phone.\n2.Weighing fruits, vegetables, meat, chicken, and others in market.\n3.Using elevators to go places or floors in the building.\n4.Looking at the price of discounted items in a shopping mall.\n5.Telling time you spent on work or school.",
          pic: "assets/education.jpg",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        }
      ],
      assignment: [
        {
          question: "What is math?",
          pic: "",
          options: ["Science", "Art", "School"],
          answer: "Science"
        },
        {
          question: "What is drawing?",
          pic: "",
          options: ["Science", "Art", "School"],
          answer: "Science"
        },
        {
          question: "What is Apple?",
          pic: "",
          options: ["Fruit", "Veggi", "Berry"],
          answer: "Fruit"
        }
      ]
    },
    {
      id: 1,
      name: "Chapter2",
      type: "Music",
      content: [
        {
          id: 1,
          title: "Learn Notes",
          content: "Music is made up of a variety of symbols, the most basic of which are the staff,the clefs and the notes.All music contains these fundamental components, and in order to learn how to read music, you must first familiarize yourself with these basics.The staff consists of five lines and four spaces. Each of those lines and each of those spaces represents a different letter, which in turn represents a note. Those lines and spaces represent notes named A-G, and the note sequence moves alphabetically up the staff.There are two main clefs with which to familiarize yourself; the first is a treble clef. The treble clef has the ornamental letter G on the far left side. The G’s inner swoop encircles the “G” line on the staff. The treble clef notates the higher registers of music, so if your instrument has a higher pitch, such as a flute, violin or saxophone, your sheet music is written in the treble clef.  Higher notes on a keyboard also are notated on the treble clef.The line between the two bass clef dots is the “F” line on the bass clef staff, and it’s also referred to as the F clef. The bass clef notates the lower registers of music, so if your instrument has a lower pitch, such as a bassoon, tuba or cello, your sheet music is written in the bass clef. Lower notes on your keyboard also are notated in the bass clef.Notes placed on the staff tell us which note letter to play on our instrument and how long to play it. There are three parts of each note, the note head, the stem and the flag.",
          pic: "assets/Music.jpg",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
        {
          id: 2,
          title: "Learn Instruments",
          content: "Text4",
          pic: "assets/numbers.png",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
      ],
      assignment: [
        {
          question: "What is math?",
          pic: "",
          options: ["Science", "Art", "School"],
          answer: "Science"
        },
        {
          question: "What is drawing?",
          pic: "",
          options: ["Science", "Art", "School"],
          answer: "Science"
        },
        {
          question: "What is Apple?",
          pic: "",
          options: ["Fruit", "Veggi", "Berry"],
          answer: "Fruit"
        }

      ]
    },
    {
      id: 2,
      name: "Chapter3",
      type: "English",
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
      ],
      assignment: [
        {
          question: "What is math?",
          pic: "",
          options: ["Science", "Art", "School"],
          answer: "Science"
        },
        {
          question: "What is drawing?",
          pic: "",
          options: ["Science", "Art", "School"],
          answer: "Science"
        },
        {
          question: "What is Apple?",
          pic: "",
          options: ["Fruit", "Veggi", "Berry"],
          answer: "Fruit"
        }

      ]
    },
    {
      id: 3,
      name: "Chapter4",
      type: "Science",
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
      ],
      assignment: [
        {
          question: "What is math?",
          pic: "",
          options: ["Science", "Art", "School"],
          answer: "Science"
        },
        {
          question: "What is drawing?",
          pic: "",
          options: ["Science", "Art", "School"],
          answer: "Science"
        },
        {
          question: "What is Apple?",
          pic: "",
          options: ["Fruit", "Veggi", "Berry"],
          answer: "Fruit"
        }

      ]
    },
  ];
  users = [
    {      
        "id": 1,
        "auth": "Teacher",
        "name": "Tatiana",
        "grade": [],
        "readonly": false      
    },
    {
      "id": 2,
      "auth": "Student",
      "name": "Jessica",
      "grade": [1],
      "readonly": false
    },
    {
      "id": 3,
      "auth": "Admin",
      "name": "Natalia",
      "grade": [],
      "readonly": false
    }
  ];
  auth = [
    {
      "username": "teacher",
      "password": "teacher",
      "id": 1
    },
    {
      "username": "student",
      "password": "student",
      "id": 2
    },
    {
      "username": "admin",
      "password": "admin",
      "id": 3
    }
  ];
  scores = [
    {
      "scoreID":0,
      "studentID": 2,
      "magazineID": 1,
      "chapterID": 1,
      "answer0": "yes",
      "answer1": "yes",
      "answer2": "yes",
      "score":75

    }
  ];
  magazines_pic: string[][] = [["assets/1.1.jpg", "assets/1.2.jpg", "assets/1.3.jpg"], ["assets/2.1.jpg", "assets/2.2.jpg"]];


  getClasses() {
    return this.classes;
  }
  addClass(name, grade):boolean {
    this.classes.push(
      {
        "name": name,
        "grade": grade,
        "ID": this.classes.length,
        "magazines": this.getMagazines(grade)
      }
    );

    return true;
  }
  getMagazines(grade) {
    var mags = this.magazines[grade-1].content;
    return mags;
  }
  getChapters(id) {
    return this.chapters;
  }
  getMagazine(id) {
    var mag = this.magazines[0].content[0];
    return mag;
  }
  getGrades() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  getUser() {
    return this.user;
  }
  setAnswer(magazinID, chapterID, answer0, answer1, answer2, score):boolean {
   let newScore = {
      "scoreID": this.scores.length,
      "studentID": this.user.id,
      "magazineID": magazinID,
      "chapterID": chapterID,
      "answer0": answer0,
      "answer1": answer1,
      "answer2": answer2,
      "score": score
    }
    this.scores.push(newScore);

    return true;
  }

  addChapter(magazineid, name, subject): boolean {
    this.chapters.push(
      {
        "id": this.chapters.length,
        "name": name,
        "type": subject,
        "content": [],
        "assignment":[]
      }
    )
    return true;
  }
  setUser(school, username, password): boolean {
    var id = null;
    var user = null;
    //this.user = new User;
    //var user = User; // = new User();
    this.auth.forEach(function (value) {
      if (value.username == username && value.password == password) {
        id = value.id;
      }     
    });
    if (id) {
      this.users.forEach(function (val) {
        if (val.id == id) {
          user = val;         
        }
      });
    }
    if (user) {
      this.user = user;
      return true;
    }
    this.user = null;    
    return false;
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
  getDictonaryData(name?): any {
    if (name) {
      this.word = name;
    }
    let respon = this._http.get('/oxfordapi/' + this.word)

    return respon;
  }


}
