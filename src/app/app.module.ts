import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsersComponent } from './lista-users/lista-users.component';
import {HttpClientModule} from '@angular/common/http';
import { SaveUserComponent } from './save-user/save-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetallesComponent } from './user-detalles/user-detalles.component';
import { ForumComponent } from './forum/forum.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsersComponent,
    SaveUserComponent,
    UpdateUserComponent,
    UserDetallesComponent,
    ForumComponent,
    LoginUserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
