import { Injectable } from '@angular/core';
import { Usuario } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  user: Usuario = {
    id: 1,
    name: 'Windstorm el magnifico',
    saldo: 10000
  };
  constructor() { }

  getUsuarios(): Usuario {
    return this.user;
  }

  setSaldo(numero): void{
    this.user.saldo= this.user.saldo - numero
  }

}
