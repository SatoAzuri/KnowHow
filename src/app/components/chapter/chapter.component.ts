import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  admin: boolean = false;
  fromDB: boolean = false;
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
  constructor() { }

  ngOnInit() {
  }

}
