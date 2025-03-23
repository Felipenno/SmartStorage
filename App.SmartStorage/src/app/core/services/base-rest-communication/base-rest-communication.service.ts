import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseRestCommunicationService {

  constructor(private httpClient : HttpClient) { }

  private readonly baseUrl = '';

  get<Res>(endPointUrl: string, params: string): Observable<Res>{
    return this.httpClient.get<Res>(this.baseUrl + endPointUrl + params);
  }

  post<Res, Req>(endPointUrl: string, model: Req): Observable<Res>{
    return this.httpClient.post<Res>(this.baseUrl + endPointUrl, model);
  }

  put<Res, Req>(endPointUrl: string, model: Req): Observable<Res>{
    return this.httpClient.post<Res>(this.baseUrl + endPointUrl, model);
  }

  getById<Res>(endPointUrl: string, routeId: number): Observable<Res>{
    return this.httpClient.get<Res>(this.baseUrl + endPointUrl + '/' + routeId);
  }
}
