import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  data : any;

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8000';

  
  
  signin(user:any,encore:any, header: any){
    const headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    const json = JSON.stringify(user);
    return this.http.post(this.url+'/login', json, {headers :headers})
      .pipe(map((res :any ) => res))  
  }


}
