import { Injectable } from '@angular/core';
import { IJob } from '../experiences/job';
import { HttpClient, HttpResponse} from '@angular/common/http'  
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private _url: string ='assets/json/jobs.json'

  constructor(private _http: HttpClient) { }

  getJobs(): Observable<IJob[]> {
    return this._http.get<IJob[]>(this._url);
  }
}
