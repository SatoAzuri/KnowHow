

 export class UserAuth{
    authorization: string;
    type: string;
}
export interface User {
  id: number;
  auth: string;
  name: string;
  grade: Grade[];
  readonly: boolean;
}
export interface PeriodicElement {
  firstName: string;
  lastName: string;
  position: number;
  chapter: number;
  total: number;
}

export class School {
  value: string;
  viewValue: string;
}

export class Class {
  name: string;
  grade: string;
  ID: number;
  magazines: number[];
}

export class Magazine {
  id: number;
  name: string;
  pic: string;
  chapters: number[];
  constructor(x: number, y: string, z: string, v:number[]) {
    this.id = x;
    this.name = y;
    this.pic = z;
    this.chapters = v;
  }
}
export class Chapter {
  id: number;
  name: string;
  type: string;
  content: Content[];
  assignment: Assignment[];

  constructor(x: number, y: string, z: string, v: Content[], b:Assignment[]) {
    this.id=x;
    this.name=y;
    this.type=z;
    this.content= v;
    this.assignment=b;
  }
}
export class Score {
  scoreID: number;
  studentID: number;
  magazineID: number;
  chapterID: number; 
  score: number;
  constructor(x: number, y: number, z: number, v: number, b:number) {
    this.scoreID = x;
    this.studentID = y;
    this.magazineID = z;
    this.chapterID = v;
    this.chapterID = b;
  }
}
export class Assignment {
  id: number;
  question: string;
  pic: string;
  options: string[];
  answer: string;
  constructor(i: number, x: string, y: string, z: string[], v: string) {
    this.id = i;
    this.question = x;
    this.pic = y;
    this.options = z;
    this.answer = v;
  }
}
export class Content {
  id: number;
  name: string;
  content: string;
  pic: string;
  video: string;
  constructor(x: number, y: string, z: string, v: string, b: string) {
    this.id = x;
    this.name = y;
    this.content = z;
    this.pic = v;
    this.video = b;
  }
}
export class Grade {
  value: number;
  desc: string;
  magazines: number[];
}

export interface SchoolSubject {
  value: string;
  viewValue: string;
}

export class Mag {
  id: number;
  name: string;
  pic: string;
}
