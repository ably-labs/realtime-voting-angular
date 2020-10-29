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
  chart = [];
  yes_votes: number = 0;
  no_votes: number = 0;
  maybe_votes: number = 0;
  connectionState: string;
  connectionColor: string;
  ably = new AblyRealtime();

  ngOnInit() {
    //Attach to channel
    const receiveChannel = this.ably.channels.get('vote-channel', {
      params: {rewind: '20'}
    });
    // Ably Subscription
    receiveChannel.subscribe(
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
            labels: ['Good', 'Bad', 'Just there'],
            datasets: [
              {
                label: '2020 Poll',
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
              },
            ],
          },
          options: {
            animation: true,
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
