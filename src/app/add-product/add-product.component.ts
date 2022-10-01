import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product=new Product();
  constructor(private productService: ProductService,private router: Router,private ac:ActivatedRoute) { }
  id:any;
  titre:any="";
  ngOnInit(): void { 
    this.id = this.ac.snapshot.params.id;
    if(this.id === undefined) {
      this.product = new Product();
      this.titre='Add new Product';
    }else {
      this.productService.getProductById(this.id).subscribe(res=>{
         this.product=res;
        this.titre = 'Update Product'+res.title;}) 
    }
    
    

  }

  onSubmit(){
    console.log(this.product);
    if(this.id === undefined){
      this.productService.addProduct(this.product).subscribe((data)=>this.router.navigateByUrl('/home'));  
    }else{
      this.productService.updateProduct(this.id,this.product).subscribe((data)=>this.router.navigateByUrl('/home'));  

    }
  }

}
