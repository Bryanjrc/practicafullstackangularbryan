import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Cubo } from "../models/cubo";
import { firstValueFrom } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Compra } from "../models/compra";

@Injectable()

export class ServiceTiendaCubos {
    private urlApi: string;

    constructor(
        private _http: HttpClient
    ) {
        this.urlApi = environment.urlApi;
    }

    async getCubosAsync(): Promise<Array<Cubo>> {
        let request = "api/cubos";

        return firstValueFrom(
            this._http.get<Array<Cubo>>(this.urlApi + request)
        )
    }
    
    async getCuboAsync(idCubo: number): Promise<Cubo> {
        let request = "api/cubos/" + idCubo;

        return firstValueFrom(
            this._http.get<Cubo>(this.urlApi + request)
        )
    }

    async getMarcasAsync(): Promise<Array<string>> {
        let request = "api/cubos/marcas";

        return firstValueFrom(
            this._http.get<Array<string>>(this.urlApi + request)
        )
    }

    async getCubosPorMarcaAsync(marca: string): Promise<Array<Cubo>> {
        let request = "api/cubos/cubosmarca/" + marca;

        return firstValueFrom(
            this._http.get<Array<Cubo>>(this.urlApi + request)
        )
    }

    async getComprasUsuarioAsync(): Promise<Compra[]> {
        let request = "api/compra/comprausuario";

        return firstValueFrom(
            this._http.get<Compra[]>(this.urlApi + request)
        )
    }

    async insertarPedidoAsync(idCubo: number): Promise<any> {
        let request = "api/compra/insertarpedido/" + idCubo;

        return firstValueFrom(
            this._http.post(this.urlApi + request, {})
        )
    }
}