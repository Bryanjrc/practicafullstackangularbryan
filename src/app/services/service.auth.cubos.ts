import { Injectable, signal } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Usuario } from "../models/usuario";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Login } from "../models/login";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ServiceAuthCubos {
    private urlApi: string = environment.urlApi;

    public user = signal<Usuario | null>(null);
    
    constructor(
        private _http: HttpClient
    ) {}

    //LOGIN Y GUARDAR TOKEN
    async loginUsuarioAsync(login: Login): Promise<void> {
        let request = "api/manager/login";
        let json = JSON.stringify(login);
        let header = new HttpHeaders().set("content-type", "application/json");

        let response: any = await firstValueFrom(
            this._http.post(this.urlApi + request, json, { headers: header })
        )

        //Guardamos TOKEN
        sessionStorage.setItem("TOKEN", response.response);

        await this.cargarPerfil();
    }

    async cargarPerfil(): Promise<void> {
        let request = "api/manage/perfilusuario";
        let token = sessionStorage.getItem("TOKEN");
        let header = new HttpHeaders().set("Authorization", "bearer " + token);

        let perfil = await firstValueFrom(
            this._http.get<Usuario>(this.urlApi + request, { headers: header })
        )

        this.user.set(perfil);
    }

    logout(): void {
        sessionStorage.removeItem("TOKEN");
        this.user.set(null);
    }
}