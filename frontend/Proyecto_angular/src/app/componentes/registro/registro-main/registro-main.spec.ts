import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroMain } from './registro-main';

describe('RegistroMain', () => {
  let component: RegistroMain;
  let fixture: ComponentFixture<RegistroMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});