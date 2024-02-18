import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.css']
})
export class RecrutementComponent implements OnInit {

  datas: any = [];
  data :any = [];
  liste : any = [];
  constructor( private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { 
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/recrutement/').subscribe(result =>{
      this.datas = result; 
      this.data = this.datas.data 
      //console.log(this.data)
      for(let i = 0; i < this.data.length; i++){
        
        if(this.data[i].validation == true){
          //console.log(this.data[i])
          this.liste[i] = this.data[i]
        }
      }
      console.log(this.liste)



    })
  }

  afficher(id: any){
    return this.http.get('http://localhost:8000/recrutement/' + id)
  }

}
