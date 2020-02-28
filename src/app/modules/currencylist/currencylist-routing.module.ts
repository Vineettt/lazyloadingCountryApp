import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencylistComponent } from './currencylist/currencylist.component';

const routes: Routes = [
  {path: '', component: CurrencylistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencylistRoutingModule { }
