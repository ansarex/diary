import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrayerSummaryPageRoutingModule } from './prayer-summary-routing.module';

import { PrayerSummaryPage } from './prayer-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrayerSummaryPageRoutingModule
  ],
  declarations: [PrayerSummaryPage]
})
export class PrayerSummaryPageModule {}
