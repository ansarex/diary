import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayerSummaryPage } from './prayer-summary.page';

const routes: Routes = [
  {
    path: '',
    component: PrayerSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayerSummaryPageRoutingModule {}
