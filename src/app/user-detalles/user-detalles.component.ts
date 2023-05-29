
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-detalles',
  templateUrl: './user-detalles.component.html',
  styleUrls: ['./user-detalles.component.css']
})
export class UserDetallesComponent implements OnInit {

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
