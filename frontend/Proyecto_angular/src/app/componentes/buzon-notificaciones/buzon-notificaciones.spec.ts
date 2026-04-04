import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzonNotificaciones } from './buzon-notificaciones';

describe('BuzonNotificaciones', () => {
  let component: BuzonNotificaciones;
  let fixture: ComponentFixture<BuzonNotificaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuzonNotificaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuzonNotificaciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
