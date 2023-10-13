import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  apiURL = "https://marco-service-marcot132.cloud.okteto.net/"

  proxyURL = "https://marco-service-marcot132.cloud.okteto.net/proxy-size"

  hoursURL = "https://marco-service-marcot132.cloud.okteto.net/dev-size"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getMedia(): Observable<any> {
    return this.http.get<any>(this.apiURL + this.proxyURL, this.httpOptions)
    .pipe(
      retry(),
      catchError(this.handleError))
  }

  getHours(): Observable<any> {
    return this.http.get<any>(this.apiURL + this.hoursURL, this.httpOptions)
    .pipe(
      retry(),
      catchError(this.handleError))
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      // Get client side error
      errorMessage = error.error.errorMessage;
    } else {
      // Get server-side error
      errorMessage = `Error code: ${error.status}\n message: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}