import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguagelistRoutingModule } from './languagelist-routing.module';
import { LanguagelistComponent } from './languagelist/languagelist.component';

@NgModule({
  declarations: [LanguagelistComponent],
  imports: [
    CommonModule,
    LanguagelistRoutingModule
  ]
})
export class LanguagelistModule { }
