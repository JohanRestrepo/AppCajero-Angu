import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-manu-princi',
  templateUrl: './manu-princi.component.html',
  styleUrls: ['./manu-princi.component.css']
})
export class ManuPrinciComponent implements OnInit {
  User: Usuario;

  constructor(private UserService: UsuarioService) { }

  getUsuarios(): void {
    this.User = this.UserService.getUsuarios();
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

}
