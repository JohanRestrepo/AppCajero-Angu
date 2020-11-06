import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {
  User: Usuario;
  Options = [50, 100, 200, 400, 1000, 2000];

  constructor(private UserService: UsuarioService) { }

  getUsuarios(): void {
    this.User = this.UserService.getUsuarios();
  }

  Retiro(value): void{
    
  }

  ngOnInit(): void {
    this.getUsuarios(); 
  }

}
