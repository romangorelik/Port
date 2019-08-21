import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PullDataService {

  constructor(private http: HttpClient) { }

  getBigOData():Observable<any> {
    return this.http.get<any>('http://localhost:3000/bigO');
  }

  postBigOData(storyTitle: String, storyText: String):Observable<any> {
    return this.http.post<any>('http://localhost:3000/bigO', {title: storyTitle, text: storyText});
  }
}
