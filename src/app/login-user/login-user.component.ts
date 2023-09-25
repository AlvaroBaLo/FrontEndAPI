import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { AuthService } from './AuthService ';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit{
  
  user: string;
  password: string;
  errorMessage: string;
  router: any;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.authService.login(this.user, this.password)
      .subscribe(
        response => {
          // Si la respuesta es exitosa, redireccionar a la página principal
          
          this.router.navigate(['/users']);
        },
        error => {
          // Si hay un error, mostrar el mensaje de error
          this.errorMessage = error.error.message;
        }
      );
  }
}
