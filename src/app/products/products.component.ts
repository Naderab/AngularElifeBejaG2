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
      {id: '1', title: "T-shirt 1", price: 18, quantity: 0, like: 0,picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYwnpCK3dNkY0k2uGPsCl8dQ3vCNgZFgtpg&usqp=CAU'},
      {id: '2', title: "T-shirt 2", price: 21, quantity: 10, like: 0,picture:'https://cdn.shopify.com/s/files/1/0568/9527/5101/products/unisex-basic-softstyle-t-shirt-dark-heather-front-62490fcde0833_740x.jpg?v=1649166490'},
      {id: '3', title: "T-shirt 3", price: 16, quantity: 8, like: 0,picture:'https://www.bfgcdn.com/1500_1500_90/016-2314-1711/sherpa-tarcho-tee-t-shirt.jpg'}, ]
  }

  public Buy(i:number): void {
    this.listProducts[i].quantity = this.listProducts[i].quantity -1 ;
  }

  public Like(i:number): void {
    this.listProducts[i].like = this.listProducts[i].like +1 ;
  }

}
