import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-consul-saldo',
  templateUrl: './consul-saldo.component.html',
  styleUrls: ['./consul-saldo.component.css']
})
export class ConsulSaldoComponent implements OnInit {
  User: Usuario;

  constructor(private UserService: UsuarioService) { }

  getUsuarios(): void {
    this.User = this.UserService.getUsuarios();
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

}
