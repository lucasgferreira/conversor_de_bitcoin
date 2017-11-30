import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BlockchainApi, BlockchainApiToBtc } from '../app.api';
import { ErrorHandler } from '../shared/app.error-handler';

@Injectable()
export class CoinService {
    constructor(private http: Http) {}

    getCoin(): Observable<string> {
        return this.http.get(BlockchainApi)
                        .map(response => response.json());
    }

    convertCoin(selectedCoin: string, qtc: number): Observable<number> {
        return this.http.get(`${BlockchainApiToBtc}currency=${selectedCoin}&value=${qtc}`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handleError);
    }
}
