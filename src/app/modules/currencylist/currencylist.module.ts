import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencylistRoutingModule } from './currencylist-routing.module';
import { CurrencylistComponent } from './currencylist/currencylist.component';

@NgModule({
  declarations: [CurrencylistComponent],
  imports: [
    CommonModule,
    CurrencylistRoutingModule
  ]
})
export class CurrencylistModule { }
