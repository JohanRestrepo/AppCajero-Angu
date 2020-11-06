import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-resultado-exitoso',
  templateUrl: './resultado-exitoso.component.html',
  styleUrls: ['./resultado-exitoso.component.css']
})

export class ResultadoExitosoComponent implements OnInit {
  User: Usuario;
  constructor(private UserService: UsuarioService) { }

  getUsuarios(): void {
    this.User = this.UserService.getUsuarios();
  }

  ngOnInit(): void {
    this.getUsuarios(); 
  }

}
