import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarteiraDeAcoesComponent } from './carteira-de-acoes.component';

describe('CarteiraDeAcoesComponent', () => {
  let component: CarteiraDeAcoesComponent;
  let fixture: ComponentFixture<CarteiraDeAcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteiraDeAcoesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarteiraDeAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
