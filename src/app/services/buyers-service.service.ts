import { Injectable } from '@angular/core';

import { Buyer } from '../models/buyer'

@Injectable()
export class BuyersServiceService {

  constructor() { }

  private buyers:Array<Buyer> = [

    new Buyer(1, 'Ivan', 'Kostadinovic', 'Kostadinovic@gmail.com'),
    new Buyer(2, 'Sima', 'Cvetuljac', 'cvetuljac@gmail.com'),
    new Buyer(3, 'Vujadin', 'Stanic', 'stanic@gmail.com'),
    new Buyer(4, 'Sinisa', 'Stanojlovic', 'stanojlo@gmail.com'),
    new Buyer(5, 'Mladen', 'Ciganovic', 'ciganovic@gmail.com')

  ];

  getBuyers() {
    return this.buyers;
  }

}
