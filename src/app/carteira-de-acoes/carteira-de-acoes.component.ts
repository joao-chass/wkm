import { ListaAcoesBolsaComponent } from './../lista-acoes-bolsa/lista-acoes-bolsa.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carteira-de-acoes',
  templateUrl: './carteira-de-acoes.component.html',
  styleUrls: ['./carteira-de-acoes.component.scss'],
})
export class CarteiraDeAcoesComponent implements OnInit {
  acoesNaCarteira;
  pesquisa;
  constructor(
    private acoes: ListaAcoesBolsaComponent
  ) {
  }

  ngOnInit() {
    this.validarCarteira();
  }

  validarCarteira() {
    this.acoesNaCarteira = [];
    this.acoes.acoesBolsa.map(
      acoesCarteira => {
        if(acoesCarteira.quatidadeDeAcoes > 0 || acoesCarteira.agendado == true) {
          console.log(acoesCarteira);
          this.acoesNaCarteira.push(...[
            {
              "id": acoesCarteira.id,
              "img": acoesCarteira.img,
              "quatidadeDeAcoes": acoesCarteira.quatidadeDeAcoes,
              "codigo": acoesCarteira.codigo,
              "cotacao": acoesCarteira.cotacao,
              "agendado": acoesCarteira.agendado
            }]
          )
        }} );
  }

    doRefresh(event) {
        this.validarCarteira();

      setTimeout(() => {
        event.target.complete();
      }, 1000);
    }

}

