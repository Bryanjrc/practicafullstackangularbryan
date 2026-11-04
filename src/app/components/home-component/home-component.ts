import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceTiendaCubos } from '../../services/service.tienda.cubos';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html'
})
export class HomeComponent implements OnInit {
  public cubos: Cubo[] = [];

  constructor(
    private _service: ServiceTiendaCubos,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.cubos = await this._service.getCubosAsync();
    } catch (error) {
      console.error('Error al cargar los cubos:', error);
    }
    this._cdr.detectChanges();
  }
}
