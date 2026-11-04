import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from '../../app-module';
import { CuboDetallesComponent } from './cubo-detalles-component';
import { ServiceTiendaCubos } from '../../services/service.tienda.cubos';

describe('CuboDetallesComponent', () => {
  let component: CuboDetallesComponent;
  let fixture: ComponentFixture<CuboDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [CuboDetallesComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: { subscribe: vi.fn() } } },
        { provide: ServiceTiendaCubos, useValue: { getCuboAsync: vi.fn() } }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CuboDetallesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
