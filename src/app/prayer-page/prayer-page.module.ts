import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrayerPagePageRoutingModule } from './prayer-page-routing.module';

import { PrayerPagePage } from './prayer-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrayerPagePageRoutingModule
  ],
  declarations: [PrayerPagePage]
})
export class PrayerPagePageModule {}
