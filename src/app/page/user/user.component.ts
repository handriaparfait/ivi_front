import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  donne : any;
  datas :any;
  deconnectButton = true;
  constructor(private contactservice : ContactService, private http: HttpClient,private router: Router, private location : Location){

  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000', { withCredentials: true}).subscribe((valeur:any)=>{
      if(valeur.user === null){
        this.router.navigate(['auth']);
        alert('Vous devez vous connecter ou vous inscrire')
      }
      this.donne = valeur;
      console.log(valeur);
    },
    (error: any) => {
      console.log(error)
    });
    this.contactservice.getMessage().subscribe((result: any)=>{
      this.datas = result.data;
      console.log(result);
    })
  }


  logout(){
    this.http.get('http://localhost:8000/logout', { withCredentials: true}).subscribe((retour:any)=>{
      this.router.navigate(['/auth']);
      this.deconnectButton = false;
    })
  }





}
