import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { FormBuilder, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common'
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  addForm:any = [];
  public status : any;
  constructor(private location: Location, private contactservice: ContactService, private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { 
    this.addForm = this.formBuilder.group({
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      

    })

}

  ngOnInit(): void {
    this.http.get('http://localhost:8000', { withCredentials: true}).subscribe((valeur:any)=>{
      if(valeur.user !== null){
        this.router.navigate(['']);
        alert('Vous êtes déjà connecter');
      }
    })
  }

  inscription(){
    this.http.post('http://localhost:8000/register',this.addForm.value, {withCredentials: true}).subscribe((Response:any) =>{
      this.status = Response.status;
      if(this.status != 'success'){
        this.status = 'error';
      }
    });
  }
}
