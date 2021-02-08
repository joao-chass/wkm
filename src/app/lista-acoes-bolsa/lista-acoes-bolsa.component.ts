import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-acoes-bolsa',
  templateUrl: './lista-acoes-bolsa.component.html',
  styleUrls: ['./lista-acoes-bolsa.component.scss'],
})
export class ListaAcoesBolsaComponent implements OnInit {
  pesquisa;

  public acoesBolsa = [
    {id: 0, quatidadeDeAcoes: 0, agendado: false, codigo: "VALE3", nomeDePregao: "VALE ON", indicador: "1,74", indicadorSatus: "positivo", cotacao : 89.29, img: "https://static.guiainvest.com.br/Images/Ativo/VALE_120.gif"},
    {id: 1, quatidadeDeAcoes: 0, agendado: false, codigo: "BBDC4", nomeDePregao: "BRADESCO PN", indicador: "3.82", indicadorSatus: "positivo", cotacao : 26.01, img: "https://static.guiainvest.com.br/Images/Ativo/BBDC_120.gif"},
    {id: 2, quatidadeDeAcoes: 0, agendado: false, codigo: "ITUB4", nomeDePregao: "ITAUUNIBANCO PN", indicador: "0.29", indicadorSatus: "negativo", cotacao : 28.20, img: "https://static.guiainvest.com.br/Images/Ativo/ITUB_120.gif"},
    {id: 3, quatidadeDeAcoes: 0, agendado: false, codigo: "PETR4", nomeDePregao: "PETROBRAS PN", indicador: "0.96", indicadorSatus: "positivo", cotacao : 28.82, img: "https://static.guiainvest.com.br/Images/Ativo/PETR_120.gif"},
    {id: 4, quatidadeDeAcoes: 0, agendado: false, codigo: "VVR3", nomeDePregao: "VIAVAREJO ON", indicador: "0.92", indicadorSatus: "positivo", cotacao : 15.00, img: "https://static.guiainvest.com.br/Images/Ativo/VVAR_120.gif"},
    {id: 5, quatidadeDeAcoes: 0, agendado: false, codigo: "VALE3", nomeDePregao: "VALE ON", indicador: "1,74", indicadorSatus: "positivo", cotacao : 89.29, img: "https://static.guiainvest.com.br/Images/Ativo/VALE_120.gif"},
    {id: 6, quatidadeDeAcoes: 0, agendado: false, codigo: "BBDC4", nomeDePregao: "BRADESCO PN", indicador: "3.82", indicadorSatus: "positivo", cotacao : 26.01, img: "https://static.guiainvest.com.br/Images/Ativo/BBDC_120.gif"},
    {id: 7, quatidadeDeAcoes: 0, agendado: false, codigo: "ITUB4", nomeDePregao: "ITAUUNIBANCO PN", indicador: "0.29", indicadorSatus: "negativo", cotacao : 28.20, img: "https://static.guiainvest.com.br/Images/Ativo/ITUB_120.gif"},
    {id: 8, quatidadeDeAcoes: 0, agendado: false, codigo: "PETR4", nomeDePregao: "PETROBRAS PN", indicador: "0.96", indicadorSatus: "positivo", cotacao : 28.82, img: "https://static.guiainvest.com.br/Images/Ativo/PETR_120.gif"},
    {id: 9, quatidadeDeAcoes: 0, agendado: false, codigo: "VVR3", nomeDePregao: "VIAVAREJO ON", indicador: "0.92", indicadorSatus: "positivo", cotacao : 15.00, img: "https://static.guiainvest.com.br/Images/Ativo/VVAR_120.gif"},
  ]
  constructor(public route: Router) { }

  ngOnInit() {}

  detalheAcao(idAcao) {
    this.route.navigateByUrl(`detalhe-acao/${idAcao}`)
  }

}
