import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { QuantityComponent } from './component/quantity/quantity.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FilterPipe } from './shared/filter.pipe';
import {MatIconModule} from '@angular/material/icon';
import { LogiiiinComponent } from './login/logiiiin/logiiiin.component';
import { RegComponent } from './login/reg/reg.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import { CheckoutComponent } from './checkout/checkout.component';
import { GoolepayComponent } from './checkout/goolepay/goolepay.component';
import { PhonepayComponent } from './checkout/phonepay/phonepay.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    QuantityComponent,
    FilterPipe,
    LogiiiinComponent,
    RegComponent,
    CheckoutComponent,
    GoolepayComponent,
    PhonepayComponent
  ],

  entryComponents: [QuantityComponent],      

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatStepperModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
