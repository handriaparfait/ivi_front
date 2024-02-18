import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { UserService } from 'src/app/user.service';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  connectForm:any = [];
  data : any;
  status :any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router : Router, private location :Location, private user : UserService) {

    this.connectForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required],
      gethash : ['',],
      remember_me : ['',]

    })

   }

  ngOnInit(): void {
    this.http.get('http://localhost:8000', { withCredentials: true}).subscribe((valeur:any)=>{
      if(valeur.user !== null){
        this.router.navigate(['/user']);
        alert('Vous êtes déjà connecter');
      }
      else
      {
        this.http.get('http://localhost:8000/login', { withCredentials: true}).subscribe((valeur:any)=>{
            this.data = valeur;
            console.log(this.data);
        },
        (error: any) => {
          console.log(error);
          alert(error)
        });
      }
    })    
  }

  /*se_connecter(){

    this.user.signin(this.connectForm.value, [],{ withCredentials : true}).subscribe((reponse: any) =>{

      console.log(reponse.value);

      this.status = reponse.status;
      if(reponse.status != "success"){
        this.status == 'error'
      }      
    })
  }*/


  se_connecter(){

    this.http.post('http://localhost:8000/login', this.connectForm.value, {withCredentials : true}).subscribe((reponse: any) =>{
      this.status = reponse.status;
      if(reponse.status != "success"){
        this.status == 'error'
      }  
      this.router.navigate(['/user']);  
    })
  }

}
