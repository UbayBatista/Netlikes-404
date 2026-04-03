import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForoBody } from './foro-body';
import { ListaForos } from '../lista-foros/lista-foros';
import { VentanaChat } from '../ventana-chat/ventana-chat';

describe('ForoBody', () => {
  let component: ForoBody;
  let fixture: ComponentFixture<ForoBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForoBody, ListaForos, VentanaChat]
    }).compileComponents();

    fixture = TestBed.createComponent(ForoBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the sidebar and chat main containers', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.sidebar-foros')).toBeTruthy();
    expect(compiled.querySelector('.chat-main')).toBeTruthy();
  });
});