import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devisadmin',
  templateUrl: './devisadmin.component.html',
  styleUrls: ['./devisadmin.component.css']
})
export class DevisadminComponent implements OnInit {
  donne : any;
  donnee : any;
  datas : any;
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

    this.http.get('http://localhost:8000/devis', { withCredentials: true}).subscribe((result: any)=>{
      this.datas = result.data;
      console.log(result);
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

  deleteMessage(id: any){
    this.http.delete('http://localhost:8000/devis/'+ id +'/delete').subscribe((result)=>{
      window.location.reload();
    });
    
  }

  affichermess(id : any){
    this.http.get('http://localhost:8000/devis/'+ id).subscribe((devis:any)=>{
        console.log(devis.data)
        this.donnee = devis.data;
    });
  }



}
