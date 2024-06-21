import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IbadahTrackerPageRoutingModule } from './ibadah-tracker-routing.module';

import { IbadahTrackerPage } from './ibadah-tracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IbadahTrackerPageRoutingModule
  ],
  declarations: [IbadahTrackerPage]
})
export class IbadahTrackerPageModule {}
