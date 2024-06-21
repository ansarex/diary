import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyNotesPageRoutingModule } from './daily-notes-routing.module';

import { DailyNotesPage } from './daily-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyNotesPageRoutingModule
  ],
  declarations: [DailyNotesPage]
})
export class DailyNotesPageModule {}
