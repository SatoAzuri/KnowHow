import { Injectable } from '@angular/core';
import { userAuthorization } from "./Models";
@Injectable({
  providedIn: 'root'
})

export class SigninService {
  signin: boolean;
  userName: string;
  constructor() { }
  isSignin() { return this.signin; }
  setSignin(val) { this.signin = val; }
  getMagazine(id) { return "Cat"}
}
