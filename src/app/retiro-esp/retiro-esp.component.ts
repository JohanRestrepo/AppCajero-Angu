import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-retiro-esp',
  templateUrl: './retiro-esp.component.html',
  styleUrls: ['./retiro-esp.component.css']
})
export class RetiroEspComponent implements OnInit {
  User: Usuario;
  noValue= false;
  noNumero= false;
  constructor(private UserService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.getUsuarios(); 
  }

  Retiro(value): void{
    if (value) {
      if(isNaN(value)){
        this.noNumero= true;
        this.noValue= false;
      }
      else{
        if(value <= this.User.saldo){
          this.UserService.RetirarSaldo(value);
          this.router.navigateByUrl('/ResEx');
        }
        else{
          this.router.navigateByUrl('/ResFail');
        }
      }
    }
    else{
      this.noValue= true;
    }
  }

  getUsuarios(): void {
    this.User = this.UserService.getUsuarios();
  }

}
