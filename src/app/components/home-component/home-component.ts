import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceTiendaCubos } from '../../services/service.tienda.cubos';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {
  public cubos: Array<Cubo> = [];
  public cuboFavorito!: Cubo;

  constructor(
    private _service: ServiceTiendaCubos,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this.cubos = await this._service.getCubosAsync();
    this._cdr.detectChanges();
  }

  seleccionarCuboFavorito(cubo: Cubo): void {
    this.cuboFavorito = cubo;
    this._cdr.detectChanges();
  }

}
