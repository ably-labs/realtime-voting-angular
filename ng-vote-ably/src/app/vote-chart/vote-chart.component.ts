import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AblyRealtime } from '../util/ably';

@Component({
  selector: 'app-vote-chart',
  templateUrl: './vote-chart.component.html',
  styleUrls: ['./vote-chart.component.css'],
})
export class VoteChartComponent implements OnInit {
  // Attributes
  ably = new AblyRealtime();
  chart = [];
  yes_votes: number = 0;
  no_votes: number = 0;
  maybe_votes: number = 0;
  connectionState: string;
  connectionColor: string;

  ngOnInit() {
    //Attach to channel
    const receiveChannel = this.ably.channels.get('vote-channel');
    // Ably Subscription
    receiveChannel.subscribe(
      'update',
      function (message: any) {
        switch (message.data.vote) {
          case 1:
            this.yes_votes++;
            break;
          case -1:
            this.no_votes++;
            break;
          case 0:
            this.maybe_votes++;
          default:
            break;
        }
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: ['Yes', 'No', 'MayBe'],
            datasets: [
              {
                label: 'Say yes!',
                data: [this.yes_votes, this.no_votes, this.maybe_votes],
                backgroundColor: [
                  'rgba(52, 217, 118, 1)',
                  'rgba(217, 63, 52, 1)',
                  'rgba(230, 127, 0, 1)',
                ],
                borderColor: [
                  'rgba(52, 217, 118, 1)',
                  'rgba(217, 63, 52, 1)',
                  'rgba(230, 127, 0, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            animation: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });
      }.bind(this)
    );
  }
}
