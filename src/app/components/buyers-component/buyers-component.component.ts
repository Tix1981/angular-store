import { Component, OnInit } from '@angular/core';

import { BuyersServiceService } from '../../services/buyers-service.service';
import { Buyer } from '../../models/buyer';

@Component({
  selector: 'app-buyers-component',
  templateUrl: './buyers-component.component.html',
  styleUrls: ['./buyers-component.component.css']
})
export class BuyersComponentComponent implements OnInit {
  buyers:Array<Buyer>;

  constructor(private buyersService:BuyersServiceService) {
    this.buyers = buyersService.getBuyers();
  }

  ngOnInit() {
  }

  buyerFirstName:string;
  buyerLastName:string;
  buyerEmail:string;

  addBuyer() {
    let NewBuyer = new Buyer(this.buyerFirstName, this.buyerLastName, this.buyerEmail);
    this.buyers.push(NewBuyer);
    this.buyerFirstName = '';
    this.buyerLastName = '';
    this.buyerEmail = '';
  }

  deleteBuyer(buyer) {
    this.buyers.splice(this.buyers.indexOf(buyer), 1);
  }

}
