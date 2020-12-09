import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<any> {
    return this.http.get(`${environment.uri}/restaurants/${localStorage.getItem('userId')}`);
  }

  getUserInfo(): Observable<any> {
    return this.http.get(`${environment.uri}/profile/${localStorage.getItem('userId')}`);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  role(): String {
    return localStorage.getItem('role');
  }
}
