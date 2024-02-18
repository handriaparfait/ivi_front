import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { FormBuilder, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  devisForm: any = [];
  constructor(private contactservice: ContactService, private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.devisForm = this.formBuilder.group({
      nom : ['', Validators.required],
      email : ['', Validators.required],
      telephone : ['', Validators.required],
      scales : ['', Validators.required],
      appercu : ['', Validators.required],
      comment : ['', Validators.required],

    })
  }

  Envoyer(){   
    console.log(this.devisForm.value); 
    this.http.post('http://localhost:8000/devis/create', this.devisForm.value).subscribe((result)=>{
      console.log(result)
      window.location.reload();
    })
    
  }

}
