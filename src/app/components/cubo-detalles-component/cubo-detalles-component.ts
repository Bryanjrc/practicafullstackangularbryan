import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceTiendaCubos } from '../../services/service.tienda.cubos';

@Component({
  selector: 'app-cubo-detalles-component',
  standalone: false,
  styleUrl: './cubo-detalles-component.css',
  templateUrl: './cubo-detalles-component.html',
})
export class CuboDetallesComponent {
  @Input() cubo!: Cubo;

  @Output() seleccionarFavorito: EventEmitter<Cubo> =
    new EventEmitter<Cubo>();

    constructor(private _service: ServiceTiendaCubos){}

  marcarFavorito(): void {
    this.seleccionarFavorito.emit(this.cubo);
  }
  
  async comprarCubo(): Promise<void> {
    try {
      await this._service.insertarPedidoAsync(this.cubo.idCubo);
      alert("Pedido insertado correctamente");
    } catch (error) {
      console.error("Error al insertar el pedido:", error);
    }
  }

}
