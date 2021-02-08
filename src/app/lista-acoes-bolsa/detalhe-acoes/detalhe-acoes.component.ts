import { ListaAcoesBolsaComponent } from './../lista-acoes-bolsa.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalhe-acoes',
  templateUrl: './detalhe-acoes.component.html',
  styleUrls: ['./detalhe-acoes.component.scss'],
})
export class DetalheAcoesComponent implements OnInit {
  acao;
  quantidadeDeOredem = 0;
  agendarOrdem = false;
  tempoAgendamento = 0;
  valorAgendado;

  constructor(
    private acoes: ListaAcoesBolsaComponent,
    private route: ActivatedRoute,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.acao = this.acoes.acoesBolsa[id];
    });
  }

  botaoQuantidade(operacao) {
    if (operacao == 'somar') {
      this.quantidadeDeOredem += 1;
    } else if (operacao == 'subitrair' && this.quantidadeDeOredem > 0) {
      this.quantidadeDeOredem -= 1;
    } else {
      this.alertaUsuario('Quantida invalida', 'danger', 'close-circle-outline');
    }
  }

  async alertaUsuario(msg, cor, icone) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: cor,
      buttons: [
        {
          icon: icone,
        },
      ],
    });
    toast.present();
  }

  solicitacaoDeOrdem(tipoDeAcao) {
    if (this.quantidadeDeOredem > 0) {
      if (tipoDeAcao == 'comprar') {
        this.acao.quatidadeDeAcoes += this.quantidadeDeOredem;
        this.alertaUsuario(
          'Ordem de compra efetuado',
          'success',
          'checkmark-outline'
        );
        this.quantidadeDeOredem = 0;
      } else if (
        tipoDeAcao == 'vender' &&
        this.acao.quatidadeDeAcoes > 0 &&
        this.acao.quatidadeDeAcoes - this.quantidadeDeOredem > -1
      ) {
        this.alertaUsuario(
          'Ordem de venda efetuada',
          'primary',
          'checkmark-outline'
        );
        this.acao.quatidadeDeAcoes -= this.quantidadeDeOredem;
        this.quantidadeDeOredem = 0;
      } else {
        this.alertaUsuario(
          'Você não possui ações o suficiente',
          'warning',
          'alert-outline'
        );
      }
    } else {
      this.alertaUsuario('Quantida invalida', 'danger', 'close-circle-outline');
    }
  }


  agendar(acaoAgendamento) {
    this.acao.agendado = true;
    setTimeout(() => {
      if(acaoAgendamento == 'vender' && this.acao.cotacao >= this.valorAgendado) {
        this.solicitacaoDeOrdem('vender');
        this.acao.agendado = false;
      } else if(acaoAgendamento == 'comprar'  && this.acao.cotacao <= this.valorAgendado) {
        this.solicitacaoDeOrdem('comprar');
        this.acao.agendado = false;
      } else {
        this.alertaUsuario('Agendamento não correspondido', 'warning', 'alert-circle-outline');
        this.acao.agendado = false;
        this.quantidadeDeOredem = 0;
      }
    }, (1000 * this.tempoAgendamento));
  }
}
