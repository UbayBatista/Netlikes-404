import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBody } from './catalog-body';

describe('CatalogBody', () => {
  let component: CatalogBody;
  let fixture: ComponentFixture<CatalogBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogBody],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
