import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SedekahDuitPageRoutingModule } from './sedekah-duit-routing.module';

import { SedekahDuitPage } from './sedekah-duit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SedekahDuitPageRoutingModule
  ],
  declarations: [SedekahDuitPage]
})
export class SedekahDuitPageModule {}
