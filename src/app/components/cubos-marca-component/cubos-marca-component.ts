import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from '../../models/cubo';
import { ServiceTiendaCubos } from '../../services/service.tienda.cubos';

@Component({
  selector: 'app-cubos-marca-component',
  standalone: false,
  styleUrl: './cubos-marca-component.css',
  templateUrl: './cubos-marca-component.html'
})
export class CubosMarcaComponent implements OnInit {
  public cubos: Cubo[] = [];
  public marca = '';

  constructor(
    private _service: ServiceTiendaCubos,
    private _route: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      const marca = params['marca'];
      if (marca) {
        this.marca = marca;
        void this.cargarCubos();
      }
    });
  }

  private async cargarCubos(): Promise<void> {
    try {
      this.cubos = await this._service.getCubosPorMarcaAsync(this.marca);
    } catch (error) {
      console.error('Error al cargar los cubos de la marca:', error);
    }
    this._cdr.detectChanges();
  }
}
