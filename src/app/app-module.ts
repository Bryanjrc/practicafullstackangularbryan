import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { CuboDetallesComponent } from './components/cubo-detalles-component/cubo-detalles-component';
import { CubosMarcaComponent } from './components/cubos-marca-component/cubos-marca-component';
import { LoginComponent } from './components/login-component/login-component';
import { RegistroUsuarioComponent } from './components/registro-usuario-component/registro-usuario-component';
import { HomeComponent } from './components/home-component/home-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { authorizationInterceptor } from './interceptors/authorization-interceptor';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    CuboDetallesComponent,
    CubosMarcaComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    HomeComponent,
    PerfilComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authorizationInterceptor])),
    AuthGuard
  ],
  bootstrap: [App]
})
export class AppModule {}
