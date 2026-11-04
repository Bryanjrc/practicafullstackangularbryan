import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Login } from '../models/login';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthCubos {
  private urlApi = environment.urlApi;
  public user = signal<Usuario | null>(null);

  constructor(private _http: HttpClient) {
    const token = sessionStorage.getItem('TOKEN');
    if (token) {
      void this.cargarPerfil().catch(() => this.logout());
    }
  }

  async loginUsuarioAsync(login: Login): Promise<void> {
    const response = await firstValueFrom(
      this._http.post<{ response?: string }>(
        this.urlApi + 'api/Manage/Login',
        login,
        { headers: new HttpHeaders().set('content-type', 'application/json') }
      )
    );

    if (!response.response) {
      throw new Error('La respuesta de autenticación no contiene un token.');
    }

    sessionStorage.setItem('TOKEN', response.response);
    try {
      await this.cargarPerfil();
    } catch (error) {
      this.logout();
      throw error;
    }
  }

  async cargarPerfil(): Promise<void> {
    const token = sessionStorage.getItem('TOKEN');
    if (!token) {
      this.user.set(null);
      return;
    }

    const perfil = await firstValueFrom(
      this._http.get<Usuario>(this.urlApi + 'api/Manage/PerfilUsuario')
    );
    this.user.set(perfil);
  }

  logout(): void {
    sessionStorage.removeItem('TOKEN');
    this.user.set(null);
  }
}
