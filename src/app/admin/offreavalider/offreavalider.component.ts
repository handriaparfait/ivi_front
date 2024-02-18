import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { HttpClient } from '@angular/common/http';
import { RecrutementComponent } from '../../../app/page/recrutement/recrutement.component';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-offreavalider',
  templateUrl: './offreavalider.component.html',
  styleUrls: ['./offreavalider.component.css']
})
export class OffreavaliderComponent implements OnInit {
  datas : any = [];
  donne : any;
  data :any = [];
  liste : any = [];
  deconnectButton = true;
  constructor(private contactservice: ContactService, private router: Router,private formBuilder: FormBuilder, private http: HttpClient, private recrue: RecrutementComponent, private rout : ActivatedRoute) { }

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

          this.http.get('http://localhost:8000/recrutement/').subscribe((result) =>{
            this.datas = result; 
            this.data = this.datas.data 
      
            for(let i = 0; i < this.data.length; i++){
              
              if(this.data[i].validation == false){
                console.log(this.data[i]);
                this.liste[i] = this.data[i]

                
                
                
                
                
                /*this.donnes =  {
                  'id' : result.data[i].id,
                  'Titre' : result.data[i].Titre,
                  'Description' : result.data[i].Description,
                  'dateCreationAt' : result.data[i].dateCreationAt,
                }*/
              }
              
            }
            
      
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

  valider(id :any){
      this.http.post('http://localhost:8000/validation/admin/recrutement/'+id,  '').subscribe((result: any)=>{
    
        console.log(result);
        this.router.navigate(['/recrutement']);

    });

    console.log(id);
  }
  logout(){
    this.http.get('http://localhost:8000/logout', { withCredentials: true}).subscribe((retour:any)=>{
      this.router.navigate(['/auth']);
      this.deconnectButton = false;
    })
  
  }

}
