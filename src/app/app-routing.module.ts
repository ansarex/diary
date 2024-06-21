import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'daily-notes',
    loadChildren: () => import('./daily-notes/daily-notes.module').then( m => m.DailyNotesPageModule)
  },
  {
    path: 'ibadah-tracker',
    loadChildren: () => import('./ibadah-tracker/ibadah-tracker.module').then( m => m.IbadahTrackerPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'sedekah-page',
    loadChildren: () => import('./sedekah-page/sedekah-page.module').then( m => m.SedekahPagePageModule)
  },
  {
    path: 'fasting-page',
    loadChildren: () => import('./fasting-page/fasting-page.module').then( m => m.FastingPagePageModule)
  },
  {
    path: 'zikir-page',
    loadChildren: () => import('./zikir-page/zikir-page.module').then( m => m.ZikirPagePageModule)
  },
  {
    path: 'prayer-page',
    loadChildren: () => import('./prayer-page/prayer-page.module').then( m => m.PrayerPagePageModule)
  },
  {
    path: 'prayer-summary',
    loadChildren: () => import('./prayer-summary/prayer-summary.module').then( m => m.PrayerSummaryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
