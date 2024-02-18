import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  connectBoutton = true;
  deconnectBoutton = false;
  userConnect = false;

  constructor(private http: HttpClient, private router: Router) { }
  data : any;
  ngOnInit(): void {
    this.http.get('http://localhost:8000', { withCredentials: true}).subscribe((valeur:any)=>{
      if(valeur.user.name !== null){
        this.data = valeur;
        this.connectBoutton = false;
        this.deconnectBoutton = true;
        this.userConnect = true;
        
      };
    },
    (error: any) => {
      console.log(error)
    });
  }


  

  

}
