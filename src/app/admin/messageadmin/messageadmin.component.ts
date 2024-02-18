import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-messageadmin',
  templateUrl: './messageadmin.component.html',
  styleUrls: ['./messageadmin.component.css']
})
export class MessageadminComponent implements OnInit {
  donne : any;
  deconnectButton = true;
  datas : any;
  donnee: any;
  constructor(private contactservice: ContactService,private http: HttpClient, private router: Router) { }

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
  
    this.contactservice.getMessage().subscribe((result: any)=>{
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
    this.http.delete('http://localhost:8000/contact/'+ id +'/delete').subscribe((result)=>{
      window.location.reload();
    });
    
  }

  affichermess(id : any){
    this.http.get('http://localhost:8000/contact/'+ id).subscribe((mess:any)=>{
        console.log(mess.data)
        this.donnee = mess.data;
    });
  }
}
