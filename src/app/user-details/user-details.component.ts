import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  id: number;
  user: User;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.userService.findByIdService(this.id).subscribe((dato: any)=>{
      console.log(dato);
      this.user = dato;
    }, error => console.log(error));
   
    
  }
  onSubmit() {
    this.userService.goIndexService();
    
  }
}

