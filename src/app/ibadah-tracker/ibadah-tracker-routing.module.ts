import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IbadahTrackerPage } from './ibadah-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: IbadahTrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IbadahTrackerPageRoutingModule {}
