import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ServiceAuthCubos } from '../../services/service.auth.cubos';
import { ServiceTiendaCubos } from '../../services/service.tienda.cubos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit {

  public marcas: Array<string> = [];
  private _serviceAuth: ServiceAuthCubos = inject(ServiceAuthCubos);

  constructor(
    private _service: ServiceTiendaCubos,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) { }

  async ngOnInit(): Promise<void> {
    this.marcas = await this._service.getMarcasAsync();
    this._cdr.detectChanges();
  }

  logout(): void {
    this._serviceAuth.logout();
    this._router.navigate(['/login']);
  }
}
