import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfilbody } from './perfil-componentes';

describe('Perfilheader', () => {
  let component: Perfilbody;
  let fixture: ComponentFixture<Perfilbody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perfilbody],
    }).compileComponents();

    fixture = TestBed.createComponent(Perfilbody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
