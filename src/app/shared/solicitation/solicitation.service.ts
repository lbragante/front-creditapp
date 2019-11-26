import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Solicitation } from './solicitation';

@Injectable({
  providedIn: 'root'
})
export class SolicitationService {

  readonly url = 'http://localhost:3000/solicitations';

  constructor(private http: HttpClient) { }

  createSolicitation(solicitation: Solicitation): Observable<Solicitation> {
    return this.http.post<Solicitation>(`${this.url}/create`, solicitation);
  }

  getAllSolicitations(): Observable<Solicitation[]> {
    return this.http.get<Solicitation[]>(`${this.url}/list`)
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
