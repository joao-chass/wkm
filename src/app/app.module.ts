import { FiltroPipe } from './utils/filtro.pipe';
import { CarteiraDeAcoesComponent } from './carteira-de-acoes/carteira-de-acoes.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetalheAcoesComponent } from './lista-acoes-bolsa/detalhe-acoes/detalhe-acoes.component';
import { NavegacaoTabsComponent } from './navegacao-tabs/navegacao-tabs.component';
import { HomeComponent } from './home/home.component';
import { ListaAcoesBolsaComponent } from './lista-acoes-bolsa/lista-acoes-bolsa.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaAcoesBolsaComponent,
    HomeComponent,
    NavegacaoTabsComponent,
    FiltroPipe,
    DetalheAcoesComponent,
    CarteiraDeAcoesComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    ListaAcoesBolsaComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [
    FiltroPipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
