import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailmess',
  templateUrl: './detailmess.component.html',
  styleUrls: ['./detailmess.component.css']
})
export class DetailmessComponent implements OnInit {
  datas : any ;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


 
}
