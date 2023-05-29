import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.css']
})
export class ListaUsersComponent {
  users: User[];

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers() {
    this.userService.obtenerListaDeUsers().subscribe(response => { this.users = response });
  }
  //actualizar usuario
   updateUser(id:number) {
    this.router.navigate(["update-user", id])
  }
   deleteUser(id: number) {
    this.userService.deleteUserService(id).subscribe(dato => { console.log(dato) ;
    this.getUsers();
  })
  }
  //ver detalles del usuario
   showDetailsUser(id:number) {
    this.router.navigate(["user-details", id])
  }
 
}
