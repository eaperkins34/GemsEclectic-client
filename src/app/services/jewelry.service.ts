import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service' ;
import { catchError, map, tap} from 'rxjs/operators';


import { Jewelry } from '../models/jewelry-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class JewelryService {
  private dbURL = 'http://localhost:3000/jewelry';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getJewelry(): Observable<Jewelry[]> {
    return this.http.get<Jewelry[]>(this.dbURL + `/all`)
    .pipe(
      tap(_ => this.log('fetched jewelry')),
      catchError(this.handleError('getLocations', []))
    );
  }

  createJewelry(jewelry: Jewelry): Observable<Jewelry[]> {
    const url = `${this.dbURL}/create`;
    console.log(url);
    return this.http.post<Jewelry[]>(url, jewelry, httpOptions);
  }

  deleteJewelry(id: number): Observable<Jewelry> {
    const url = `${this.dbURL}/delete/${id}`;
    return this.http.delete<Jewelry>(url, httpOptions);
  }

  private log(message: string) {
    this.messageService.add(`JewelryService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
