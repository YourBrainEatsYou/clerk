import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import {CashierComponent} from './cashier.component';
import {PayPopupModule} from './pay-popup/pay-popup.module';
import {ProductsModule} from './products/products.module';
import {SidebarModule} from './sidebar/sidebar.module';


@NgModule({
  declarations: [
    CashierComponent,
  ],
  imports: [
    CommonModule,
    CashierRoutingModule,
    ProductsModule,
    SidebarModule,
    PayPopupModule,
  ]
})
export class CashierModule { }