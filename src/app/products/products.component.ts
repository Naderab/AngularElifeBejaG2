import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProducts: Product[]=[];
  title :string = "Product List";
  prixMax:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.listProducts=[
      {id: '1', title: "T-shirt 1", price: 18, quantity: 0, like: 0,picture:'https://img-0.journaldunet.com/JgOAEEaKp00acGdrktPUB8Y2__8=/1500x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg'},
      {id: '2', title: "T-shirt 2", price: 21, quantity: 10, like: 0,picture:'https://img-0.journaldunet.com/JgOAEEaKp00acGdrktPUB8Y2__8=/1500x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg'},
      {id: '3', title: "T-shirt 3", price: 16, quantity: 8, like: 0,picture:'https://img-0.journaldunet.com/JgOAEEaKp00acGdrktPUB8Y2__8=/1500x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg'}, ]
  }

  public Buy(i:number): void {
    this.listProducts[i].quantity = this.listProducts[i].quantity -1 ;
  }

  public Like(i:number): void {
    this.listProducts[i].like = this.listProducts[i].like +1 ;
  }

}
