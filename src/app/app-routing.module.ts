import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'home',component: ProductsComponent},
  {path:'addProduct',component: AddProductComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:'**',component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
