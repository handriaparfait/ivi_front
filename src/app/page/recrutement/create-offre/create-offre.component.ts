import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html',
  styleUrls: ['./create-offre.component.css']
})
export class CreateOffreComponent implements OnInit {
  recruteForm:any = [];
  datas: any = [];

  constructor( private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    this.recruteForm = this.formBuilder.group({
      titre : ['', Validators.required],
      description : ['', Validators.required]

    })

}

  ngOnInit(): void {
    this.http.get('http://localhost:8000', { withCredentials: true}).subscribe((valeur:any)=>{
      if(valeur.user === null){
        this.router.navigate(['auth']);
        alert('Vous devez vous connecter ou vous inscrire')
      }
    },
    (error: any) => {
      console.log(error)
    });
  }
  creer(){
    console.log(this.recruteForm.value); 
    this.http.post('http://localhost:8000/recrutement/create', this.recruteForm.value, {withCredentials : true}).subscribe((result:any)=>{
      console.log(result)
      this.router.navigate(['/recrutement']);
    })
  }
}
