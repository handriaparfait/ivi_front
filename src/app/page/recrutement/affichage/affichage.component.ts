import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { RecrutementComponent } from '../recrutement.component';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { FormBuilder, Validators } from '@angular/forms'; 



declare var window:any;

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  candidateForm:any = [];


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private recrue: RecrutementComponent, private rout : ActivatedRoute, private router : Router) { 
    this.candidateForm = this.formBuilder.group({
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      email : ['', Validators.required],
      filename : ['', Validators.required],

    })
  }
  datas:any;
  donne : any = [];
  fenetre: any;
  displayStyle = "none";


  ngOnInit(): void {
     this.rout.paramMap.subscribe(params => {
        const id = +params.get('id')!;

        this.recrue.afficher(id).subscribe((valeur: any) =>{
            console.log(valeur.data);
            this.datas = valeur.data;
        });

        this.fenetre = new window.boostrap.Modal(
          document.getElementById("exampleModal")
        );


     });
     this.http.get('http://localhost:8000', { withCredentials: true}).subscribe((valeur:any)=>{
      this.donne = valeur;
      this.candidateForm.value = valeur.value
      console.log(this.candidateForm.value)
      
    })

  }
  
  fenetrepostuler() {
    this.displayStyle = "block";
  }
  closefenetre() {
    this.displayStyle = "none";
  }

  envoyer(){
    let data : any;
    if(this.donne.user.nom != null){
      data = {
        'nom' : this.candidateForm.nom = this.donne.user.nom,
        'prenom' : this.candidateForm.prenom = this.donne.user.prenom,
        'email' : this.candidateForm.email = this.donne.user.email,
        'filename' : this.candidateForm.value.filename
      }
      console.log(data)
      this.http.post('http://localhost:8000/candidature', data).subscribe((result: any)=>{
        this.router.navigate(['/admin']);
      })
    }else{
      this.http.post('http://localhost:8000/candidature', this.candidateForm.value).subscribe((result: any)=>{
        this.router.navigate(['/admin']);
      })
    }
    
    
  }

}
