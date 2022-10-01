import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl:string='/api/products'
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private httpClient: HttpClient) { }
  //add(product:Product):void {
    // console.log(product);
    // product.like = 0;
    // this.productslist.push(product);
  //}

  getProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productsUrl);
  }
  addProduct (product: Product): Observable<Product> {
    product.like = 0;
    return this.httpClient.post<Product>(this.productsUrl, product,
    this.httpOptions);}

  deleteProduct(id:any): Observable<any>{
    return this.httpClient.delete<any>(this.productsUrl+'/'+id);
  }

  getProductById(id:any):Observable<Product>{
    return this.httpClient.get<Product>(this.productsUrl+'/'+id);
  }

  updateProduct(id:any,product: Product): Observable<any>{
    return this.httpClient.put(this.productsUrl+'/'+id,product,this.httpOptions);
  }
}
