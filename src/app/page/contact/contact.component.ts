import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { FormBuilder, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Expose-Headers':'GET, POST, OPTIONS'
  })
};


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  addForm:any = [];

  constructor(private contactservice: ContactService, private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { 
      this.addForm = this.formBuilder.group({
        nom : ['', Validators.required],
        email : ['', Validators.required],
        telephone : ['', Validators.required],
        message : ['', Validators.required],

      })

  }

  ngOnInit(): void {
  }
  Envoyer(){   
    console.log(this.addForm.value); 
    this.http.post('http://localhost:8000/contact/create', this.addForm.value).subscribe((result)=>{
      console.log(result)
      this.router.navigate(['/contact']);
    })
    
  }

}
