import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacao-tabs',
  templateUrl: './navegacao-tabs.component.html',
  styleUrls: ['./navegacao-tabs.component.scss'],
})
export class NavegacaoTabsComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {}

}
