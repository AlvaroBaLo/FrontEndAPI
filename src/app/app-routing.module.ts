import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsersComponent } from './lista-users/lista-users.component';
import { SaveUserComponent } from './save-user/save-user.component';
import { UserDetallesComponent } from './user-detalles/user-detalles.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ForumComponent } from './forum/forum.component';
import { LoginUserComponent } from './login-user/login-user.component';

const routes: Routes = [
  { path: "users", component: ListaUsersComponent },
  { path: "", redirectTo: "users", pathMatch: "full" },
  { path: "save-user", component: SaveUserComponent },
  { path: "update-user/:id", component: UpdateUserComponent },
  { path: "user-details/:id", component: UserDetallesComponent },
  { path: "forum", component: ForumComponent },
  { path: "login-user", component: LoginUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
