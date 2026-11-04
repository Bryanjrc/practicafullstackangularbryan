import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceAuthCubos } from '../../services/service.auth.cubos';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html'
})
export class PerfilComponent implements OnInit {
  public usuario: Usuario | null = null;
  public mensaje = '';

  constructor(
    private _service: ServiceAuthCubos,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      await this._service.cargarPerfil();
      this.usuario = this._service.user();
    } catch (error) {
      console.error('Error al cargar el perfil:', error);
      this.mensaje = 'No se ha podido cargar el perfil.';
    }
    this._cdr.detectChanges();
  }
}
