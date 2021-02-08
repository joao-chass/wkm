import { CarteiraDeAcoesComponent } from './carteira-de-acoes/carteira-de-acoes.component';
import { DetalheAcoesComponent } from './lista-acoes-bolsa/detalhe-acoes/detalhe-acoes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'carteira', component: CarteiraDeAcoesComponent
  },
  {
    path: 'detalhe-acao/:id', component: DetalheAcoesComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
