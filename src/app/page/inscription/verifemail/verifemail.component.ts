import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-verifemail',
  templateUrl: './verifemail.component.html',
  styleUrls: ['./verifemail.component.css']
})
export class VerifemailComponent implements OnInit {
  data : any;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8000/verify/email', {withCredentials: true}).subscribe((valeur:any)=>{
      this.data = valeur;
    },
    (error: any) => {
      console.log(error)
    });


  }

}
