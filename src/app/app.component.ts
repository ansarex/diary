import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    // this.apiCall();
  }

  //  async apiCall() {
  //   const options = {
  //     url: 'https://api.thecatapi.com/v1/images/0XYvRd7oD',
  //   };

  //   const response: HttpResponse = await CapacitorHttp.get(options);
  // console.log(response);

  // };

  // goto(route: any) {
  //   if (route == "notes") {
  //     this.router.navigate(["daily-notes"]);

  //   } else if (route == "tracker") {
  //     this.router.navigate(['ibadah-tracker']);

  //   } else if (route == "profile") {
  //     this.router.navigate(['profile']);
  //   } else {
  //     this.router.navigate(['home'])
  //   }
  // }

}
