import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cubo } from '../../models/cubo';

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

  marcarFavorito(): void {
    this.seleccionarFavorito.emit(this.cubo);
  }
}
