import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';


@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) {}

    Url: string = 'http://localhost:8000';

   getMessage(){
    return this.http.get<Contact[]>(this.Url+ '/admin');
   }  



}
