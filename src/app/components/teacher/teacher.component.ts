
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']


})
export class TeacherComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'chapter', 'total'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //dataSource1 = new MatTableDataSource(ELEMENT_DATA);
  curClass: string;
  curMag: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;

  }
  accessStudents(id, mag) {

    this.curClass = id;
    this.curMag = mag;


  }

  constructor() { }

  classes = [
    {

      "name": "Class 1",
      "ID": 0,
      "magazines": ["Know-How/September", "Know-How/October", "Know-How/November"]
    },
    {

      "name": "Class 2",
      "ID": 1,
      "magazines": ["Know-How/September", "Know-How/October", "Know-How/November"]
    },
    {

      "name": "Class 3",
      "ID": 2,
      "magazines": ["Know-How/September", "Know-How/October", "Know-How/November"]
    }
  ]


}
export interface PeriodicElement {
  firstName: string;
  lastName: string;
  position: number;
  chapter: number;
  total: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, firstName: 'Anna', lastName: 'Carenina', chapter: 75, total: 75 },
  { position: 2, firstName: 'Jin', lastName: 'Mattew', chapter: 75, total: 75 },
  { position: 3, firstName: 'Bob', lastName: 'Miller', chapter: 75, total: 75 },
  { position: 4, firstName: 'Keysha', lastName: 'Smith', chapter: 75, total: 75 },
  { position: 5, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 },
  { position: 6, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 },
  { position: 7, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 },
  { position: 8, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 },
  { position: 9, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 },
  { position: 10, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 },
  { position: 11, firstName: 'Larisa', lastName: 'Bronhova', chapter: 75, total: 75 }


];
