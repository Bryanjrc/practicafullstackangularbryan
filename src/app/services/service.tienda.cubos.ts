import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Cubo } from "../models/cubo";
import { firstValueFrom } from "rxjs";
import { HttpClient } from "@angular/common/http";

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

        return await firstValueFrom(
            this._http.get<Array<Cubo>>(this.urlApi + request)
        )
    }

    async getMarcasAsync(): Promise<Array<string>> {
        let request = "api/cubos/marcas";

        return await firstValueFrom(
            this._http.get<Array<string>>(this.urlApi + request)
        )
    }

    async getCubosPorMarcaAsync(marca: string): Promise<Array<Cubo>> {
        let request = "api/cubos/marca/" + marca;

        return await firstValueFrom(
            this._http.get<Array<Cubo>>(this.urlApi + request)
        )
    }
}