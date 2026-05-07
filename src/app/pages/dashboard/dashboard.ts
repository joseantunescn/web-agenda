import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  nomeUsuario = signal<string>('');
  perfilUsuario = signal<string>('');
  ngOnInit() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario') as string);

    this.nomeUsuario.set(usuario.nome);
    this.perfilUsuario.set(usuario.perfil);
  }

  logout() {
    if(confirm('Deseja realmente sair?')) {
      sessionStorage.removeItem('usuario');
      location.href = '/autenticar';
    }
  }
}
