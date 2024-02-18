import { Component } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms'; 
import { Router, UrlSerializer } from '@angular/router';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ivi_frontend';
  data : any;
  myItem :any;



  constructor(private http: HttpClient){}
  ngOnInit(header: HeaderComponent): void {
  

    this.http.get('http://localhost:8000', { withCredentials: true}).subscribe((valeur:any)=>{
      this.data = valeur;
      if(valeur.user === null){
        header.connectBoutton = false;
        header.userConnect = true;
        header.deconnectBoutton = false;
      }
    },
    (error: any) => {
      console.log(error)
    });
    localStorage.setItem("hasina", 'Angular');
    this.myItem = localStorage.getItem("hasina");
  }
}



