import { Injectable } from '@angular/core';

import { Buyer } from '../models/buyer'

@Injectable()
export class BuyersServiceService {

  constructor() { }

  private buyers:Array<Buyer> = [

    new Buyer('Ivan', 'Kostadinovic', 'Kostadinovic@gmail.com'),
    new Buyer('Sima', 'Cvetuljac', 'cvetuljac@gmail.com'),
    new Buyer('Vujadin', 'Stanic', 'stanic@gmail.com'),
    new Buyer('Sinisa', 'Stanojlovic', 'stanojlo@gmail.com'),
    new Buyer('Mladen', 'Ciganovic', 'ciganovic@gmail.com')

  ];

  getBuyers() {
    return this.buyers;
  }

}
