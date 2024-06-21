import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZikirPagePageRoutingModule } from './zikir-page-routing.module';

import { ZikirPagePage } from './zikir-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZikirPagePageRoutingModule
  ],
  declarations: [ZikirPagePage]
})
export class ZikirPagePageModule {}
