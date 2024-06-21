import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ibadah-tracker',
  templateUrl: './ibadah-tracker.page.html',
  styleUrls: ['./ibadah-tracker.page.scss'],
})
export class IbadahTrackerPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goto(path: any) {
    switch (path) {
      case 'sedekah': {
        this.router.navigate(['/sedekah-page']);
        break;
      }
      case 'zikir': {
        this.router.navigate(['/zikir-page']);
        break;
      }
      case 'fasting': {
        this.router.navigate(['/fasting-page']);
        break;
      }
      case 'prayers': {
        this.router.navigate(['/prayer-page'])
      }
    }
  }
}
