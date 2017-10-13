import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BuyersServiceService } from '../../services/buyers-service.service'

@Component({
  selector: 'app-check-latest-purchases',
  templateUrl: './check-latest-purchases.component.html',
  styleUrls: ['./check-latest-purchases.component.css']
})
export class CheckLatestPurchasesComponent implements OnInit {

  buyer:Object;

  constructor(private buyersService:BuyersServiceService, private route:ActivatedRoute) {
    route.params.subscribe(params => {
      buyersService.getBuyers().forEach(buyer => {
        if(buyer['firstName'] == params.name) {
          this.buyer = buyer;
        }
      })
    })
  }

  ngOnInit() {
  }

}
