import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consignacion-esp',
  templateUrl: './consignacion-esp.component.html',
  styleUrls: ['./consignacion-esp.component.css']
})
export class ConsignacionEspComponent implements OnInit {
  User: Usuario;
  noValue= false;
  noNumero= false;

  constructor(private UserService: UsuarioService, private router: Router) { }

  getUsuarios(): void {
    this.User = this.UserService.getUsuarios();
  }

  Consignacion(value): void{
    if (value) {
      if(isNaN(value)){
        this.noNumero= true;
        this.noValue= false;
      }
      else{
        this.UserService.SetSaldo(parseInt(value, 10));
        this.router.navigateByUrl('/ResEx');
      }
    }
    else{
      this.noValue= true;
    }
}

  ngOnInit(): void {
    this.getUsuarios(); 
  }

}
