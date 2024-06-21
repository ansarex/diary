import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SedekahPagePage } from './sedekah-page.page';

const routes: Routes = [
  {
    path: '',
    component: SedekahPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SedekahPagePageRoutingModule {}
