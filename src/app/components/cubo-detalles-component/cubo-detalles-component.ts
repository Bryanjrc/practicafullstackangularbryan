import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cubo } from '../../models/cubo';
import { ServiceTiendaCubos } from '../../services/service.tienda.cubos';

@Component({
  selector: 'app-cubo-detalles-component',
  standalone: false,
  styleUrl: './cubo-detalles-component.css',
  templateUrl: './cubo-detalles-component.html'
})
export class CuboDetallesComponent implements OnInit {
  public cubo!: Cubo;
  public mensaje = '';

  constructor(
    private _service: ServiceTiendaCubos,
    private _route: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      const idCubo = Number(params.get('idCubo'));
      if (idCubo > 0) {
        void this.cargarCubo(idCubo);
      }
    });
  }

  private async cargarCubo(idCubo: number): Promise<void> {
    try {
      this.cubo = await this._service.getCuboAsync(idCubo);
    } catch (error) {
      console.error('Error al cargar el cubo:', error);
      this.mensaje = 'No se ha podido cargar el cubo.';
    }
    this._cdr.detectChanges();
  }
}
