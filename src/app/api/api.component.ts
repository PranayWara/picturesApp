import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  test : any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   let resp = this.http.get("http://localhost:8080/gcp/get-data");
   resp.subscribe((data)=>this.test=data);
  }

}
