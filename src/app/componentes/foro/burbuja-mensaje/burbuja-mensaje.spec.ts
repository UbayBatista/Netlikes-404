import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BurbujaMensaje } from './burbuja-mensaje';

describe('BurbujaMensaje', () => {
  let component: BurbujaMensaje;
  let fixture: ComponentFixture<BurbujaMensaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurbujaMensaje]
    }).compileComponents();

    fixture = TestBed.createComponent(BurbujaMensaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});