import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-resultado-fallido',
  templateUrl: './resultado-fallido.component.html',
  styleUrls: ['./resultado-fallido.component.css']
})
export class ResultadoFallidoComponent implements OnInit {
  User: Usuario;
  constructor(private UserService: UsuarioService) { }

  getUsuarios(): void {
    this.User = this.UserService.getUsuarios();
  }

  ngOnInit(): void {
    this.getUsuarios(); 
  }

}
