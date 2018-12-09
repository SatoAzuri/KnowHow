import { Component, OnInit, Input } from '@angular/core';
import { SigninService } from './../../signin.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User, Class, Grade, Content, School, Magazine } from '../../Models/classes';

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
  submitted1 = false;
  submitted = false;

  //private chapterForm1: FormGroup;
  chapterForm1 = this.fb.group({
    chapterName: ['', Validators.required],
    chapterType: [null, Validators.required]
  });
  chapterTypes: ChapterType[] = [
    { value: '0', viewValue: 'Grade 1' },
    { value: '1', viewValue: 'Grade 2' },
    { value: '2', viewValue: 'Grade 3' }
  ];

  constructor(private ser: SigninService, private _http: HttpClient, private fb: FormBuilder)
  {
    this.user = ser.user;
    //this.chapterTypes = ser.chapters;
    //this.getUser();
  }
  //async getUser() {
  //  this.user = <User>await this.ser.getUser();
  //}
  get f() { return this.chapterForm1.controls; }

  onSubmit() {
    this.submitted = true;

    //console.warn(this.chapterForm1.value);

    if (this.chapterForm1.invalid) {
      return;
    }

    if (this.chapterForm1.valid) {
      this.submitted1 = true;
    }

  }


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
export interface ChapterType {
  value: string;
  viewValue: string;
}
