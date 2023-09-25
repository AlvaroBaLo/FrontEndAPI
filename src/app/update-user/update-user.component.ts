import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ListaUsersComponent } from '../lista-users/lista-users.component';
import { ImplicitReceiver } from '@angular/compiler';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{


  roles:string[]=["INVITADO","SUPER ADMIN","ADMIN", "USER"];
  id: number;
  user: User = new User();
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.userService.findByIdService(this.id).subscribe((dato: any)=>{
      console.log(dato);
      this.user = dato;
    }, error => console.log(error));


  }
  updateUserForm(){
    this.userService.updateUserFormService(this.user, this.id).subscribe(dato =>{
      console.log(dato);
    }, error => console.log(error))
  }
  goToTheUserList(){

    this.router.navigate(['/users']);

  }
  saveUser() {
    this.userService.updateUserFormService(this.user, this.id).subscribe(dato => {
      console.log(dato);

    },error =>console.log(error));
  }

  onSubmit() {
    this.saveUser();

    this.goToTheUserList();

  }



}




