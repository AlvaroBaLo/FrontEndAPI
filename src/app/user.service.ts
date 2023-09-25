import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Esta url obtiene el listado de todos los empledaos en el backend.
  private baseURL = "http://localhost:8080/api/v1/users";



  constructor(private httpClient: HttpClient,private router: Router) { }

  //este metodo nos sirve para obtener los empleados
  obtenerListaDeUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  //guardar usuarios
  saveUserService(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,user);

  }
  //actualizar usuario
  getUserService(id: number, user: User): Observable<Object> {

    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  //eliminar usuario
  deleteUserService(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
  //encontrar por ID
  findByIdService(id: number): Observable<User> {
    const url = `${this.baseURL}/${id}`;
    return this.httpClient.get<User>(url);
  }
  //obtener solo un user
  obtenerUserService():Observable<User> {

    return this.httpClient.get<User>(`${this.baseURL}`);
  }
  //ir a index
  goIndexService() {
    this.router.navigate(['users']);
     }
  // actualizar usuario
 updateUserFormService(user: User, id: number): Observable<Object> {

  return this.httpClient.put(`${this.baseURL}/${id}`, user);
 }

}
