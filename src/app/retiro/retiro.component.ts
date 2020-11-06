import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {
  User: Usuario;
  Options = [50, 100, 200, 400, 1000, 2000];

  constructor(private UserService: UsuarioService, private router: Router) { }

  getUsuarios(): void {
    this.User = this.UserService.getUsuarios();
  }

  Retiro(value): void{
    if(value <= this.User.saldo){
      this.UserService.setSaldo(value);
      this.router.navigateByUrl('/ResEx')
    }
    else{

    }
  }

  ngOnInit(): void {
    this.getUsuarios(); 
  }

}
