import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandPanel } from './brand-panel';

describe('BrandPanel', () => {
  let component: BrandPanel;
  let fixture: ComponentFixture<BrandPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});