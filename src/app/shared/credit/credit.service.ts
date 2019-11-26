import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Credit } from './credit';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  readonly url = 'http://localhost:3000/credits';

  constructor(private http: HttpClient) { }

  createCreditsr(credit: Credit): Observable<Credit> {
    return this.http.post<Credit>(`${this.url}/list`, credit);
  }


  getAllCredits(): Observable<Credit[]> {
    return this.http.get<Credit[]>(`${this.url}/list`)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getOneCredit(id: string): Observable<Credit> {
    return this.http.get<Credit>(`${this.url}/one/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError));
    }


  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
