import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignInForm} from './sign-in-form'
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = '';
  constructor(private _http: HttpClient) { }
  enroll(user:SignInForm){
   return this._http.post<any>(this._url,user);
  }
}
