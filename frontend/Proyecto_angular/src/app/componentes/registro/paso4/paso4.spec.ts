import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paso4 } from './paso4';

describe('Paso4', () => {
  let component: Paso4;
  let fixture: ComponentFixture<Paso4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso4]
    }).compileComponents();

    fixture = TestBed.createComponent(Paso4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle a genre selection', () => {
    const initialStatus = component.generos[0].seleccionado;
    component.toggleGenero(0);
    expect(component.generos[0].seleccionado).toBe(!initialStatus);
  });
});