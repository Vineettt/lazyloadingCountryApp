import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './modules/homepage/homepage.module#HomepageModule'},
  {path: 'language', loadChildren: './modules/languagelist/languagelist.module#LanguagelistModule'},
  {path: 'currency', loadChildren: './modules/currencylist/currencylist.module#CurrencylistModule'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
