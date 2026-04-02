import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaForos } from './lista-foros';
import { FormsModule } from '@angular/forms';

describe('ListaForos', () => {
  let component: ListaForos;
  let fixture: ComponentFixture<ListaForos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaForos, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaForos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});