import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaAcoesBolsaComponent } from './lista-acoes-bolsa.component';

describe('ListaAcoesBolsaComponent', () => {
  let component: ListaAcoesBolsaComponent;
  let fixture: ComponentFixture<ListaAcoesBolsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAcoesBolsaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAcoesBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
