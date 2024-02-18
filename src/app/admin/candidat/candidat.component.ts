import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  donne : any;
  deconnectButton = true;

  constructor(private contactservice: ContactService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000', { withCredentials: true}).subscribe((valeur:any)=>{
      if(valeur.user === null){
        this.router.navigate(['auth']);
        alert('Accès non autorisé, veuillez vous connecter')
      }
    },
    (error: any) => {
      console.log(error)
    });


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
  }
  logout(){
    this.http.get('http://localhost:8000/logout', { withCredentials: true}).subscribe((retour:any)=>{
      this.router.navigate(['/auth']);
      this.deconnectButton = false;
    })
  }

}
