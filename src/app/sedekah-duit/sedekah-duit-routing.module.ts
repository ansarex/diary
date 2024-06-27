import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SedekahDuitPage } from './sedekah-duit.page';

const routes: Routes = [
  {
    path: '',
    component: SedekahDuitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SedekahDuitPageRoutingModule {}
