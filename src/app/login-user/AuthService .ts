import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  setToken(token: any) {
    throw new Error('Method not implemented.');
  }
  private loginUrl = 'http://localhost:4200/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(this.loginUrl, { username, password });
  }
  
}
