import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, GuardResult, MaybeAsync } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): MaybeAsync<GuardResult> {
        if (sessionStorage.getItem('TOKEN')) {
            // Usuario autenticado, le dejamos pasar a la ruta
            return true;
        } else {
            // Usuario no autenticado, lo llevamos al login
            return this._router.createUrlTree(['/login'], {
                queryParams: { returnUrl: state.url }
            });
        }
    }
}