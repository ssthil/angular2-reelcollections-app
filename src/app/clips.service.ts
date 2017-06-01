import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ClipsService {

  url:string;
  //https://jsonplaceholder.typicode.com/posts

  constructor(private http: Http) { 
    this.url ="http://demo7909896.mockable.io/";
  }

  readAll(): Observable<any[]> {
    return this.http.get(this.url)
      .map(response => response.json());
  }
}
