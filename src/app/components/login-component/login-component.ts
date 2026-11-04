import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { ServiceAuthCubos } from '../../services/service.auth.cubos';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html'
})
export class LoginComponent {
  public email = '';
  public password = '';
  public mensaje = '';
  public cargando = false;

  constructor(
    private _service: ServiceAuthCubos,
    private _router: Router
  ) {}

  async loginUsuario(): Promise<void> {
    if (!this.email || !this.password) {
      this.mensaje = 'Introduce tu email y contraseña.';
      return;
    }

    this.cargando = true;
    this.mensaje = '';
    try {
      await this._service.loginUsuarioAsync(
        new Login(this.email, this.password)
      );
      await this._router.navigate(['/perfil']);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.mensaje = 'Error al iniciar sesión. Comprueba tus credenciales.';
    }
    this.cargando = false;
  }
}
