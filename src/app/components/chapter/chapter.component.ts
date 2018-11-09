import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { SigninService } from './../../signin.service';
import { HttpModule } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-chapter, json-pipe',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  name: any;
  dictData;
  jsonData: any;

  constructor(private ser: SigninService,
    private _http : Http
  ) { }

  ngOnInit() {
  }

   getData() {
    this.ser.getDictonaryData(this.name).subscribe(data => {
      console.log(data);
      this.jsonData = data;
    });
  }  
}
