import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SedekahPagePageRoutingModule } from './sedekah-page-routing.module';

import { SedekahPagePage } from './sedekah-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SedekahPagePageRoutingModule
  ],
  declarations: [SedekahPagePage]
})
export class SedekahPagePageModule {}
