import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product : Product = new Product();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.product);
  }

}
