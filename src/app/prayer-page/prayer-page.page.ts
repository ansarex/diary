import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prayer-page',
  templateUrl: './prayer-page.page.html',
  styleUrls: ['./prayer-page.page.scss'],
})
export class PrayerPagePage implements OnInit {
  currentTime!: Date;


  prayers = [{
    name: "Subuh",
    status: false
  }, {
    name: "Zohor",
    status: false
  }, {
    name: "Asar",
    status: false
  }, {
    name: "Magrib",
    status: false
  }, {
    name: "Isyak",
    status: false
  },
  ]

  constructor(private router:Router) { 

    this.currentTime = new Date();
    
    // Update the current time every second
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnInit() {
    console.log(this.currentTime)
  }

  toggleStatus(prayer: any) {
    prayer.status = !prayer.status;
  }
  goto() {
    this.router.navigate(['/prayer-summary'])
  }

}
