import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent {

  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {

  }
  passwordValidate(){
    if (this.user.password!=this.user.password_confirm){
      document.write("Las contraseñas no coinciden.")
    }
  }
  saveUser() {
    this.userService.saveUserService(this.user).subscribe(dato => {
      console.log(dato);

    },error =>console.log(error));
  }

  goToTheUserList(){
    this.router.navigate(["/users"])
  }


  onSubmit() {
    this.saveUser();
  }



}
