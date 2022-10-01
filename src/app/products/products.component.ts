import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';
import { CalculService } from '../services/calcul.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProducts: Product[]=[];
  title :string = "Product List";
  prixMax:number = 0;
  constructor(private calculService:CalculService,private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data)=>this.listProducts=data);
  }

  public Buy(i:number): void {
    this.listProducts[i].quantity = this.listProducts[i].quantity -1 ;
  }

  public Like(i:number): void {
    this.listProducts[i].like = this.listProducts[i].like +1 ;
  }
  calcul() {
    alert("le nombre de produit ayant une quantité 0  = "+ this.calculService.getNumberOf(this.listProducts,"quantity",0));
  }

  delete(product:Product):void {
    this.productService.deleteProduct(product.id).subscribe(res=>console.log("product deleted successfully"))
  }
}
