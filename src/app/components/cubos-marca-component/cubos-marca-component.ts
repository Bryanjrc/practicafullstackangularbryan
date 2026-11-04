import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceTiendaCubos } from '../../services/service.tienda.cubos';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cubos-marca-component',
  standalone: false,
  styleUrl: './cubos-marca-component.css',
  templateUrl: './cubos-marca-component.html',
})
export class CubosMarcaComponent implements OnInit {
  public cubos: Array<Cubo> = [];
  public marca: string = '';

  constructor(
    private _service: ServiceTiendaCubos,
    private _activeRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe(async (parametros: Params) => {
      if (parametros['marca'] != null)  {
        this.marca = parametros['marca'];
        this.cubos = await this._service.getCubosPorMarcaAsync(this.marca);
        this._cdr.detectChanges();
      }
    })
  }
}
