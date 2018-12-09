import { Injectable } from '@angular/core';
//import { userAuthorization } from "./Models";
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { User, PeriodicElement, Grade, Magazine, Class, SchoolSubject, Chapter, Assignment, Content, Score } from './Models/classes';



@Injectable({
  providedIn: 'root'
})

export class SigninService {

  //user = {
  //  "id": 1,
  //  "auth": "Teacher",
  //  "name": "Tatiana",
  //  "grade": [
  //    {
  //      "value": 1,
  //      "desc": "Grade 1"
  //    }
  //  ],
  //  "readonly": false
  //};
  user: User;
  classes = [
    {
      "name": "Class 1",
      "grade":"Grade 1",
      "ID": 0,
      "magazines": [0,1,2]        
    }
  ]
  magazines: Magazine[] = [
    {
          "id": 0,
          "name": "Magazine 1",
      "pic": "assets/Mag.2.png",
          "chapters":[0,1,2,3]
        },
        {
          "id": 1,
          "name": "Magazine 2",
          "pic": "assets/Mag.1.png",
          "chapters": [1,2,3]
        },
        {
          "id": 2,
          "name": "Magazine 3",
          "pic": "assets/Mag.3.png",
          "chapters": [2,3]
        },
        {
          "id": 3,
          "name": "Magazine 1",
          "pic": "assets/2.1.jpg",
          "chapters": [1, 2, 3]
        },
        {
          "id": 4,
          "name": "Magazine 2",
          "pic": "assets/2.2.jpg",
          "chapters": [1, 2, 3]
        }
  ]
  grades: Grade[] = [
    {
      "value": 1,
      "desc": "Grade 1",
      "magazines":[0,1,2]
    },
    {
      "value": 2,
      "desc": "Grade 2",
      "magazines":[3,4]
    },
    {
      "value": 3,
      "desc": "Grade 3",
      "magazines": []
    },
    {
      "value": 4,
      "desc": "Grade 4",
      "magazines": []
    },
    {
      "value": 5,
      "desc": "Grade 5",
      "magazines": []
    },
    {
      "value": 6,
      "desc": "Grade 6",
      "magazines": []
    },
    {
      "value": 7,
      "desc": "Grade 7",
      "magazines": []
    },
    {
      "value": 8,
      "desc": "Grade 8",
      "magazines": []
    },
    {
      "value": 9,
      "desc": "Grade 9",
      "magazines": []
    }
  ]
  chapters: Chapter[] = [
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
      assignment: <Assignment[]>[
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
      assignment: <Assignment[]> [
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
      assignment: <Assignment[]>[
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
      assignment: <Assignment[]>[
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
          answer: "Art"
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
  subjects: SchoolSubject[] = [
    { value: 'Math', viewValue: 'Math' },
    { value: 'Music', viewValue: 'Music' },
    { value: 'Science', viewValue: 'Science' }
  ];
  users = [
    {      
        "id": 1,
        "auth": "Teacher",
      "name": "Tatiana",
      "grades": this.grades,
        "readonly": false      
    },
    {
      "id": 2,
      "auth": "Student",
      "name": "Jessica",
      "grades": <Grade[]>[
        {
          "value": 1,
          "desc": "Grade 1"
        }
      ],
      "readonly": false
    },
    {
      "id": 3,
      "auth": "Admin",
      "name": "Natalia",
      "grades": this.grades,
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
  scores: Score[] =  [
    {
      "scoreID":0,
      "studentID": 2,
      "magazineID": 1,
      "chapterID": 1,     
      "score":75
    }
  ];
  magazines_pic: string[][] = [["assets/1.1.jpg", "assets/1.2.jpg", "assets/1.3.jpg"], ["assets/2.1.jpg", "assets/2.2.jpg"]];


  getClasses() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.classes);
      }, 2000);
    });    
  }
  addClass(name, grade): boolean {
    var gr = this.grades[grade - 1].desc;
    this.classes.push(
      {
        "name": name,
        "grade": gr,
        "ID": this.classes.length,
        "magazines": this.getMagazinesForClass(grade)
      }
    );

    return true;
  }
  getMagazinesForClass(grade) {
    var mags = this.grades[grade-1].magazines;
    return mags;
  }
  getMagazines(grade) {
    var mags = this.magazines[grade - 1];
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mags);
      }, 2000);
    });
  }
  getChapters(id) {
    return this.chapters;
  }
  getMagazine(id) {
    var mag = this.magazines[id];
    return mag;
  }
  getGrades(gr: number[] = []) {
    if (gr.length > 0) {

    }
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.grades);
      }, 2000);
    });
   
  }
  getUser() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.user);
      }, 2000);
    });
  }
  setAnswer(magazinID, chapterID, answer0, answer1, answer2, score):boolean {
   let newScore = {
      "scoreID": this.scores.length,
      "studentID": this.user.id,
      "magazineID": magazinID,
      "chapterID": chapterID,   
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
    this.magazines[magazineid].chapters.push(this.chapters.length);
    return true;
  }
  setUser(school, username, password) {
    var id = null;
    var user = null;
    this.user = null;    
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
      this.user = <User>user;           
    }
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.user);
      }, 2000);
    });
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
