import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VentanaChat } from './ventana-chat';
import { FormsModule } from '@angular/forms';

describe('VentanaChat', () => {
  let component: VentanaChat;
  let fixture: ComponentFixture<VentanaChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanaChat, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VentanaChat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});