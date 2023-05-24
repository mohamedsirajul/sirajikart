import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { LogiiiinComponent } from './login/logiiiin/logiiiin.component';
import { RegComponent } from './login/reg/reg.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GoolepayComponent } from './checkout/goolepay/goolepay.component';
import { PhonepayComponent } from './checkout/phonepay/phonepay.component';


const routes: Routes = [
  // {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'register', component:RegComponent },
  {path:'login', component:LogiiiinComponent },
  {path:'googlepay', component:GoolepayComponent },
  {path:'phonepay', component:PhonepayComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
