import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ServiceTiendaCubos } from '../../services/service.tienda.cubos';
import { Login } from '../../models/login';
import { ServiceAuthCubos } from '../../services/service.auth.cubos';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent implements OnInit {
  private _serviceAuth: ServiceAuthCubos = 
    inject(ServiceAuthCubos);
  @ViewChild("cajauser") cajaUser!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;
  public mensaje!: string;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceTiendaCubos
  ){}



  ngOnInit(): void {
    
  }
}