import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfilheader } from './perfil-header';

describe('Perfilheader', () => {
  let component: Perfilheader;
  let fixture: ComponentFixture<Perfilheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perfilheader],
    }).compileComponents();

    fixture = TestBed.createComponent(Perfilheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
