import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from '../../app-module';
import { CubosMarcaComponent } from './cubos-marca-component';
import { ServiceTiendaCubos } from '../../services/service.tienda.cubos';

describe('CubosMarcaComponent', () => {
  let component: CubosMarcaComponent;
  let fixture: ComponentFixture<CubosMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [CubosMarcaComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ActivatedRoute, useValue: { params: { subscribe: vi.fn() } } },
        { provide: ServiceTiendaCubos, useValue: { getCubosMarca: vi.fn() } }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CubosMarcaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
