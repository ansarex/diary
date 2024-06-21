import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-sedekah-page',
  templateUrl: './sedekah-page.page.html',
  styleUrls: ['./sedekah-page.page.scss'],
})
export class SedekahPagePage implements OnInit, AfterViewInit {
  @ViewChild('doughnutCanvas') private doughnutCanvas!: ElementRef;

  doughnutChart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.doughnutChartMethod();
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [50, 29, 15, 10],
          backgroundColor: [
            'rgba(95, 225, 228, 10 )',
            'rgba(255, 255, 255, 10 )',
            'rgba(255, 255, 255, 10 )',
            'rgba(255, 255, 255, 10 )',

          ],
          hoverBackgroundColor: [
            '#005C6E',
            '#005C6E',
            '#005C6E',
            '#005C6E',
          ],
   
          borderRadius: 1 
        }]
      },
      options: {
        plugins: {
          tooltip: {
            // callbacks: {
            //   label: function (context) {
            //     let label = context.label || '';
            //     if (label) {
            //       label += ': ';
            //     }
            //     if (context.raw !== null) {
            //       label += context.raw;
            //     }
            //     return label;
            //   }
            // }
          }
        }
      }
    });
  }

}
