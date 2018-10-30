import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  signin: boolean;
  constructor() { }
  isSignin() { return this.signin; }
  setSignin(val) { this.signin = val; }
  getMagazine(id) { return "Cat"}
}
