import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DetailmessComponent } from '../page/contact/detailmess/detailmess.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private contactservice: ContactService, private http: HttpClient, private router: Router) { }
  datas : any;
  donnee: any;
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
    })

  }

  deleteMessage(id: any){
    console.log(id);
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
