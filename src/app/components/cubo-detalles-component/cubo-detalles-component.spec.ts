import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuboDetallesComponent } from './cubo-detalles-component';

describe('CuboDetallesComponent', () => {
  let component: CuboDetallesComponent;
  let fixture: ComponentFixture<CuboDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuboDetallesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CuboDetallesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
