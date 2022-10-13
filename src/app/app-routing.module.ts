import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path:'home',component: ProductsComponent},
  {path:'addProduct',component: AddProductComponent},
  {path:'updateProduct/:id',component: AddProductComponent},
  {path:'todo',component: TodoListComponent},
  {path:'users',component: UsersComponent},
  {path:'addUser',component: AddUserComponent},

  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:'**',component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
