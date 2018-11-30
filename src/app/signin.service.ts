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
          title: "What are number.",
          content: "A number is a basic unit of mathematics. Numbers are used for counting, measuring, and comparing amounts. A number system is a set of symbols, or numerals, that are used to represent numbers. The most common number system uses 10 symbols called digits—0, 1, 2, 3, 4, 5, 6, 7, 8, and 9—and combinations of these digits.",
          pic: "assets/num.png",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
        {
          id: 2,
          title: "How numbers help us.",
          content: "Numbers play an important role in our lives. Almost all the things we do involve numbers and Mathematics. Whether we like it or not, our life revolves in numbers since the day we were born. There are numerous numbers directly or indirectly connected to our lives. The following are some uses of numbers in our daily life: \n1.Calling a member of a family or a friend using mobile phone.\n2.Weighing fruits, vegetables, meat, chicken, and others in market.\n3.Using elevators to go places or floors in the building.\n4.Looking at the price of discounted items in a shopping mall.\n5.Telling time you spent on work or school.",
          pic: "assets/numinlife.jpg",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        }
      ],
      assignment: [
        {
          question: "What does  a number represent?",
          pic: "",
          options: ["A basic unit of mathematics", "Science", "Symbol"],
          answer:"A basic unit of mathematics"
        },
        {
          question: "How many digits does the common number system use ?",
          pic: "",
          options: ["5", "8", "10"],
          answer: "10"
        },
        {
          question: "Where do we use numbers in our daily life?",
          pic: "",
          options: ["Looking at the price ", "In Art", " In School"],
          answer: "Looking at the price"}
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
          content: "Musical instruments are grouped into families based on how they make sounds. Today we will talk about brass instruments. Brass instruments are made of brass or some other metal and make sound when air is blown inside. The musician's lips must buzz, as though making a (raspberry) noise against the mouthpiece. Air then vibrates inside the instrument, which produces a sound. Brass instruments include trumpet, trombone, tuba, French horn, cornet, and bugle.",
          pic: "assets/brass.jpg",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
      ],
      assignment: [
        {
          question: "What is the basic symbol of music?",
          pic: "",
          options: ["Apple", "Piano", "Notes"],
          answer: "Notes"
        },
        {
          question: "What is brass instrument?",
          pic: "",
          options: ["A musical instrument", "A musical family of instruments", "A staff"],
          answer: "A musical family of instruments"
        },
        {
          question: "What is a trumpet?",
          pic: "",
          options: ["A brass instrument", "An instrument", "A toy"],
          answer: "A brass instrument"
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
          title: "A Little Story About  a Lazy Chick .",
          content: "Little Chick is so happy in his nest with his mummy that he doesn’t ever want to leave it.  It is, therefore, very appropriate for his mummy to call him Nestor! And mummy does everything Nestor asks, she finds his favourite worms and insects for him and keeps the nest tidy.  One day, however, mummy has had enough. ",
          pic: "assets/english1.JPG",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
        {
          id: 2,
          title: "The Wind and The Sun  ",
          content: "Once the Wind and the Sun had an argument. “I am stronger than you,” said the Wind. “No, you are not,” said the Sun. Just at that moment they saw a traveler walking across the road. He was wrapped in a shawl. The Sun and the Wind agreed that whoever could separate the traveller from his shawl was stronger. The Wind took the first turn. He blew with all his might to tear the traveller’s shawl from his shoulders. But the harder he blew, the tighter the traveller gripped the shawl to his body. The struggle went on till the Wind’s turn was over. Now it was the Sun’s turn. The Sun smiled warmly. The traveller felt the warmth of the smiling Sun. Soon he let the shawl fall open. The Sun’s smile grew warmer and warmer... hotter and hotter. Now the traveller no longer needed his shawl. He took it off and dropped it on the ground. The Sun was declared stronger than the Wind. ",
          pic: "assets/english2.jpg",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        }
      ],
      assignment: [
        {
          question: "Why Chick is lazy?",
          pic: "",
          options: ["Lazy  Chick lives with mom ", "It is alone", "It is unhappy"],
          answer: "Lazy Chick lives with mom"
        },
        {
          question: "Who is stonger  The  Wind or The  Sun ?",
          pic: "",
          options: ["The Wind", "The Sun", "Both"],
          answer: "The Sun"
        },
        {
          question: "I am stonger than_______________?",
          pic: "",
          options: ["You", "Sun", "Wind"],
          answer: "You"
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
          title: "Sun. Part 1",
          content: "The Sun gives life to the Earth and the Earth would have no life at all without the energy it receives from the Sun. The Sun is only one of millions and millions of stars in the Galaxy. We see it as a large round red ball only because we are much closer to the Sun than to any of the other stars. Other stars may be larger, brighter, smaller or fainter than our Sun but they are so very far away that we only see them as points of light in the night sky. The Earth is one of nine planets that orbit round the Sun in what we call the Solar System. ",
          pic: "assets/sun1.jpg",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
        {
          id: 2,
          title: "Sun.Part 2",
          content: "This measurement is taken as one Astronomical Unit and is how we measure distances in our Solar System. The Sun is 92.96 million miles or 149.6 million kilometres from the Earth. The Sun is bigger than can really be imagined, over one million times bigger than the Earth. This measurement is taken as one Astronomical Unit and is how we measure distances in our Solar System. Like all stars, the Sun is composed of a great burning ball of gases. It is made of 92.1% hydrogen and 7.8% helium (helium is from the ancient Greek word helios, which means Sun).",
           pic: "assets/sun2.jpg",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        }
      ],
      assignment: [
        {
          question: "Why the sun is very important?",
          pic: "",
          options: ["Gives life to the Earth", "It is very hot", "It is a star"],
          answer: "Gives life to the Earth"
        },
        {
          question: "How far is the sun from earth?",
          pic: "",
          options: ["92.96 million miles", "90.00 million miles", "86.23 million miles"],
          answer: "92.96 million miles"
        },
        {
          question: "What does  sun  mean from ancient Greek?",
          pic: "",
          options: ["Helium", "Hot", "Water"],
          answer: "Helium"
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

