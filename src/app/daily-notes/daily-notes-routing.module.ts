import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyNotesPage } from './daily-notes.page';

const routes: Routes = [
  {
    path: '',
    component: DailyNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyNotesPageRoutingModule {}
