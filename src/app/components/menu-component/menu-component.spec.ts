import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppModule } from '../../app-module';
import { MenuComponent } from './menu-component';
import { Router } from '@angular/router';
import { ServiceAuthCubos } from '../../services/service.auth.cubos';
import { ServiceTiendaCubos } from '../../services/service.tienda.cubos';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [MenuComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ServiceTiendaCubos, useValue: { getMarcasAsync: vi.fn() } },
        { provide: ServiceAuthCubos, useValue: { logout: vi.fn() } },
        { provide: Router, useValue: { navigate: vi.fn() } }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
