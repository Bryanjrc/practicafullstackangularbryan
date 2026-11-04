import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { CubosMarcaComponent } from './components/cubos-marca-component/cubos-marca-component';
import { RegistroUsuarioComponent } from './components/registro-usuario-component/registro-usuario-component';
import { HomeComponent } from './components/home-component/home-component';
import { CuboDetallesComponent } from './components/cubo-detalles-component/cubo-detalles-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cubosmarca/:marca', component: CubosMarcaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'cubos/:idCubo', component: CuboDetallesComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
