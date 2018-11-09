import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
//import { Http, Headers } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map'


////import 'rxjs / add / operator / map';
@Injectable({
  providedIn: 'root'
})
export class SigninService {
  signin: boolean;
  headers;
  options;
  isSignin() { return this.signin; }
  setSignin(val) { this.signin = val; }
  getMagazine(id) { return "Cat" }
  word: String = "aardvark";
  constructor(private _http: Http) {
       console.log("BlogHttpService is called");
  }

  private extractdata(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message);
  }
  getDictonaryData(name?): any {
    if (name) {
      this.word = name
    }
    let respon = this._http.get('/oxfordapi/' + this.word)

    return respon;
  }
   //getDictionary(): any {
    

    // let respon = this._http.get('/oxfordapi/' + 'car')
    
   // return respon;
   // }

}
