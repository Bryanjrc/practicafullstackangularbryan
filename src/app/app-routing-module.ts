import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { CubosMarcaComponent } from './components/cubos-marca-component/cubos-marca-component';
import { RegistroUsuarioComponent } from './components/registro-usuario-component/registro-usuario-component';
import { HomeComponent } from './components/home-component/home-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cubosmarca/:marca", component: CubosMarcaComponent},
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
