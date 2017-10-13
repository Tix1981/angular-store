import { Product } from './product';

export class Buyer {

  id:number;
  firstName:string;
  lastName:string;
  email:string;
  products:Array<Product> = [];

  constructor(firstName:string, lastName:string, email:string, products:Array<Product> = []) {

    this.id = 0;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.products = products;

  }
}
