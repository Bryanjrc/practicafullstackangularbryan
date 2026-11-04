import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthCubos } from '../../services/service.auth.cubos';
import { ServiceTiendaCubos } from '../../services/service.tienda.cubos';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html'
})
export class MenuComponent implements OnInit {
  public marcas: string[] = [];

  constructor(
    private _service: ServiceTiendaCubos,
    private _serviceAuth: ServiceAuthCubos,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.marcas = await this._service.getMarcasAsync();
    } catch (error) {
      console.error('Error al cargar las marcas:', error);
    }
    this._cdr.detectChanges();
  }

  logout(): void {
    this._serviceAuth.logout();
    void this._router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('TOKEN') !== null;
  }
}
