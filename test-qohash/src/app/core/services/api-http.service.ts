import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


@Injectable({
  providedIn: 'root'
})

export class ApiHttpService {


  private API_SERVER = "http://127.0.0.1:5000";

  constructor(

    private httpClient: HttpClient
  ) { }

  public getFoldersElements(){
    return this.httpClient.get(this.API_SERVER + "/folders", { 'headers': headers });
  }
}
