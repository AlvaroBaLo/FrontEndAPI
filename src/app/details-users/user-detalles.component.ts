
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-detalles',
  templateUrl: './user-detalles.component.html',
  styleUrls: ['./user-detalles.component.css']
})
export class UserDetallesComponent implements OnInit {

  id: number;
  user: User;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.userService.findById(this.id).subscribe((dato: any)=>{
      console.log(dato);
      this.user = dato;
    }, error => console.log(error));
  
    this.userService.obtenerListaDeUsers();

    this.userService.obtenerUser();
    
   
  }

}
