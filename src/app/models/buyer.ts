import { Product } from './product';

export class Buyer {

  id:number;
  firstName:string;
  lastName:string;
  email:string;
  products:Array<Product> = [];

  constructor(id:number, firstName:string, lastName:string, email:string, products:Array<Product> = []) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.products = products;

  }
}
