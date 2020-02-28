import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguagelistComponent } from './languagelist/languagelist.component';

const routes: Routes = [
  {path: '', component: LanguagelistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguagelistRoutingModule { }
