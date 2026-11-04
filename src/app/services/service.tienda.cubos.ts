import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Compra } from '../models/compra';
import { Cubo } from '../models/cubo';

@Injectable({
  providedIn: 'root'
})
export class ServiceTiendaCubos {
  private urlApi = environment.urlApi;

  constructor(private _http: HttpClient) {}

  getCubosAsync(): Promise<Cubo[]> {
    return firstValueFrom(this._http.get<Cubo[]>(this.urlApi + 'api/cubos'));
  }

  getCuboAsync(idCubo: number): Promise<Cubo> {
    return firstValueFrom(this._http.get<Cubo>(this.urlApi + 'api/cubos/' + idCubo));
  }

  getMarcasAsync(): Promise<string[]> {
    return firstValueFrom(this._http.get<string[]>(this.urlApi + 'api/cubos/marcas'));
  }

  getCubosPorMarcaAsync(marca: string): Promise<Cubo[]> {
    return firstValueFrom(
      this._http.get<Cubo[]>(this.urlApi + 'api/cubos/cubosmarca/' + marca)
    );
  }

  getComprasUsuarioAsync(): Promise<Compra[]> {
    return firstValueFrom(
      this._http.get<Compra[]>(this.urlApi + 'api/compra/comprausuario')
    );
  }

  insertarPedidoAsync(idCubo: number): Promise<any> {
    return firstValueFrom(
      this._http.post(this.urlApi + 'api/compra/insertarpedido/' + idCubo, {})
    );
  }
}
