import {Component, OnInit} from '@angular/core';
import {CoinService} from './coin.service';
import _ from 'lodash';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit {

  public coin : number;
  public tobtc : number;
  public qtc : number;

  coins = [
    {
      id: 'BRL',
      name: 'Real'
    }, {
      id: 'USD',
      name: 'Dolar'
    }, {
      id: 'EUR',
      name: 'Euro'
    }
  ];
  selectedCoin : string = 'BRL';
  sel: string;

  constructor(private coinService : CoinService) {
    this
      .coinService
      .getCoin()
      .subscribe(coin => this.coin = _.get(coin, 'BRL.buy'));
  }

  ngOnInit() {}

  getCoin() : void {
    if(this.selectedCoin === 'BRL') {
      this
        .coinService
        .getCoin()
        .subscribe(coin => this.coin = _.get(coin, 'BRL.buy'));
      this
        .coinService
        .convertCoin(this.selectedCoin, this.qtc)
        .subscribe(tobtc => this.tobtc = tobtc);
    } else if (this.selectedCoin === 'USD') {
      this
        .coinService
        .getCoin()
        .subscribe(coin => this.coin = _.get(coin, 'USD.buy'));
      this
        .coinService
        .convertCoin(this.selectedCoin, this.qtc)
        .subscribe(tobtc => this.tobtc = tobtc);
    } else if (this.selectedCoin === 'EUR') {
      this
        .coinService
        .getCoin()
        .subscribe(coin => this.coin = _.get(coin, 'EUR.buy'));
      this
        .coinService
        .convertCoin(this.selectedCoin, this.qtc)
        .subscribe(tobtc => this.tobtc = tobtc);
    }
    this.sel = this.selectedCoin;
  }

  clearCoin() : void {
    this.tobtc = null;
    this.qtc = null;
    this.selectedCoin = null;
  }
}
