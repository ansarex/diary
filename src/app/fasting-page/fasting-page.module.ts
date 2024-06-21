import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastingPagePageRoutingModule } from './fasting-page-routing.module';

import { FastingPagePage } from './fasting-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastingPagePageRoutingModule
  ],
  declarations: [FastingPagePage]
})
export class FastingPagePageModule {}
