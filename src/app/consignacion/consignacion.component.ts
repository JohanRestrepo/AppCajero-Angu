import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consignacion',
  templateUrl: './consignacion.component.html',
  styleUrls: ['./consignacion.component.css']
})
export class ConsignacionComponent implements OnInit {
  User: Usuario;
  Options = [50, 100, 200, 400, 1000, 2000];

  constructor(private UserService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.getUsuarios(); 
  }

  getUsuarios(): void {
    this.User = this.UserService.getUsuarios();
  }

  Consignacion(value): void{
      this.UserService.SetSaldo(value);
      this.router.navigateByUrl('/ResEx')
  }

}
