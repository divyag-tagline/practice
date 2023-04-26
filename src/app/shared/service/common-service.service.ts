import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Details{
  userId:number,
  id:number,
  title:string,
  body:string
}

export interface Cols{
  field:string,
  header:string
}


@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Divya');
  videoEmit = new ReplaySubject<string>(3,5000);
  asyncVideoEmit = new AsyncSubject<string>();

  constructor(private http:HttpClient) {}

  getDetails():Observable<any> {
      return this.http.get<any>(`${environment.baseURL}/posts`);
  }
}
