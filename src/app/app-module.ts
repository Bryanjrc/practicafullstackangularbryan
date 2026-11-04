import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { CuboDetallesComponent } from './components/cubo-detalles-component/cubo-detalles-component';
import { CubosMarcaComponent } from './components/cubos-marca-component/cubos-marca-component';
import { LoginComponent } from './components/login-component/login-component';
import { RegistroUsuarioComponent } from './components/registro-usuario-component/registro-usuario-component';
import { ServiceAuthCubos } from './services/service.auth.cubos';
import { ServiceTiendaCubos } from './services/service.tienda.cubos';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home-component/home-component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    CuboDetallesComponent,
    CubosMarcaComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    AuthGuard,
    ServiceAuthCubos,
    ServiceTiendaCubos,
  ],
  bootstrap: [App],
})
export class AppModule {}
